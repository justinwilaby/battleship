export function findCellAtPoint(x, y, grid) {
    const {top, left} = grid.getBoundingClientRect();
    const cellPt = {x: x - left, y: y - top};
    const colNum = ~~(cellPt.x / 50);
    const rowNum = ~~(cellPt.y / 50);
    if (isNaN(colNum) || rowNum > 9 || colNum > 9 ||
        isNaN(rowNum) || !grid.children[rowNum] || !grid.children[rowNum].children[colNum])
        return null;

    return grid.children[rowNum].children[colNum];
}