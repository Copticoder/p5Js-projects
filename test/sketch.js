let ball;
let trail=[];

function setup() {
  ball=createVector(50,50);
  createCanvas(400, 400);

}
let r=10;
function draw() {
  background(0);
  ball.x=mouseX;
  ball.y=mouseY;
  
  trail.push(ball);
  if(trail.length>60){
    trail.shift();
  }
  for(let i =0 ; i<trail.length-1;i++){
    stroke(255);
    strokeWeight(1);
    // console.log(trail[i].x,trail[i].y, trail.length);

    line(trail[i].x,trail[i].y,trail[i+1].x,trail[i+1].y);
  } 
  noStroke();
  fill(255);
  circle(ball.x,ball.y,r);
  
}
