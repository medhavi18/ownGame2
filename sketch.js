var start, finish;
var frog1, frog2;
var track, trackimg;
var path1, path2;
var car1, car2, car3, car4, car5, carsgroup

function preload(){
  trackimg = loadImage("track.jpg");
  frog1img = loadImage("images/frog1.png");
  frog2img = loadImage("images/frog2.png");

  car1 = loadImage("images/Car1.png");
  car2 = loadImage("images/Car2.png");
  car3 = loadImage("images/Car3.png");

}

function setup(){
  createCanvas(displayWidth,displayHeight);

  //create start and finish line
  start = createSprite(displayWidth/2,720,displayWidth,10);
  finish = createSprite(displayWidth/2,displayHeight+200,displayWidth,10);

  //create frog sprites
  frog1 = createSprite(displayWidth/2-200,displayHeight-10,50,50);
  frog1.shapeColor="green";
  frog1.addImage(frog1img);
  frog1.scale = 0.5;

  frog2 = createSprite(displayWidth/2+200,displayHeight-10,50,50);
  frog2.shapeColor="green";
  frog2.addImage(frog2img);
  frog2.scale = 0.5;

  path1 = createSprite(displayWidth/2,displayHeight/2-130,displayWidth,50);
  path2 = createSprite(displayWidth/2,displayHeight/2+130,displayWidth,40);

  carsgroup = new Group();
  
}

function draw(){
  background("yellow");

  //create the paths for frogs
  //image(pathimg,0,-displayHeight*4,displayWidth,displayHeight*5);
  //console.log(image.positionY);

  //create a line which separates both the players
  for(var i = 0; i<displayHeight*4; i=i+20){
    line(displayWidth/2,i,displayWidth/2,i+10)
  }

  //add movements 
  if(keyDown(UP_ARROW)){
    frog1.y = frog1.y-10
  }
  if(keyDown("w")){
    frog2.y = frog2.y-10
  }

  carsgroup.depth = frog1.depth+5;
  //path1.depth = frog1.depth;
  frog1.depth = frog1.depth+1;
  frog2.depth = frog1.depth+1;

  if(frog1.isTouching(carsgroup)){
    frog1.destroy();
    carsgroup.destroyEach();
    carsgroup.lifetime=0;
  }

  else if(frog2.isTouching(carsgroup)){
    frog2.destroy();
    carsgroup.destroyEach();
  }
  
  spawnCars();
  drawSprites();
}

function spawnCars(){
  if(frameCount % 100 === 0){
    car = createSprite(displayWidth,displayHeight/2-130,25,25);

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: car.addImage(car1);
       break;
      case 2: car.addImage(car2);
       break;
      case 3: car.addImage(car3);
       break;
      default : break;

    }

    car.velocityX = -4;
    car.lifetime = displayWidth/2;
    car.scale = 0.2;
    carsgroup.add(car);
    //car.depth = frog1.depth + 2;
    
  }
}