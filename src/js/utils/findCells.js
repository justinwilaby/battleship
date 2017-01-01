import {getCell} from './getCell';
export function findCells(shipSegment, board, direction) {
    if (!shipSegment) {
        return [];
    }
    const shipSegmentRect = shipSegment.getBoundingClientRect();
    const boardRect = board.getBoundingClientRect();

    const rowNum = ~~((shipSegmentRect.top - boardRect.top) / 50);
    const colNum = ~~((shipSegmentRect.left - boardRect.left) / 50);
    const cells = [];
    let colCursor = colNum;
    let rowCursor = rowNum;
    let thisSegment = shipSegment;

    while (thisSegment && thisSegment.nodeName === 'rect') {
        const cell = getCell(board, rowCursor, colCursor);
        if (cell) {
            cells.push(cell);
        }
        thisSegment = thisSegment.nextSibling;
        direction ? rowCursor++ : colCursor++;
    }

    colCursor = colNum;
    rowCursor = rowNum;
    thisSegment = shipSegment;
    while (thisSegment.previousSibling && thisSegment.previousSibling.nodeName === 'rect') {
        direction ? rowCursor-- : colCursor--;
        const cell = getCell(board, rowCursor, colCursor);
        if (cell) {
            cells.unshift(cell);
        }
        thisSegment = thisSegment.previousSibling;
    }

    return cells;
}