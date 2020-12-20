var car1,car2,car3,car4,cars
var ball;
var database, position;
var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;
function setup(){
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start()
}

function draw(){
if (playerCount == 4){
    game.updateState(1);
}
if (gameState == 1){
    game.play();
}
}

