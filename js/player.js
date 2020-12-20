class Player {
    constructor() {
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    getCount() {
        database.ref('playerCount').on("value", function (data) {
            playerCount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }
    update() {
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).update({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo() {
        database.ref('players').on("value", (data) => {
            allPlayers = data.val()
        })
    }
}