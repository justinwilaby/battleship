class Player {
  /**
   * @type {HTMLElement}
   */
  allyGrid;
  /**
   * @type {GameStateModel}
   */
  gameState;
  /**
   * @type {HTMLElement}
   */
  opponentGrid;
  /**
   * @type {PlayerModel}
   */
  playerModel;

  constructor(opponentGrid, allyGrid, playerModel, gameState) {
    Object.assign(this, {opponentGrid, allyGrid, playerModel, gameState});
  }
}

export default Player;
