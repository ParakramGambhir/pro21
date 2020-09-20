var bullet, wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200, 75, 20);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="grey";
  bullet.velocityX=speed;
  
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<(bullet.width+wall.width/2))
{

bullet.velocityX=0;
}
var damage= (0.5*weight*speed*speed)/ (thickness*thickness*thickness);
if(damage>10)
{
  wall.shapeColor="red";
}
if(damage<10){
wall.shapeColor="green";

}


 thickness = random(22,83)
  drawSprites();
}