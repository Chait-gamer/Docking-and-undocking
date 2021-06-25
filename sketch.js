var issImg,iss, spacebg, spacecraft1Img, spacecraft2Img, spacecraft3Img, spacecraft4Img;
var hasDocked = false;
var spacecraft;

function preload(){
  issImg = loadImage("Docking-undocking/iss.png");
  spacebg = loadImage("Docking-undocking/spacebg.jpg");
  spacecraft2Img = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3Img = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4Img = loadImage("Docking-undocking/spacecraft4.png");
  spacecraft1Img = loadImage("Docking-undocking/spacecraft1.png");
}

function setup() {
  createCanvas(1200,600);

  iss = createSprite(600, 300, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.7;

  spacecraft = createSprite(800,500,50,50);
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale = 0.2;

}

function draw() {
  background(spacebg);  

  console.log(spacecraft.x,spacecraft.y)


  if(!hasDocked){
    //because without for loop the x position was changing all the time
    for(i = 1; i < 1; i++){
    spacecraft.x = Math.round(random(100,1100));
    }

    if(keyIsDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft3Img);
      spacecraft.x += 2;
    }
    if(keyIsDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x -= 2;
    }
    if(keyIsDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft1Img);
      spacecraft.y += 2;
    }
    if(keyIsDown(UP_ARROW)){
      spacecraft.addImage(spacecraft2Img);
      spacecraft.y -= 2;
    }
    if(spacecraft.x > 500 & spacecraft.x < 550 & spacecraft.y > 350 & spacecraft.y < 300){
 
      textSize(30);
      text("Docking Succesful", 300, 800);
      spacecraft.velocityX = 0;
      spacecraft.velocityY = 0;
      console.log("I win!!");
    }

  }

  drawSprites();
}