import {getCell} from './getCell';

export function getMoreCellsFromCell(grid, cell, direction, n) {
    const cellRect = cell.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    let pt = {
        y: ~~((cellRect.top - gridRect.top) / 50),
        x: ~~((cellRect.left - gridRect.left) / 50)
    };
    const axis = direction ? 'y' : 'x';
    const cells = [];
    for (let i = 0; i < n; i++) {
        const targetCell = getCell(grid, pt.y, pt.x);
        if (!targetCell){
            break;
        }
        cells[i] = targetCell;
        pt[axis]++;
    }
    return cells;
}