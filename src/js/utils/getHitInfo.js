export function getHitInfo(playerModel, targetCell) {
    const playerShips = playerModel.ships;
    let i = playerShips.length;
    outer:while (i--) {
        const cells = playerShips[i].occupiedCells;
        let j = cells.length;
        while (j--) {
            if (cells[j] === targetCell) {
                return {ship: playerShips[i], index: j};
            }
        }
    }
    return null;
}