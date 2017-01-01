export function getCell(board, row, col) {
    if (row > 9 || col > 9) {
        return null;
    }
    return board.children[row].children[col];
}