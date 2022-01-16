let centPlanet;
let planets=[];
function setup() {
  createCanvas(400, 400);
  planets.push(new Planet(150,150,100,createVector(-0.5,0.5)),new Planet(175,175,100,createVector(-0.5,0.5)),new Planet(250,150,100,createVector(-0.5,-0.5)),new Planet(225,175,100,createVector(-0.5,-0.5)), new Planet(200,225,100,createVector(1,0)));
  centPlanet=new Attractor(200,200,500,createVector(0,0))
  background(0);

}
let state=0;

function draw() {
  background(0);
  for(let planet of planets){ 
    planet.applyGravity(planets);
    // centPlanet.applyGravity(planet)
    planet.update();
    planet.drawTrail();
    planet.show();
    // centPlanet.show('yellow');
    

}  
}
