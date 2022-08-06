var trex ,trex_running;
var ground, groundImage;
 

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png"); 
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage(groundImage);
  ground.x = ground.width / 2;


  //to create boundery
  edges = createEdgeSprites();
 
}

function draw(){
  background("white");

  console.log(trex.y);

  ground.velocityX = -2;

  if(ground.x < 0){
    ground.x = ground.width / 2;
  }

  
  //to make trex jump
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //added gravity
  trex.velocityY = trex.velocityY + 0.8;

  //to stop trex falling down
  trex.collide(ground);
  
  drawSprites();
}
