import './console.scss';
import {randomizeShips} from '../utils/randomizeShips';
import consoleTemplate from './_console.html';

class Console {

    constructor(grid, player1, player2) {
        Object.assign(this, {
            grid,
            player1,
            player2,
            playerModelChangeHandler: this.playerModelChangeHandler.bind(this),
            randomizeButtonClickHandler: this.randomizeButtonClickHandler.bind(this)
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
        if (this._player1 === value)
            return;

        if (this._player1) {
            this._player1.removeChangeListener(this.playerModelChangeHandler);
        }
        this._player1 = value;
        this._player1.addChangeListener(this.playerModelChangeHandler);
    }

    get player2() {
        return this._player2;
    }

    set player2(value) {
        if (this._player2 === value)
            return;

        if (this._player2) {
            this._player2.removeChangeListener(this.playerModelChangeHandler);
        }
        this._player2 = value;
        this._player2.addChangeListener(this.playerModelChangeHandler);
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
    }

    playerModelChangeHandler() {

    }

    randomizeButtonClickHandler() {
        randomizeShips(this.grid, this.player1);
    }
}
export default Console;