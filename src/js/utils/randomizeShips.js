import { getCell } from '../utils/getCell';

const {floor, random} = Math;

/**
 *
 * @param {Element} grid
 * @param {PlayerModel} playerModel
 */
export function randomizeShips(grid, playerModel) {
  const {occupiedCellsSet, ships} = playerModel;
  occupiedCellsSet.clear();
  ships.forEach(ship => {
    const {cells, direction} = findUnusedCells(grid, occupiedCellsSet, getRandomStartPoint(), floor(random() * 2), ship.type.size);
    ship.occupiedCells = cells;
    ship.direction = direction;
    cells.forEach(cell => occupiedCellsSet.add(cell));
  });
}

function findUnusedCells(board, occupiedCellsSet, pt, direction, n) {
  const axis = direction ? 'y' : 'x';
  if (pt[ axis ] + n > 9) {
    return findUnusedCells(board, occupiedCellsSet, getRandomStartPoint(), direction, n);
  }
  const cells = [];
  for (let i = 0; i < n; i++) {
    const cell = getCell(board, pt.y, pt.x);
    if (occupiedCellsSet.has(cell)) {
      return findUnusedCells(board, occupiedCellsSet, getRandomStartPoint(), direction, n);
    }
    cells[ i ] = cell;
    pt[ axis ]++;
  }
  return {cells, direction: direction};
}

function getRandomStartPoint() {
  return {x: floor(random() * 10), y: floor(random() * 10)};
}
