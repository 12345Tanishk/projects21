var astronaut;
var bcg;
var edges;
//var Edges;
function preload() {
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadImage("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(400, 400);
  bcg = createSprite(200,200,2,2);
  bcg.addImage("bcgimage",bg);
  bcg.scale=0.08;
  astronaut = createSprite(200,210,2,2);
  astronaut.addAnimation("sleepimage",sleep);
  astronaut.scale=0.08;
 // edges = createEdgeSprites();
}

function draw() {
  background(220);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=210;
    astronaut.x=200;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=210;
    astronaut.x=200;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=210;
    astronaut.x=200;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=210;
    astronaut.x=200;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("ENTER")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y=210;
    astronaut.x=200;
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  if(keyDown("M")){
    astronaut.addImage("moving",move);
    astronaut.changeImage("moving");
    astronaut.velocityY=2;
    astronaut.velocityX=2;
    astronaut.visible=true;
  }
  drawSprites();
  fill(225);
  text("Use Arrow Keys , M Key and Enter Key to See Daily Routine!",50,110);
 // astronaut.bounceOff(Edges);
 edges=createEdgeSprites();
    astronaut.bounceOff(edges);
}