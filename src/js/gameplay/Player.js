class Player {
    opponentGrid;
    allyGrid;
    playerModel;

    constructor(opponentGrid, allyGrid, playerModel) {
        Object.assign(this, {opponentGrid, allyGrid, playerModel});
        this.playerModelChanged = this.playerModelChanged.bind(this);
    }

    yourTurn() {

    }

    playerModelChanged(source, changes) {

    }
}

export default Player;