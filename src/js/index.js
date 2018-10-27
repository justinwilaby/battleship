import Board from './board/Board';
import Console from './board/Console';
import GamePlay from './gameplay/GamePlay';
import './main.scss';
import GameStateModel from './model/GameStateModel';
import { animateBoard } from './utils/animateBoardRender';

const gameStateModel = new GameStateModel();
const board = new Board(gameStateModel);
document.body.appendChild(board.render());

const {grids} = board.boardGraphic;
const consoleView = new Console(grids[ 0 ], gameStateModel);
document.body.appendChild(consoleView.render());

grids.forEach(grid => {
  animateBoard(grid, 50, 10)
});

const game = new GamePlay(grids, gameStateModel);
