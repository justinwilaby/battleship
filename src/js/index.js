import "./main.scss";
import Board from './board/Board';
import Console from './board/Console';
import GamePlay from './gameplay/GamePlay';
import PlayerModel from './model/PlayerModel';
import {animateBoard} from './utils/animateBoardRender';

const player1 = new PlayerModel();
const player2 = new PlayerModel();
const board = new Board(player1, player2);
document.body.appendChild(board.render());

const grids = board.boardGraphic.grids;
const console = new Console(grids[0], player1, player2);
document.body.appendChild(console.render());


grids.forEach(grid =>{
    animateBoard(grid, 50, 10)
});

const game = new GamePlay(grids, player1, player2);