import { bindable } from 'bind-property';

class ShipModel {
  /**
   * @type {Array<Element>}
   */
  @bindable hits;
  /**
   * @type {boolean}
   */
  @bindable direction;
  /**
   * @type {Array<Element>}
   */
  @bindable occupiedCells;

  /**
   * @type {ShipTypeEnum}
   */
  type;

  constructor({hits = [], type, direction = 0, occupiedCells}) {
    Object.assign(this, {hits, type, direction, occupiedCells});
  }

  toString() {
    return '' + this.type;
  }
}

export default ShipModel;
