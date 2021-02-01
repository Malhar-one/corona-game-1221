var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24
var ball
var corona_image
var saniti1

var man_img
var bacimg
var trax_image
var ground

var ground_img
var trex 
var END1 = 2
var PLAY = 1;

var END = 0;
var gamestate  = PLAY;
var button
var b12o

function preload(){
corona_image = loadAnimation("images/c1.png","images/c2.png");
man_img = loadAnimation("images/run1.png","images/run2.png","images/run3.png")
saniti1 = loadImage("images/sani1.png")
bacimg = loadImage("images/back.jpg");
trax_image = loadImage("images/bg.jpg")
ground_img = loadImage("images/ground2.png")
b12o = loadImage("images/121.jpg")
}
function setup(){
  createCanvas (displayWidth,displayHeight)
  corona = createSprite(200,180,20,20);
  corona.addAnimation("corona",corona_image);
  corona.scale = 0.25;


  corona1 = createSprite(325,285,20,20);
  corona1.addAnimation("corona",corona_image);
  corona1.scale = 0.25;

  corona2 = createSprite(335,284,20,20);
  corona2.addAnimation("corona",corona_image);
  corona2.scale = 0.25;

    ball = createSprite(52, 19 ,10 ,10);
    ball.addAnimation("men",man_img);
    ball.scale = 0.1;
    ball.setCollider("circle", 0, 0, 40);

    button = createSprite(200,200,20,20)
button.visible = false;

ground = createSprite(displayWidth/2,displayHeight/2)
ground.visible = false;

     wall1 = createSprite(10,70 , 10 ,300);
     wall2 = createSprite(210, 215 ,400,10);
     wall3 = createSprite(90, 27 ,10,160);
     wall4 = createSprite(120, 160 ,70 ,10);
     wall5 = createSprite(130,105  , 90 ,10);
     wall6 = createSprite(250, 160 , 300 ,10);
     wall7 = createSprite(196, 60 , 10 ,70);
     wall8 = createSprite(285, 155 ,70 ,10);
     wall9 = createSprite(286, 100 ,10 ,100);
     wall10 = createSprite(256, 211 ,300 ,10);
     wall11 = createSprite(55, 235 , 10 ,70);
     wall13 = createSprite(326,100 , 70 ,10);
     wall14 = createSprite(360, 100 ,10 , 80);
     wall15 = createSprite(86, 266 ,70,10);
     wall16 = createSprite(182, 240 ,10 ,60);
     wall17 = createSprite(150, 304 ,300 ,10);
     wall18 = createSprite(335, 284 ,10 ,150);
     wall19  = createSprite(190, 345 ,300,10);
     wall20 = createSprite(116, 285 , 10 ,30);
     wall21 = createSprite(54, 385 ,10 ,30);
     wall22 = createSprite(150, 360, 10 ,30);
     wall23 = createSprite(232, 385 ,10 ,30);
     wall24 = createSprite(258, 270 , 10 ,70);

     sanisGroup = new Group()
     covidGroup = new Group()

    
    
     won = createSprite(380, 355 , 50 ,50);
    
    
    
    ball.shapeColor = ("yellow");
    wall1.shapeColor = ("aqua");
    wall2.shapeColor = ("aqua");
    wall3.shapeColor = ("aqua");
    wall4.shapeColor = ("aqua");
    wall5.shapeColor = ("aqua");
    wall6.shapeColor = ("orange");
    wall7.shapeColor = ("aqua");
    wall8.shapeColor = ("aqua");
    wall9.shapeColor = ("aqua");
    wall10.shapeColor = ("aqua");
    wall11.shapeColor = ("aqua");
    won.shapeColor = ("gold");
    wall13.shapeColor = ("aqua");
    wall14.shapeColor = ("aqua");
    wall15.shapeColor = ("aqua");
    wall16.shapeColor = ("aqua");
    wall17.shapeColor = ("aqua");
    wall18.shapeColor = ("aqua");
    wall19.shapeColor = ("aqua");
    wall20.shapeColor = ("aqua");
    wall21.shapeColor  = ("aqua");
    wall22.shapeColor = ("aqua");
    wall23.shapeColor = ("aqua");
    wall24.shapeColor = ("aqua");
    won.addImage(saniti1);
    won.scale = 0.2;
    
    corona.velocityX = 5;
    corona1.velocityY = 5;
    corona2.velocityX = 5;
}
function draw() {
  background(bacimg);
   stroke("blue");  
  textFont("Freestyle Script");
textSize(35);

console.log(gamestate)


edges = createEdgeSprites();
corona.bounceOff(edges)
corona1.bounceOff(edges)
corona2.bounceOff(edges)

if(gamestate === PLAY){
  
 
ball.velocityX = 0;
ball.velocityY = 0; 

  if (keyDown("up")) {
    ball.velocityX = 0;
    ball.velocityY = -5;
            
      
       
     }
      
    if (keyDown("down")) {
        ball.velocityX = 0;
    ball.velocityY = 5;
      }
        
     
      if (keyDown("right")) {
        ball.velocityX = 5;
    ball.velocityY = 0;
      }
      
      if (keyDown("left")) {
        ball.velocityX = -5;
    ball.velocityY = 0;
      }
       // if (ball.isTouching(wall1  )|| ball.isTouching(wall2  ) ||  ball.isTouching(wall3  )||  ball.isTouching(wall4  ) ||  ball.isTouching(wall5  ) ||  ball.isTouching(wall6  ) ||  ball.isTouching(wall7  ) || ball.isTouching(wall8  ) ||  ball.isTouching(wall9  )||  ball.isTouching(wall10  ) ||  ball.isTouching(wall11  ) ||  ball.isTouching(wall13  )  ||   ball.isTouching(wall14  ) || ball.isTouching(wall15  ) ||  ball.isTouching(wall16 )  || ball.isTouching(wall17  )  || ball.isTouching(wall18  )  ||  ball.isTouching(wall19  ) ||  ball.isTouching(wall20  ) ||  ball.isTouching(wall21  ) ||  ball.isTouching(wall22  ) ||  ball.isTouching(wall23  ) ||  ball.isTouching(wall24  )|| ball.isTouching(corona) || ball.isTouching(corona1) || ball.isTouching(corona2 ) ) {
//   ball.x = 52;
//   ball.y = 19;
 //  textSize(70);
 //  text("retry", 234, 36);
//   ball.velocityX = 0;
//   ball.velocityY = 0;

    
//  }
if (ball.isTouching(edges)) {
  ball.x = 52;
  ball.y = 19;
   textSize(70);
  text("retry", 234, 36);
}

if(ball.isTouching(won)){
  gamestate = END;
}

}
else if (gamestate === END){
  background("white");
  textSize(70);
  text("you won", 234, 36);
  corona.destroy()
  corona1.destroy()
  corona2.destroy()
  wall1.destroy()
  wall2.destroy()
  wall3.destroy()
  wall4.destroy()
  wall5.destroy()
  wall6.destroy()
  wall7.destroy()
  wall8.destroy()
  wall9.destroy()
  wall10.destroy()
  wall11.destroy()
// wall12.destroy()
  wall13.destroy()
  wall14.destroy()
  wall15.destroy()
  wall16.destroy()
  wall17.destroy()
  wall18.destroy()
  wall19.destroy()
  wall20.destroy()
  wall21.destroy()
  wall22.destroy()
  wall23.destroy()
  wall24.destroy()
  won.destroy()
  ball.visible = false;
   background(b12o)
   button.visible = true;
  if(mousePressedOver(button)){
    
    gamestate = END1;
    
    
  }

}
else if(gamestate === END1){
  background(trax_image)
ground.visible = true;
ground.addImage(ground_img)
ground.velocityX = -5
button.visible = false;

if (ground.x < 0){
  ground.x = ground.width/2;
}
if(keyDown ("space")){
  ball.velocityY = -5
}
//ball.velocityY = ball.velocityY + 1
ball.visible = true;
ball.scale = 0.5;
ball.velocityX = 0;
ball.velocityY = 0;
ball.x = displayWidth-1200
ball.y = displayHeight-470
spawnSanitzer()
spawncorona()
}
drawSprites();
}
function spawnSanitzer() {
  //write code here to spawn the sanis
  if (frameCount % 1000  === 0) {
    sani = createSprite(displayWidth,displayHeight/2-100);
   // sani.y = Math.round(random(10,60));
    sani.addImage(saniti1);
    sani.scale = 0.5;
    sani.velocityX = -3;
   
     //assign lifetime to the variable
    sani.lifetime = displayWidth/3;
   
    //adjust the depth
    sanisGroup.add(sani)}
  }

  function spawncorona() {
    //write code here to spawn the sanis
    if (frameCount % 203  === 0) {
      sani1 = createSprite(displayWidth,displayHeight/2-100);
     // sani.y = Math.round(random(10,60));
      sani1.addAnimation("fdh",corona_image);
      
      sani1.velocityX = -3;
     
       //assign lifetime to the variable
      sani1.lifetime = displayWidth/3;
     
      //adjust the depth
      covidGroup.add(sani1)}
    }