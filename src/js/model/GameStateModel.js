import PlayerModel from '../model/PlayerModel';
import {bindable} from 'bind-property';

@bindable('gameStarted')
@bindable('playerTurn')
class GameStateModel {

    gameStarted;
    playerTurn;

    constructor(gameStarted = false, playerTurn = null) {
        Object.assign(this, {gameStarted, playerTurn});
    }

    get player1(){
        return this._player1 || (this._player1 = new PlayerModel());
    }

    get player2(){
        return this._player2 || (this._player2 = new PlayerModel());
    }
}

export default GameStateModel;