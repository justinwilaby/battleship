import {allShipTypes} from '../enum/ShipTypeEnum';
import ShipModel from './ShipModel';

function generateDefaultShips(){
    const ships = [];
    allShipTypes.forEach(type =>{
        const {maxAllowed} = type;
        for (let i = 0; i < maxAllowed; i++){
            ships.push(new ShipModel({type}));
        }
    });
    return ships;
}

class ShipCollection {
    constructor() {
        super();
    }

    get ships(){
        return this._ships || (this._ships = generateDefaultShips());
    }
}

export default ShipCollection;