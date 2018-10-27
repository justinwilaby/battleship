import { getCell } from '../utils/getCell';
import { randomizeShips } from '../utils/randomizeShips';
import Player from './Player';

class Computer extends Player {
  constructor(...args) {
    super(...args);
    randomizeShips(this.allyGrid, this.playerModel);
    this.gameStateModelPropertyChangeHandler = this.gameStateModelPropertyChangeHandler.bind(this);
    this.gameState.addChangeListener(this.gameStateModelPropertyChangeHandler);
  }

  /**
   *
   * @param {GameStateModel} gameState
   * @param {*} changes
   */
  gameStateModelPropertyChangeHandler(gameState, changes) {
    if ('playerTurn' in changes && gameState.playerTurn === this.playerModel) {
      this.playTurn(changes.playerTurn.oldValue);
    }
  }

  /**
   *
   * @param {PlayerModel} opponent
   */
  playTurn(opponent) {
    const {outboundShots} = this.playerModel;
    const {opponentGrid} = this;
    const lastShot = outboundShots[ outboundShots.length - 1 ];
    // Shortcut operation for 1st outbound shot
    if (!lastShot) {
      this.playerModel.outboundShots = ( outboundShots.push(getRandomCell(opponentGrid)), outboundShots ).concat();
      return;
    }
    // map hits to determine if we have any that are linear
    let i = outboundShots.length;
    const hitsX = [];
    const hitsY = [];
    while (i--) {
      const cell = outboundShots[ i ];
      if (!opponent.occupiedCellsSet.has(cell)) {
        continue;
      }
      const {indexOf} = Array.prototype;
      const y = indexOf.call(opponentGrid.children, cell.parentElement);
      const x = indexOf.call(cell.parentElement.children, cell);
      if (!hitsY[ x ]) {
        hitsY[ x ] = {[ y ]: true};
      }
      if (!hitsX[ y ]) {
        hitsX[ y ] = {[ x ]: true};
      }
      hitsX[ y ][ x ] = true;
      hitsY[ x ][ y ] = true;
    }
    let targetCell;
    const useXAxis = !!Math.floor(Math.random() * 2);
    let targetDirection = useXAxis ? hitsX : hitsY;
    targetCell = this.findNextTarget(targetDirection, useXAxis);
    if (!targetCell) {
      targetDirection = !useXAxis ? hitsX : hitsY;
      targetCell = this.findNextTarget(targetDirection, !useXAxis);
    }
    if (!targetCell) {
      // We have no hits yet go for another random cell
      targetCell = getRandomCell(opponentGrid);
      while (outboundShots.indexOf(targetCell) !== -1) {
        targetCell = getRandomCell(opponentGrid);
      }
    }
    this.playerModel.outboundShots = ( outboundShots.push(targetCell), outboundShots ).concat();
  }

  /**
   *
   * @param {Array<{pt: boolean}>} hits
   * @param {boolean} isXAxis
   * @param {number} tolerance
   */
  findNextTarget(hits, isXAxis, tolerance = 1) {
    let i = hits.length;
    while (i--) {
      const linearHits = hits[ i ];
      if (!linearHits) {
        continue;
      }
      const pts = Object.keys(linearHits);
      let j = pts.length;
      if (j < 2) {
        continue;
      }
      let run = 0; // number of consecutive points found
      while (j--) {
        const pt = pts[ j ];
        const nearest = linearHits[ pt - 1 ];
        if (nearest !== undefined) {
          // found linear hits - continue until we find the end of the run
          run++;
          continue;
        }
        // consecutive hits found - determine if we have
        // targeted cells at the beginning or end of the run.
        const {outboundShots} = this.playerModel;
        const {opponentGrid} = this;
        if (run) {
          // Test the cell just before the run
          let x = isXAxis ? +pt - 1 : i;
          let y = isXAxis ? i : +pt - 1;
          let candidateTarget = getCell(opponentGrid, y, x);
          if (candidateTarget && !outboundShots.includes(candidateTarget)) {
            return candidateTarget;
          }
          // Test the cell just after the run
          x = isXAxis ? +pt + run + 1 : i;
          y = isXAxis ? i : +pt + run + 1;
          candidateTarget = getCell(opponentGrid, y, x);
          if (candidateTarget && !outboundShots.includes(candidateTarget)) {
            return candidateTarget;
          }
        }
        run = 0;
      }
    }
    return null;
  }
}

function getRandomCell(opponentGrid) {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  return opponentGrid.children[ y ].children[ x ];
}

export default Computer;
