import {bindable, queueNotification} from 'bind-property';
import {allShipTypes, totalCells} from '../enum/ShipTypeEnum';
import ShipModel from './ShipModel'

function generateDefaultShips(changeHandler) {
    const shipModels = [];
    allShipTypes.forEach(type => {
        const {maxAllowed} = type;
        for (let i = 0; i < maxAllowed; i++) {
            const shipModel = new ShipModel({type});
            shipModel.addChangeListener(changeHandler, 1000);
            shipModels.push(shipModel);
        }
    });
    return shipModels;
}

@bindable('incomingShots')
class PlayerModel {
    outboundShots = [];
    incomingShots = [];
    occupiedCellsSet = new Set();

    constructor(){
        this.shipModelChangedHandler = this.shipModelChangedHandler.bind(this);
    }

    get ships() {
        return this._ships || (this._ships = generateDefaultShips(this.shipModelChangedHandler));
    }

    get allShipsPlaced(){
        return !!this._allShipsPlaced;
    }

    shipModelChangedHandler(source, changes, priority){
        if (!changes.occupiedCells){
            return;
        }
        const newValue = this.occupiedCellsSet.size === totalCells;
        const oldValue = this.allShipsPlaced;
        if (oldValue !== newValue){
            this._allShipsPlaced = newValue;
            queueNotification(this, 'allShipsPlaced', newValue, oldValue);
        }
    }
}

export default PlayerModel;