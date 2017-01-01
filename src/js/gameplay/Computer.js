import Player from './Player';
import {randomizeShips} from '../utils/randomizeShips';

class Computer extends Player {
    constructor(...args) {
        super(...args);
        randomizeShips(this.allyGrid, this.playerModel);
    }
}

export default Computer;