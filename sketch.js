
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x);  
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {

  background("green");
  
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if (ground.x < 0){
  ground.x = ground.width/2;
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  
  food();
  Obstacles();
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    banana=createSprite(500,Math.round(random(120,200)),30,30);
    banana.addImage(bananaImage);
    banana.velocityX=-7;
    banana.scale=0.1;
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
}
function Obstacles() {
  if(frameCount % 300 === 0) {
    obstacle = createSprite(500,350,30,60);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;        
    obstacle.scale = 0.5;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}




