import './console.scss';
import {randomizeShips} from '../utils/randomizeShips';
import {bindableSetterChanged} from '../utils/bindableSetterChanged';
import consoleTemplate from './_console.html';

class Console {

    randomizeButton;
    startGameButton;

    constructor(grid, gameState) {
        Object.assign(this, {
            playerModelChangeHandler: this.playerModelChangeHandler.bind(this),
            randomizeButtonClickHandler: this.randomizeButtonClickHandler.bind(this),
            startGameClickHandler: this.startGameClickHandler.bind(this),
            gameStateChangeHandler: this.gameStateChangeHandler.bind(this),

            grid,
            gameState
        });
    }

    get element() {
        if (!this._element) {
            this._element = document.createElement('section');
            this._element.id = 'console';
        }
        return this._element;
    }

    get player1() {
        return this._player1;
    }

    set player1(value) {
        bindableSetterChanged.call(this, '_player1', value, this.playerModelChangeHandler);
    }

    get player2() {
        return this._player2;
    }

    set player2(value) {
        bindableSetterChanged.call(this, '_player2', value, this.playerModelChangeHandler);
    }

    get gameState() {
        return this._gameState;
    }

    set gameState(value) {
        bindableSetterChanged.call(this, '_gameState', value, this.gameStateChangeHandler);
        const {player1, player2} = (value || {});
        Object.assign(this, {player1, player2});
    }

    render() {
        const element = this.element;
        element.innerHTML = consoleTemplate;
        this.postRenderActions();
        return element;
    }

    postRenderActions() {
        const randomizeButton = this.element.querySelector('#randomize');
        randomizeButton.addEventListener('click', this.randomizeButtonClickHandler);

        const startGameButton = this.element.querySelector('#start');
        startGameButton.addEventListener('click', this.startGameClickHandler);

        Object.assign(this, {randomizeButton, startGameButton});
    }

    playerModelChangeHandler(source, changes) {
        if (changes.allShipsPlaced && source.allShipsPlaced){
          this.startGameButton.removeAttribute('disabled');
        }
    }

    gameStateChangeHandler(source, changes) {
        if ('playerTurn' in changes) {
            this.playerTurnChanged(changes);
        }
    }

    playerTurnChanged(changes) {
        const player = changes.playerTurn.newValue;
        const statElements = this.element.querySelectorAll('.stats ul');
        statElements[0].classList = player === this.player1 ? 'selected' : '';
        statElements[1].classList = player === this.player2 ? 'selected' : '';
    }

    randomizeButtonClickHandler() {
        randomizeShips(this.grid, this.player1);
    }

    startGameClickHandler(event) {
        this.gameState.gameStarted = true;
        [this.startGameButton, this.randomizeButton].forEach(button => button.setAttribute('disabled', ''));
    }
}
export default Console;