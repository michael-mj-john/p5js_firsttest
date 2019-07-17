
var posX;
var posY;
var canvasHeight;
var canvasWidth;

function setup() {
  canvasHeight = 800;
  canvasWidth = 800;
  createCanvas(canvasWidth, canvasHeight );
  posY = canvasHeight/2;
  posX = 0;
}

function draw() {
  background(0);
  fill(255);
  circle(posX, posY, 30);
  posX < canvasWidth ? posX++ : posX = 0;
}
