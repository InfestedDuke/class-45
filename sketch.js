var charecterrun,charecterrun1,charecterrun2,charecterrun3,charecterrun4,charecterrun5;
var backgroundimg,backgroundimg2;
var animationstand,animationshoot;
var bullet;
var zombie;
function preload(){
backgroungimg = loadImage('images/12.jpg');
backgorundimg2 = loadImage('images/Main.jpg');
charecterrun = loadAnimation('images/Run 1.jpg','images/Run 2.jpg','images/run 3.jpg','images/run 4.jpg','images/run 5.jpg');
animationstand = loadAnimation('images/Standing.jpg');
animationshoot = loadAnimation('images/shooting.jpg');
bullet = loadAnimation('images/bullet.jpg');
zombie = loadAnimation('images/zombie stand.jpg','images/zombie walk 1.jpg','images/zombie walk 2.jpg');
}
function setup(){
    createCanvas(1500,600);
    charecterrun1=createSprite(50,465,50,50);
    charecterrun1.addAnimation('stand',animationstand);
    charecterrun1.addAnimation('running',charecterrun);
    charecterrun1.addAnimation('shooting',animationshoot);
    
}
function draw(){
background(backgroungimg);
if(keyIsDown(RIGHT_ARROW)){
    charecterrun1.changeAnimation('running',charecterrun);
}

if( keyIsDown('w')){
    var bullets = createSprite(50-20,445,50,50);
    bullets.velocityX = 3;
    bullets.addAnimation('bulletshot',bullet);
}
if(frameCount % 80 === 0){
    var zombies = createSprite(1600,465,30,30);
    zombies.velocityX = -4;
}
    drawSprites();
}
function keyPressed(){
    if(keyCode === 39){
charecterrun1.x=charecterrun1.x+30;   
    }   
    if(keyCode === 83){
        charecterrun1.changeAnimation('shooting',animationshoot);
    }
    
    }
 
