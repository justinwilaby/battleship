import {getHitInfo} from '../utils/getHitInfo';
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

    constructor(grids, player1, player2) {
        Object.assign(this, {grids, player1, player2});
    }

    get player1() {
        return this._player1;
    }

    set player1(value) {
        if (this._player1 === value)
            return;

        if (this._player1) {
            this._player1.removeChangeListener(playerModelChangeHandler);
        }
        this._player1 = value;
        this._player1.addChangeListener(playerModelChangeHandler);
    }

    get player2() {
        return this._player2;
    }

    set player2(value) {
        if (this._player2 === value)
            return;

        if (this._player2) {
            this._player2.removeChangeListener(playerModelChangeHandler);
        }
        this._player2 = value;
        this._player2.addChangeListener(playerModelChangeHandler);
    }

    startGame() {
        this.human = new Human(this.grids[1], this.grids[0], this.player1);
        this.computer = new Computer(this.grids[0], this.grids[1], this.player2);
    }
}

export default GamePlay;