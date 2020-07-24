var car,wall;
var weight,speed;

function setup() {
  
var canvas = createCanvas(1600,400)

car = createSprite(50, 200, 50, 50);
wall = createSprite(700, 200, 60, 200);
speed = random(55,90);
weight = random(400,1500);
}

function draw() {
  background(0,0,0);  
   car.velocityX = speed;
  if(wall.x-car.x < car.width+wall.width/2){
    car.velocityx=0
    var deformation=0.5 *weight* speed* speed/22509;
  {
    car.shapeColor=color(255,0,0)
  }
  if(deformation<180&&deformation>100)
  {
    car.shapeColor=color(230,230,0)
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0)
  }
  }
  


  drawSprites();
}