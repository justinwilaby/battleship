import { bindableSetterChanged } from '../utils/bindableSetterChanged';
import { randomizeShips } from '../utils/randomizeShips';
import consoleTemplate from './_console.html';
import './console.scss';

class Console {
  _gameState;
  _element;
  /**
   * @type {PlayerModel}
   */
  _player1;
  /**
   * @type {PlayerModel}
   */
  _player2;
  randomizeButton;
  startGameButton;
  grid;

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
    const {player1, player2} = ( value || {} );
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

  /**
   *
   * @param {PlayerModel} source
   * @param changes
   */
  playerModelChangeHandler(source, changes) {
    if (source === this.player1 && changes.allShipsPlaced && source.allShipsPlaced) {
      this.startGameButton.removeAttribute('disabled');
    }

    if ('outboundShots' in changes) {
      this.outboundShotsChanged(source, changes);
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
    const selected = 'selected';
    const [ stat1, stat2 ] = statElements;
    player === this.player1 ? stat1.classList.add(selected) : stat1.classList.remove(selected);
    player === this.player2 ? stat2.classList.add(selected) : stat2.classList.remove(selected);
  }

  /**
   *
   * @param {PlayerModel} source
   * @param {*} changes
   */
  outboundShotsChanged(source, changes) {
    const statElements = this.element.querySelectorAll('.stats ul');
    const [ stat1, stat2 ] = statElements;
    const opponent = source === this._player1 ? this._player2 : this._player1;
    const targetList = source === this._player1 ? stat1 : stat2;
    const [ hitsElement, attemptsElement, accuracyElement ] = targetList.querySelectorAll('span');
    const hits = source.outboundShots.filter(cell => opponent.occupiedCellsSet.has(cell));
    attemptsElement.textContent = '' + source.outboundShots.length;
    hitsElement.textContent = '' + hits.length;
    if (hits.length) {
      const percentage = ( hits.length / source.outboundShots.length ) * 100;
      accuracyElement.textContent = '' + percentage - ( percentage % .25 );
    }
  }

  randomizeButtonClickHandler() {
    randomizeShips(this.grid, this.player1);
  }

  startGameClickHandler() {
    this.gameState.gameStarted = true;
    [ this.startGameButton, this.randomizeButton ].forEach(button => button.setAttribute('disabled', ''));
  }
}

export default Console;
