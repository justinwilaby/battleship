import { bindable } from 'bind-property';

@bindable('hits')
@bindable('direction')
@bindable('occupiedCells')
class ShipModel {
    hits;
    type;
    direction;
    occupiedCells;

    constructor({hits = [], type, direction = 0, occupiedCells}) {
        Object.assign(this, {hits, type, direction, occupiedCells});
    }

    toString() {
        return '' + this.type;
    }
}

export default ShipModel;