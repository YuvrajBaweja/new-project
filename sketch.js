var fixedrect,movingrectt
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrectt=createSprite(200,200,30,30)
  fixedrect.shapeColor="red"
  movingrectt.shapeColor="red"
}


function draw() {
  background(255,255,255); 
  movingrectt.x=World.mouseX
  movingrectt.y=World.mouseY 
  if(movingrectt.x-fixedrect.x<fixedrect.width/2+movingrectt.width/2
    &&fixedrect.x-movingrectt.x<fixedrect.width/2+movingrectt.width/2
    &&movingrectt.y-fixedrect.y<fixedrect.height/2+movingrectt.height/2
    &&fixedrect.y-movingrectt.y<fixedrect.height/2+movingrectt.height/2

    
    ){
    movingrectt.shapeColor="orange"
    fixedrect.shapeColor="orange"
  }
  else{
    fixedrect.shapeColor="red"
    movingrectt.shapeColor="red" 
  }
  drawSprites();
  
}