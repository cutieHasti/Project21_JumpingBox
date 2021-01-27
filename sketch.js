var canvas;
var music;
var surface1,surface2,surface3,surface4;

var box1; 
//function preload(){
 //   music = loadSound("music.mp3");
//}

function setup(){

    canvas = createCanvas(800,600);

    //create 4 different surfaces
     
     surface1 = createSprite(700,500,190,20);
     surface1.shapeColor=("green");

     surface2 = createSprite(500,500,190,20);
     surface2.shapeColor=("blue");
     
     surface3 = createSprite(300,500,190,20);
     surface3.shapeColor=("red");
     
     surface4 = createSprite(100,500,190,20);
     surface4.shapeColor=("yellow");
    //create box sprite and give velocity
     box1 = createSprite(80,10,40,40);
     box1.velocityY = 2;    
     box1.shapeColor = ("white");
     box1.x=random(20,270);
     box1.lifetime=700;
    
  }

function draw() {
    background(rgb(169,169,169));
     
    createEdgeSprites();
    
        
//add condition to check if box touching surface and make it box
if(surface1.isTouching(box1) || box1.bounceOff(surface1)) {
    
    box1.bounceOff(surface1);
    box1.shapeColor = surface1.shapeColor;
    box1 = createSprite(80,10,40,40);
    box1.velocityY = 2;    
    box1.shapeColor = ("white");
    box1.x=random(20,720);
    box1.lifetime=surface1.y;
    
}if(surface2.isTouching(box1) || box1.bounceOff(surface2)) {
    box1.bounceOff(surface2);
    box1.shapeColor = surface2.shapeColor;
    box1 = createSprite(80,10,40,40);
    box1.velocityY = 2;    
    box1.shapeColor = ("white");
    box1.x=random(20,720);
    box1.lifetime=surface1.y;

}if(surface3.isTouching(box1) || box1.bounceOff(surface3)) {
    
    box1.bounceOff(surface3);
    box1.shapeColor = surface3.shapeColor;
    box1 = createSprite(80,10,40,40);
    box1.velocityY = 2;    
    box1.shapeColor = ("white");
    box1.x=random(20,720);
    box1.lifetime=surface1.y;

}if(surface4.isTouching(box1) || box1.bounceOff(surface4)) {
    
    box1.bounceOff(surface4);
    box1.shapeColor = surface4.shapeColor;
    box1 = createSprite(80,10,40,40);
    box1.velocityY = 2;    
    box1.shapeColor = ("white");
    box1.x=random(20,720);
    box1.lifetime=surface1.y;
}   
   
   
drawSprites();      
   

    
}  
