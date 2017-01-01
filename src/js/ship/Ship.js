import ShipGraphic from './ShipGraphic';
import {findNodeAtPoint} from '../utils/findNodeAtPoint';
import {alignElementToCell} from '../utils/alignElementToCell';

class Ship {
    lastGoodTransform = [];
    dragStartCallback;
    dragCallback;
    dropCallback;
    animationFrame;

    constructor(shipModel, draggable = true) {
        this.elementMouseDownHandler = this.elementMouseDownHandler.bind(this);
        this.bodyMouseUpHandler = this.bodyMouseUpHandler.bind(this);
        this.bodyMouseMoveHandler = this.bodyMouseMoveHandler.bind(this);
        this.rotateArrowClickHandler = this.rotateArrowClickHandler.bind(this);
        this.modelChangeHandler = this.modelChangeHandler.bind(this);

        Object.assign(this, {shipModel, draggable});
    }

    get shipGraphic() {
        if (!this._shipGraphic) {
            this._shipGraphic = new ShipGraphic(this.shipModel);
            this._shipGraphic.rotateArrow.addEventListener('click', this.rotateArrowClickHandler);
        }
        return this._shipGraphic;
    }

    get shipModel() {
        return this._shipModel;
    }

    set shipModel(value) {
        if (this._shipModel === value)
            return;

        if (this._shipModel) {
            this._shipModel.removeChangeListener(this.modelChangeHandler);
        }
        this._shipModel = value;
        if (value) {
            this._shipModel.addChangeListener(this.modelChangeHandler);
        }
    }

    get draggable() {
        return this._draggable;
    }

    set draggable(value) {
        value = !!value;
        if (this._draggable === value) {
            return;
        }
        this._draggable = value;
        const element = this.shipGraphic.element;
        if (value) {
            element.setAttribute('draggable', 'true');
            element.addEventListener('mousedown', this.elementMouseDownHandler);
        }
        else {
            element.removeAttribute('draggable');
        }
    }

    render() {
        return this.shipGraphic.render();
    }

    translate(deltaTx, deltaTy, animate) {
        const shipGraphic = this.shipGraphic;
        const element = shipGraphic.element;
        const {m_transform} = shipGraphic.transform;
        if (animate) {
            if (this.animationFrame){
                cancelAnimationFrame(this.animationFrame);
            }
            const distance = Math.sqrt(Math.pow(deltaTx, 2) + Math.pow(deltaTy, 2));
            let d = distance;
            let lastX = 0;
            let lastY = 0;
            const tick = () => {
                const progress = 1 - (d /= 1.15) / distance;
                const newTx = (deltaTx * progress) - lastX;
                const newTy = (deltaTy * progress) - lastY;
                if (progress < .99999) {
                    this.animationFrame = requestAnimationFrame(tick);
                    lastX += newTx;
                    lastY += newTy;
                }
                m_transform[4] += newTx;
                m_transform[5] += newTy;
                element.setAttribute('transform', `matrix(${m_transform.join(' ')})`);
            };
            tick();
        }
        else {
            m_transform[4] += deltaTx;
            m_transform[5] += deltaTy;
            element.setAttribute('transform', `matrix(${m_transform.join(' ')})`);
        }
    }

    //------------------------------
    // Event Handlers
    elementMouseDownHandler(event) {
        const shipGraphic = this.shipGraphic;
        if (event.target === shipGraphic.rotateArrow) {
            return;
        }
        document.body.addEventListener('mousemove', this.bodyMouseMoveHandler);
        document.body.addEventListener('mouseup', this.bodyMouseUpHandler);
        this.segment = findNodeAtPoint(event.pageX, event.pageY, this.shipGraphic.shipSegments);
        this.lastMouseEvent = event;
        this.lastGoodTransform = shipGraphic.transform.m_transform.concat();
        if (typeof this.dragStartCallback === 'function') {
            this.dragStartCallback(event, this);
        }
    }

    bodyMouseMoveHandler(event) {
        if (!event.buttons) {
            this.bodyMouseUpHandler(event);
            return;
        }
        const {pageX:lastPageX, pageY:lastPageY} = this.lastMouseEvent;
        const {pageX, pageY} = event;
        const deltaX = pageX - lastPageX;
        const deltaY = pageY - lastPageY;

        this.translate(deltaX, deltaY);
        this.lastMouseEvent = event;
        if (typeof this.dragCallback === 'function') {
            this.dragCallback(event, this);
        }
    }

    bodyMouseUpHandler(event) {
        document.body.removeEventListener('mousemove', this.bodyMouseMoveHandler);
        document.body.removeEventListener('mouseup', this.bodyMouseUpHandler);
        if (typeof this.dropCallback === 'function') {
            this.dropCallback(event, this);
        }
    }

    rotateArrowClickHandler() {
        this.shipModel.direction = +!this.shipModel.direction;
    }

    modelChangeHandler(source, changes) {
        if ('direction' in changes) {
            this.directionChanged(changes);
        }

        if ('occupiedCells' in changes) {
            this.occupiedCellsChanged(source);
        }

        if ('hits' in changes) {
            this.hitsChanged(source.hits);
        }
    }

    directionChanged(changes) {
        const transform = this.shipGraphic.transform;
        const direction = changes.direction.newValue;
        const deg = direction === 1 ? 90 : -90;
        transform.rotate(deg, 25, 17.5);
        this.shipGraphic.element.setAttribute('transform', `matrix(${transform.m_transform.join(' ')})`);
    }

    occupiedCellsChanged(source) {
        const cell = source.occupiedCells[0];
        const m_transform = this.shipGraphic.transform.m_transform;
        if (!cell) {
            const {'4':x1, '5':y1} = m_transform;
            const {'4':x2, '5':y2} = this.lastGoodTransform;
            this.translate(x2 - x1, y2 - y1, true);
        }
        else {
            const {x, y} = alignElementToCell(this.shipGraphic.element, this.shipModel.direction, m_transform, cell);
            this.translate(x, y, true);
        }
    }

    hitsChanged(hits) {

    }
}

export default Ship;