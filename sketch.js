var car,car2,car3,wall;
var column1,column2,column3,column4;
var weight,speed,speed2,speed3;

function preload(){


}
function setup(){
createCanvas(1600,900) 
column1=createSprite(500,200,1600,20) 
column1.shapeColor=("green")
column2=createSprite(500,400,1600,20)
column2.shapeColor=("green") 
column3=createSprite(500,20,1600,20) 
column3.shapeColor=("green")
column4=createSprite(500,620,1600,20)
column4.shapeColor=("green") 
car=createSprite(200,100,20,20)
car.shapeColor=("green")

car2=createSprite(200,300,20,20)
car2.shapeColor=("green")

car3=createSprite(200,500,20,20)
car3.shapeColor=("green")
speed=random(0,10)
speed2=random(10,20)
speed3=random(20,30)
car.velocityX=speed;
car2.velocityX=speed2;
car3.velocityX=speed3;
wall=createSprite(1300,200,50,900)
wall.shapeColor=("green")
wall.velocityX=0;
}

function draw(){
  background("black"); 
  if(car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<car.width/2+wall.width/2&&car.y-wall.y<car.height/2+wall.height/2&&
    wall.y-car.y<car.height/2+wall.height/2
     ){
       car.shapeColor=("blue")
       car.velocityX=0;
     
   }

   if(car2.x-wall.x<car2.width/2+wall.width/2&&
    wall.x-car2.x<car2.width/2+wall.width/2&&car2.y-wall.y<car2.height/2+wall.height/2&&
    wall.y-car2.y<car2.height/2+wall.height/2
     ){
       car2.shapeColor=("yellow")
       car2.velocityX=0;
     
   }
  
   if(car3.x-wall.x<car3.width/2+wall.width/2&&
    wall.x-car3.x<car3.width/2+wall.width/2&&car3.y-wall.y<car3.height/2+wall.height/2&&
    wall.y-car3.y<car3.height/2+wall.height/2
     ){
       car3.shapeColor=("red")
       car3.velocityX=0;
     
   }
  

  drawSprites();
}