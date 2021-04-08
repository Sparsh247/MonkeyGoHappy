var ground,backGround,backGroundImage
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0;
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
 backGroundImage=loadImage("jungle.jpg")
}



function setup() {
  createCanvas(500,400)
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
  
  
ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
  bananaGroup=new Group()
  obstacleGroup=new Group()
  
  
}


function draw() {

  background("white");
 
  stroke("white"); 
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time"+survivalTime,100,50);
  
  
 if(keyDown("j")){
   monkey.velocityY=-7
  
 } 
  
 monkey.velocityY=monkey.velocityY+0.5
 monkey.collide(ground);
  
  
  
  
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
  
  
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
    
  }
  
  spawnBanana()
  
  
  
  
  

  
  drawSprites()
}

function spawnBanana(){
  if (frameCount%80===0){
  banana=createSprite(400,100,20,20)
  banana.addImage(bananaImage)
banana.velocityX=-4
    banana.scale=0.1
 banana.y=Math.round(random(150,300))
bananaGroup.add(banana)
  }
  

}




