import Player from './Player';
import {findCellAtPoint} from '../utils/findCellAtPoint';

class Human extends Player {
    constructor(...args) {
        super(...args);
        this.opponentGrid.addEventListener('click', this.opponentGridClickHandler);
    }

    opponentGridClickHandler(event) {
        const {pageX, pageY, currentTarget} = event;
        const cell = findCellAtPoint(pageX, pageY, currentTarget);
    }
}

export default Human;