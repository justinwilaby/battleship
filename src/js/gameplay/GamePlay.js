import { bindableSetterChanged } from '../utils/bindableSetterChanged';
import { getHitInfo } from '../utils/getHitInfo';
import Computer from './Computer';
import Human from './Human';

class GamePlay {
  /**
   * @type Array<Node>
   */
  grids;
  /**
   * @type {Computer}
   */
  computer;
  /**
   * @type {Human}
   */
  human;
  /**
   * @private
   */
  _player1;
  /**
   * @private
   */
  _player2;
  /**
   * @private
   */
  _gameState;

  constructor(grids, gameState) {
    this.gameStateChangeHandler = this.gameStateChangeHandler.bind(this);
    this.playerModelChangeHandler = this.playerModelChangeHandler.bind(this);

    Object.assign(this, {grids, gameState});
  }
  /**
   *
   * @returns {PlayerModel}
   */
  get player1() {
    return this._player1;
  }
  set player1(value) {
    bindableSetterChanged.call(this, '_player1', value, this.playerModelChangeHandler);
  }
  /**
   *
   * @returns {PlayerModel}
   */
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

  playerModelChangeHandler(source, changes) {
    const {playerTurn} = this.gameState;
    if (!( 'outboundShots' in changes ) || source !== playerTurn) {
      return;
    }
    const {outboundShots} = playerTurn;
    const targetCell = outboundShots[ outboundShots.length - 1 ];
    const opponent = playerTurn === this.player1 ? this.player2 : this.player1;
    const hitInfo = getHitInfo(opponent, targetCell);
    if (hitInfo) {
      const {ship, index} = hitInfo;
      ship.hits = ( ship.hits[ index ] = true, ship.hits ).concat();
    }
    this.gameState.playerTurn = opponent;
  }

  gameStateChangeHandler(source, changes) {
    if ('gameStarted' in changes && changes.gameStarted.newValue) {
      this.startGame();
    }
  }

  startGame() {
    this.human = new Human(this.grids[ 1 ], this.grids[ 0 ], this.player1, this.gameState);
    this.computer = new Computer(this.grids[ 0 ], this.grids[ 1 ], this.player2, this.gameState);
    this.gameState.playerTurn = this.player1;
  }
}

export default GamePlay;
