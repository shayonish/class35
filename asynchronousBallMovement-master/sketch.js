var database;
var gameState = 0;
var playerCount ;
var from , game , player;
function setup(){
    createCanvas(500,500);
    database = firebase.database
    game = newn Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
}


