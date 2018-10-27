import SVGTransform from 'svg-path-interpolator/src/math/SVGTransform';

import rotate from '../svgPaths/rotate';

import './ship.scss';

let i = 0;

class ShipGraphic {
  id;
  segment;
  transform = new SVGTransform();

  constructor(shipModel) {
    this.id = 'ship_' + i++;
    this.shipModel = shipModel;
  }

  get element() {
    if (!this._element) {
      const element = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      element.id = this.id;
      this._element = element;
    }
    return this._element;
  }

  get shipSegments() {
    if (!this._shipSegments) {
      this._shipSegments = this.element.querySelectorAll('rect');
    }

    return this._shipSegments;
  }

  get rotateArrow() {
    if (!this._roateArrow) {
      const rotateArrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      rotateArrow.id = `rotate_${this.id}`;
      rotateArrow.setAttribute('d', rotate);
      rotateArrow.setAttribute('transform', `translate(${this.shipModel.type.size * 50} 24)`);
      this._roateArrow = rotateArrow;
    }
    return this._roateArrow;
  }

  render() {
    const element = this.element;
    this.segment = null;
    this._shipSegments = null;
    element.innerHTML = '';
    let {type, hits} = this.shipModel;
    const {size} = type;
    for (let i = 0; i < size; i++) {
      const hit = hits[ i ];
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', '50');
      rect.setAttribute('height', '35');
      rect.setAttribute('x', '' + i * 50);
      rect.setAttribute('fill', ( hit ? '#ff0000' : 'steelblue' ));
      element.appendChild(rect);
    }
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.textContent = '' + type;
    text.setAttribute('font-family', 'D Day Stencil');
    text.setAttribute('font-size', '30');
    text.setAttribute('y', '28');
    text.setAttribute('x', '5');
    element.appendChild(text);
    element.appendChild(this.rotateArrow);
    return element;
  }
}

export default ShipGraphic;
