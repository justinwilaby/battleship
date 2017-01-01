import {getCell} from '../utils/getCell';

const floor = Math.floor;
const random = Math.random;

export function randomizeShips(grid, playerModel) {
    const occupiedCellsSet = playerModel.occupiedCellsSet;
    occupiedCellsSet.clear();
    const shipModels = playerModel.ships;
    shipModels.forEach(shipModel => {
        const {cells, direction} = findUnusedCells(grid, occupiedCellsSet, getRandomStartPoint(), floor(random() * 2), shipModel.type.size);
        shipModel.occupiedCells = cells;
        shipModel.direction = direction;
        cells.forEach(cell => {
            occupiedCellsSet.add(cell);
        });
    });
}

function findUnusedCells(board, occupiedCellsSet, pt, direction, n) {
    const axis = direction ? 'y' : 'x';
    if (pt[axis] + n > 9) {
        return findUnusedCells(board, occupiedCellsSet, getRandomStartPoint(), direction, n);
    }
    const cells = [];
    for (let i = 0; i < n; i++) {
        const cell = getCell(board, pt.y, pt.x);
        if (occupiedCellsSet.has(cell)) {
            return findUnusedCells(board, occupiedCellsSet, getRandomStartPoint(), direction, n);
        }
        cells[i] = cell;
        pt[axis]++;
    }
    return {cells, direction: direction};
}

function getRandomStartPoint() {
    return {x: floor(random() * 10), y: floor(random() * 10)};
}