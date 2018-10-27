import { bindable, queueNotification } from 'bind-property';
import { allShipTypes, totalCells } from '../enum/ShipTypeEnum';
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

class PlayerModel {
  /**
   *
   * @type {Array<Element>}
   */
  @bindable incomingShots = [];
  /**
   *
   * @type {Array<Element>}
   */
  @bindable outboundShots = [];
  /**
   *
   * @type {Set<Element>}
   */
  occupiedCellsSet = new Set();

  constructor() {
    this.shipModelChangedHandler = this.shipModelChangedHandler.bind(this);
  }

  get ships() {
    return this._ships || ( this._ships = generateDefaultShips(this.shipModelChangedHandler) );
  }

  get allShipsPlaced() {
    return !!this._allShipsPlaced;
  }

  shipModelChangedHandler(source, changes) {
    if (!changes.occupiedCells) {
      return;
    }
    const newValue = this.occupiedCellsSet.size === totalCells;
    const oldValue = this._allShipsPlaced;
    if (oldValue !== newValue) {
      this._allShipsPlaced = newValue;
      queueNotification(this, 'allShipsPlaced', oldValue, newValue);
    }
  }
}

export default PlayerModel;
