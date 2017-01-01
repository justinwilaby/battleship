import "./main.scss";
import Board from './board/Board';
import GamePlay from './gameplay/GamePlay';
import PlayerModel from './model/PlayerModel';
import {animateBoard} from './utils/animateBoardRender';
const player1 = new PlayerModel();
const player2 = new PlayerModel();
const board = new Board(player1, player2);
document.body.appendChild(board.render());
const grids = board.boardGraphic.grids;
grids.forEach(grid =>{
    animateBoard(grid, 50, 10)
});
let game = new GamePlay(grids, player1, player2);

const startButton = document.getElementById('start');
startButton.addEventListener('click', ()=>{
    game.startGame();
});