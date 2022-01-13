let levy;
function setup() {
  levy=new Levy();
  createCanvas(400, 400);
  background(0);
}

function draw() {
  levy.update();
  levy.show();
}
