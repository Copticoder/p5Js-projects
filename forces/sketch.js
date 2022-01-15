let gravity;
let leftWind;
let rightWind;
let balls=[];
function setup() {
   gravity=createVector(0,5);
   leftWind=createVector(4,0);
   rightWind=createVector(-4,0);
   for(let j=0;j<10;j++){
      balls.push(new Ball(random(100,300),random(100,300),random(10,20)));
   }
   createCanvas(400, 400);
}

function draw() {
  background(0);
  for(let j=0;j<balls.length;j++){
   balls[j].applyForce(gravity);
   balls[j].applyForce(rightWind);
   balls[j].applyForce(leftWind)
   balls[j].friction();
   balls[j].update();
   balls[j].checkBoundaries();
   balls[j].show([gravity,leftWind,rightWind]);

  }
  
}
