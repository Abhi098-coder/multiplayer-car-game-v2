class Game {
    constructor() {

    }
    getState() {
        database.ref('gameState').on("value", function (data) {
            gameState = data.val();
        })
    }
    updateState(state) {
        database.ref('/').update({
            gameState: state
        })
    }
    start() {
        if (gameState == 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 300);
        car2 = createSprite(300, 300);
        car3 = createSprite(500, 300);
        car4 = createSprite(700, 300);
        cars = [car1, car2, car3, car4];
    }
    play() {
        background(255);
        drawSprites();
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        console.log(allPlayers);
        if (allPlayers !== undefined) {
            var index = 0;
            var x = 200;
            var y;
            for (var plr in allPlayers) {
                index = index + 1;
                x = x + 200
                y=windowHeight-allPlayers[plr].distance;
                if(index==player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.y = cars[index-1].y
                }
                cars[index-1].x=x
                cars[index-1].y = y
                
            }
        }
        if (keyDown("up")) {
            player.distance += 10
            player.update();
        }
    }
}