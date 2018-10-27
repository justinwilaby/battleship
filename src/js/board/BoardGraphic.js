import Ship from '../ship/Ship';
import './board.scss';
const ns = 'http://www.w3.org/2000/svg';

class BoardGraphic {

  /**
   *
   * @type {Map<ShipModel, Ship>}
   */
  visibleShipsMap = new Map();

  /**
   *
   * @type {Array<Node>}
   */
  grids = [];

  /**
   *
   * @type {boolean}
   */
  rendered = false;

  constructor(ships) {
    this.ships = ships;
  }

  get element() {
    if (!this._element) {
      const element = document.createElement('section');
      element.id = 'battleshipBoard';
      this._element = element;
    }
    return this._element;
  }

  renderShips() {
    if (this.rendered) {
      return;
    }
    const fragment = document.createDocumentFragment();
    this.ships.forEach((shipModel, index) => {
      const ship = new Ship(shipModel);
      const element = ship.render();
      fragment.appendChild(element);
      ship.translate(0, 525 + ( index * 50 ));

      this.visibleShipsMap.set(shipModel, ship);
    });

    return fragment;
  }

  render() {
    if (this.rendered) {
      return;
    }
    const element = this.element;
    const fragment = document.createDocumentFragment();
    const player1Grid = document.createElementNS(ns, 'svg');
    player1Grid.id = 'player1Grid';
    player1Grid.setAttribute('width', '500px');
    player1Grid.setAttribute('height', '800px');

    fragment.appendChild(player1Grid);
    const g = document.createElementNS(ns, 'g');
    player1Grid.appendChild(g);

    let gridSize = 10;
    while (gridSize--) {
      const path = document.createElementNS(ns, 'path');
      path.setAttribute('d', `M0,0L50,0L50,50L0,50z`);
      path.setAttribute('class', 'cell');
      g.appendChild(path);
    }
    gridSize = 9;
    while (gridSize--) {
      const clone = g.cloneNode(true);
      player1Grid.appendChild(clone);
    }
    const player2Grid = player1Grid.cloneNode(true);
    player2Grid.id = 'player2Grid';
    this.grids.push(player1Grid, player2Grid);

    fragment.appendChild(player2Grid);

    player1Grid.appendChild(this.renderShips());
    element.appendChild(fragment);
    this.rendered = true;
    return element;
  }
}

export default BoardGraphic;
