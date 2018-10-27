import { findCellAtPoint } from '../utils/findCellAtPoint';
import Player from './Player';

class Human extends Player {
  constructor(...args) {
    super(...args);
    this.opponentGridClickHandler = this.opponentGridClickHandler.bind(this);
    this.gameStateModelPropertyChangeHandler = this.gameStateModelPropertyChangeHandler.bind(this);
    this.gameState.addChangeListener(this.gameStateModelPropertyChangeHandler);
  }

  /**
   *
   * @param {GameStateModel} gameState
   * @param {*} changes
   */
  gameStateModelPropertyChangeHandler(gameState, changes) {
    if ('playerTurn' in changes) {
      if (gameState.playerTurn === this.playerModel) {
        this.opponentGrid.addEventListener('click', this.opponentGridClickHandler);
      } else {
        this.opponentGrid.removeEventListener('click', this.opponentGridClickHandler);
      }
    }
  }

  /**
   *
   * @param {MouseEvent} event
   */
  opponentGridClickHandler(event) {
    const {pageX, pageY, currentTarget} = event;
    const cell = findCellAtPoint(pageX, pageY, currentTarget);
    const {outboundShots} = this.playerModel;
    if (outboundShots.includes(cell)) {
      return;
    }
    this.playerModel.outboundShots = ( outboundShots.push(cell), outboundShots ).concat();
  }
}

export default Human;
