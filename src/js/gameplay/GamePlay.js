import {getHitInfo} from '../utils/getHitInfo';
import {bindableSetterChanged} from '../utils/bindableSetterChanged';
import Computer from './Computer';
import Human from './Human';

function playerModelChangeHandler(source, changes) {
    if (!('incomingShots' in changes)) {
        return;
    }
    const targetCell = changes.incomingShots.newValue[0];
    const hitInfo = getHitInfo(source, targetCell);
    if (hitInfo) {
        const {ship, index} = hitInfo;
        ship.hits = (ship.hits[index] = true, ship.hits).concat();
    }
}

class GamePlay {
    grids;
    computer;
    human;
    playerTurn = 0;

    constructor(grids, gameState) {
        this.gameStateChangeHandler = this.gameStateChangeHandler.bind(this);
        Object.assign(this, {grids, gameState});
    }

    get player1() {
        return this._player1;
    }

    set player1(value) {
        bindableSetterChanged.call(this, '_player1', value, playerModelChangeHandler);
    }

    get player2() {
        return this._player2;
    }

    set player2(value) {
        bindableSetterChanged.call(this, '_player2', value, playerModelChangeHandler);
    }

    get gameState() {
        return this._gameState;
    }

    set gameState(value) {
        bindableSetterChanged.call(this, '_gameState', value, this.gameStateChangeHandler);
        const {player1, player2} = (value || {});
        Object.assign(this, {player1, player2});
    }

    gameStateChangeHandler(source, changes) {
        if ('gameStarted' in changes && changes.gameStarted.newValue) {
            this.startGame();
        }

        if ('playerTurn' in changes){
            this.playerTurnChangedHandler(changes.playerTurn.newValue);
        }
    }

    startGame() {
        this.human = new Human(this.grids[1], this.grids[0], this.player1);
        this.computer = new Computer(this.grids[0], this.grids[1], this.player2);
        this.gameState.playerTurn = this.player1;
    }

    playerTurnChangedHandler(playerTurn){
        if (playerTurn === this.gameState.player2){

        }
    }
}

export default GamePlay;