
var gameState = "static";
var bg;
var flappyBall;

var pos = 500;


var temp;


var start,stops;
var obstacle,obstacle2;
var obstacle3,obstacle4;
var obstacle5,obstacle6;
var obstacle7,obstacle8;
var obstacle9;
var rand;

function preload() {
bg = loadImage("back.png");
}
function setup() {

createCanvas(displayWidth,650);


rand = Math.round(random(8,15));

start = createSprite(500,10,10000,20);
start.visible = false;
stops = createSprite(500,600,10000,20);
stops.visible = false;

flappyBall = createSprite(120,100,40,40);

obstacle = createSprite(Math.round(random(20,200)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle.velocityY = -rand;

obstacle2 = createSprite(Math.round(random(450,600)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle2.velocityY = rand;

obstacle3 = createSprite(Math.round(random(250,400)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle3.velocityY = -rand;
obstacle4 = createSprite(Math.round(random(850,1000)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle4.velocityY = rand;
obstacle5 = createSprite(Math.round(random(1050,1200)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle5.velocityY = -rand;
obstacle6 = createSprite(Math.round(random(300,500)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle6.velocityY = rand;
obstacle7 = createSprite(Math.round(random(650,900)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle7.velocityY = -rand;
obstacle8 = createSprite(Math.round(random(1050,1500)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle8.velocityY = rand;
obstacle9 = createSprite(Math.round(random(700,900)),Math.round(random(50,600)),Math.round(random(30,70)),Math.round(random(60,100)));
obstacle9.velocityY = -rand;






}

function draw() {
background(bg);

//if(gameState === "static" && keyDown(space)){
  //  gameState = "start";
//}


if(gameState === "start") {
    

    obstacle.bounceOff(start);
    obstacle.bounceOff(stops);
    obstacle2.bounceOff(start);
    obstacle2.bounceOff(stops);
    obstacle3.bounceOff(start);
    obstacle3.bounceOff(stops);
    obstacle4.bounceOff(start);
    obstacle4.bounceOff(stops);
    obstacle5.bounceOff(start);
    obstacle5.bounceOff(stops);
    obstacle6.bounceOff(start);
    obstacle6.bounceOff(stops);
    obstacle7.bounceOff(start);
    obstacle7.bounceOff(stops);
    obstacle8.bounceOff(start);
    obstacle8.bounceOff(stops);
    obstacle9.bounceOff(start);
    obstacle9.bounceOff(stops);
    
    flappyBall.shapeColor = "orange";
    flappyBall.x = mouseX;
    flappyBall.y = mouseY;



    if(flappyBall.isTouching(obstacle) || 
flappyBall.isTouching(obstacle2) ||
flappyBall.isTouching(obstacle3) ||
flappyBall.isTouching(obstacle4) ||
flappyBall.isTouching(obstacle5) ||
flappyBall.isTouching(obstacle6) ||
flappyBall.isTouching(obstacle7) ||
flappyBall.isTouching(obstacle8) ||
flappyBall.isTouching(obstacle9)) { 
    gameState = "end"
}
}

if(gameState === "end") {
    obstacle.velocityY = 0;
    obstacle2.velocityY = 0;
    obstacle3.velocityY = 0;
    obstacle4.velocityY = 0;
    obstacle5.velocityY = 0;
    obstacle6.velocityY = 0;
    obstacle7.velocityY = 0;
    obstacle8.velocityY = 0;
    obstacle9.velocityY = 0;
}








drawSprites();
}


