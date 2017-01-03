import BoardGraphic from './BoardGraphic';
import {findCells} from '../utils/findCells';
import {findCellAtPoint} from '../utils/findCellAtPoint';
import {getMoreCellsFromCell} from '../utils/getMoreCellsFromCell';

class Board {

    lastHighlightedCells = [];
    validDrop = false;
    player1;
    player2;

    constructor(player1, player2) {
        this.shipDragStartCallback = this.shipDragStartCallback.bind(this);
        this.shipDragCallback = this.shipDragCallback.bind(this);
        this.shipDropCallback = this.shipDropCallback.bind(this);
        this.shipModelChangeListener = this.shipModelChangeListener.bind(this);
        this.shipModelPreCommitListener = this.shipModelPreCommitListener.bind(this);

        Object.assign(this, {player1, player2});
    }

    get boardGraphic() {
        if (!this._boardGraphic) {
            this._boardGraphic = new BoardGraphic(this.player1.ships);
        }
        return this._boardGraphic;
    }

    render() {
        const element = this.boardGraphic.render();
        this.postRenderActions();
        return element;
    }

    postRenderActions() {
        this.boardGraphic.visibleShipsMap.forEach(ship => {
            const shipModel = ship.shipModel;
            ship.dragStartCallback = this.shipDragStartCallback;
            ship.dragCallback = this.shipDragCallback;
            ship.dropCallback = this.shipDropCallback;
            shipModel.addChangeListener(this.shipModelChangeListener);
            shipModel.addPreCommitListener(this.shipModelPreCommitListener);
        });
    }

    //----------------------------------------
    // Ship drag callbacks
    //----------------------------------------

    shipDragStartCallback(originEvent, ship) {
        const cells = ship.shipModel.occupiedCells || [];
        if (!cells.length) {
            return;
        }
        cells.forEach(cell => {
            this.player1.occupiedCellsSet.delete(cell);
        });
        this.setHighlightedCells(cells, '#00ff00');
    }

    shipDragCallback(originEvent, ship) {
        const cells = findCells(ship.segment, this.boardGraphic.grids[0], ship.shipModel.direction);
        let i = cells.length;
        this.validDrop = i === ship.shipModel.type.size;
        while (i--) {
            if (this.player1.occupiedCellsSet.has(cells[i])) {
                this.validDrop = false;
                break;
            }
        }
        const color = this.validDrop ? '#00ff00' : '#ff0000';
        this.setHighlightedCells(cells, color);
    }

    shipDropCallback(originEvent, ship) {
        let cellsToOccupy = this.lastHighlightedCells;
        this.setHighlightedCells([]);
        if (!cellsToOccupy.length) {
            return;
        }
        if (!this.validDrop) {
            cellsToOccupy = ship.shipModel.occupiedCells || [];
        }
        ship.shipModel.occupiedCells = cellsToOccupy.concat();
    }

    //----------------------------------
    // Model Change callbacks
    shipModelPreCommitListener(shipModel, changes) {
        if (!('direction' in changes)) {
            return;
        }
        const cells = getMoreCellsFromCell(this.boardGraphic.grids[0], shipModel.occupiedCells[0], changes.direction.newValue, shipModel.type.size);
        let i = ~~cells.length;
        let allowChange = !i || i === shipModel.type.size;
        while (allowChange && i-- > 1) {
            if (this.player1.occupiedCellsSet.has(cells[i])) {
                allowChange = false;
            }
        }

        if (!allowChange && cells.length) {
            this.setHighlightedCells(cells, '#ff0000');
            setTimeout(() => {
                this.setHighlightedCells([]);
            }, 500);
        }
        return allowChange;
    }

    shipModelChangeListener(shipModel, changes) {
        if ('occupiedCells' in changes) {
            this.occupiedCellsChanged(changes);
        }
        else if ('direction' in changes) {
            this.shipDirectionChanged(shipModel, changes);
        }
    }

    shipDirectionChanged(shipModel, changes) {
        const boardGraphic = this.boardGraphic;
        const ship = boardGraphic.visibleShipsMap.get(shipModel);
        const seed = ship.shipGraphic.element.querySelector('rect');
        const seedBounds = seed.getBoundingClientRect();
        if (!findCellAtPoint(seedBounds.left, seedBounds.top, boardGraphic.grids[0])) {
            return;
        }
        const cellsToOccupy = findCells(seed, boardGraphic.grids[0], changes.direction.newValue);
        shipModel.occupiedCells = cellsToOccupy;
        this.setHighlightedCells(cellsToOccupy, '#00ff00');
        setTimeout(() => {
            this.setHighlightedCells([]);
        }, 250);
    }

    occupiedCellsChanged(changes) {
        const {oldValue = [], newValue = []} = changes.occupiedCells;
        const occupiedCellsSet = this.player1.occupiedCellsSet;
        for (let i = 0; i < newValue.length; i++) {
            occupiedCellsSet.delete(oldValue[i]);
            occupiedCellsSet.add(newValue[i]);
        }
    }

    setHighlightedCells(cells, color) {
        this.lastHighlightedCells.forEach(cell => {
            cell.style.fill = '';
        });

        cells.forEach(cell => {
            cell.style.fill = color;
        });

        this.lastHighlightedCells = cells;
    }
}

export default Board;