export const animateBoard = (boardElement, cellSize, colCt) => {
    cellSize = cellSize | 0;
    colCt = colCt | 0;
    const paths = boardElement.querySelectorAll('.cell');
    const len = ~~paths.length;
    const delay = 250;
    let row = 0;
    for (let i = 0; i < len; i++) {
        const path = paths[i];
        const x = +((i % colCt) * cellSize);
        const y = +(row * cellSize);
        setTimeout(() => {
            path.style.transform = `translate(${x}px, ${y}px)`;
        }, i % row * delay);

        if (!path.nextSibling) {
            row++;
        }
    }
};