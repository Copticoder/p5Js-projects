var ball={
  x:200,
  y:200,
  moveX:5,
  moveY:2
}
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0);
  fill(255);
  if(ball.y >= height || ball.y<0){
    ball.moveY=-ball.moveY;
  }
  if(ball.x>=width || ball.x <0){
    ball.moveX=-ball.moveX;
  }
  circle(ball.x+=ball.moveX,ball.y+=ball.moveY,50);
}
