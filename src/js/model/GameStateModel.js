import { bindable } from 'bind-property';
import PlayerModel from '../model/PlayerModel';

class GameStateModel {
  /**
   * @type {boolean}
   */
  @bindable gameStarted;
  /**
   * @type {PlayerModel}
   */
  @bindable playerTurn;

  constructor(gameStarted = false, playerTurn = null) {
    Object.assign(this, {gameStarted, playerTurn});
  }

  /**
   *
   * @returns {PlayerModel}
   */
  get player1() {
    return this._player1 || ( this._player1 = new PlayerModel() );
  }

  /**
   *
   * @returns {PlayerModel}
   */
  get player2() {
    return this._player2 || ( this._player2 = new PlayerModel() );
  }
}

export default GameStateModel;
