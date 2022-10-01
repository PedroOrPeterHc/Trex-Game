//carregar arquivos antes de tudo
var trex ,trex_running,ground,groundImg,ground2,cloud1,sprite;
function preload(){
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
groundImg = loadImage("ground2.png")
cloud1Img = loadImage("cloud.png")
}
//usada pra definir as propriedades do ambiente inicial
function setup(){
createCanvas(600,200)
  
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
trex.x=25;

cloud1 = createSprite(200,50,20,20);
cloud1.addImage("cloud1",cloud1Img);
cloud1.scale = 0.9;

sprite = createSprite(1,200,400,1);
//left.visible = false;

ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImg);

ground2 = createSprite(200,190,400,10);
ground2.visible = false;

}

function draw(){
background("white")
createEdgeSprites();

//cloud1.bounceOff(leftEdge)

ground.velocityX=-2;
cloud1.velocityX=-2;
console.log(ground.x);



if (ground.x<0){
ground.x = ground.width/2
}

if (cloud1.IsTouching(sprite)){
cloud1.x=400;
}

if (keyDown("space") && trex.y>=140) {
trex.velocityY=-10
}

trex.velocityY+=0.5;
trex.collide(ground2);

drawSprites();

}
