var bg, bgImg;
var bottomGround, topGround;
var balloon, balloonImg;
var jumpSound, dieSound;
var bottomObs1Img, bottomObs2Img, bottomObs3Img;
var topObs1Img, topObs2Img, topObs3Img;
var gameOverImg, restartImg;

function preload() {
  // Images
  bgImg = loadImage("assets/bg.png");
  bottomObs1Img = loadImage("assets/obsBottom1.png");
  bottomObs2Img = loadImage("assets/obsBottom2.png");
  bottomObs3Img = loadImage("assets/obsBottom3.png");
  topObs1Img = loadImage("assets/obsTop1.png");
  topObs2Img = loadImage("assets/obsTop2.png");
  topObs3Img = loadImage("assets/obsTop3.png");
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");

  // Sounds
  jumpSound = loadSound("assets/jump.mp3");
  dieSound = loadSound("assets/die.mp3");

  // Animations
  balloonImg = loadAnimation(
    "assets/balloon1.png",
    "assets/balloon2.png",
    "assets/balloon3.png"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Background image
  bg = createSprite(width / 2 + 90, height / 2, 1, 1);
  bg.addImage(bgImg);
  bg.velocityX = -4;
  bg.scale = 1.3;

  //Creating top and bottom grounds
  bottomGround = createSprite(200, 390, 800, 20);
  bottomGround.visible = false;

  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = false;

  //Creating balloon
  balloon = createSprite(100, 200, 20, 50);
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale = 0.2;
}

function draw() {
  background(0);

  if (bg.x < width / 2 - 80) {
    bg.x = width / 2 + 90;
  }

  //Adding gravity
  balloon.velocityY += 2.6;

  drawSprites();
}

function keyPressed() {
  // Making the hot air balloon to jump
  if (keyCode === UP_ARROW || keyCode === 32) {
    balloon.velocityY = -30;
    jumpSound.play();
  }
}
