var p1img,p2img,p3img,p4img,p5img,p6img,p7img,p8img;
var dash;
var dashimg;
var sun;
var sunimg;
var youWin
var youWinimg;
var bg;
var invisibleGround;
var planet;
var heart,h1,h2,h3;
var planetsGroup;

function preload() {
p1img=loadImage("assets/P1.png");
p2img=loadImage("assets/P2.png");
p3img=loadImage("assets/P3.png");
p4img=loadImage("assets/P4.png");
p5img=loadImage("assets/P5.png");
p6img=loadImage("assets/P6.png");
p7img=loadImage("assets/P7.png");
p8img=loadImage("assets/P8.png");
dashimg=loadImage("assets/Dash.png");
bg=loadImage("assets/Spacebg.jpg");
sunimg=loadImage("assets/Sun.png");
youWinimg=loadImage("assets/youwin.jpg");
heart=loadImage("assets/Heart.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  sun=createSprite(640, 284, 50, 50);
  sun.addImage("sun",sunimg);
  
  dash=createSprite(640, 305, 50, 50);
  dash.addImage("space dog",dashimg);
  dash.scale=0.78

  invisibleGround=createSprite(640,568,100,15);
  invisibleGround.visible=false;

  h1 = createSprite(1100,62,15,15);
  h1.addImage("heart",heart);
  h1.scale = 0.1;

  h2 = createSprite(1140,62,15,15);
  h2.addImage("heart",heart);
  h2.scale = 0.1;

  h3 = createSprite(1180,62,15,15);
  h3.addImage("heart",heart);
  h3.scale = 0.1;

  planetsGroup= createGroup()

  dash.setCollider("rectangle",0,0,100,150)
  dash.debug=true;
  
  
}

function draw() {
  background(bg);  

  if(keyIsDown(32)){
    dash.velocityY=-10
  }
  dash.velocityY+=0.8


  dash.collide(invisibleGround);
  
  spawnObstacles();

  textSize(30)
  //text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}

function spawnObstacles()
{
  if(frameCount%260===0){
    planet=createSprite(-5,450,15,20);
    planet.velocityX+4;
    
    var rand = Math.round(random(1,8));

    switch(rand){
      case 1: planet.addImage("planet 1",p1img);
              break;
      case 2: planet.addImage("planet 2",p2img);
              break;
      case 3: planet.addImage("planet 3",p3img);
              break;
      case 4: planet.addImage("planet 4",p4img);
              break;
      case 5: planet.addImage("planet 5",p5img);
              break;
      case 6: planet.addImage("planet 6",p6img);
              break;
      case 7: planet.addImage("planet 7",p7img);
              break;
      case 8: planet.addImage("planet 8",p8img);
              break;
      default: break;
    }
      planet.scale=0.5;

    planetsGroup.add(planet);
    
    planet.debug=true;
  }
}