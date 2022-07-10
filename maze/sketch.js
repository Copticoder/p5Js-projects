var w, h;
var rows, cols;
var sqSide;
var starting,ending;
var mazeSolver;
var sol;
var r;
let radio;
function setup() {

  createCanvas(600, 600);
  radio = createRadio();
  radio.option('1', 'Depth First Search');
  radio.option('2', 'Breadh First Search');
  radio.option('3', 'A* Search');
  radio.style('width', '3000px');
  radio.selected('2');
  textAlign(CENTER);
  restart();

}

function restart(){
  r=0;
  drewMaze=false;
  solved=false;
  sqSide =40;
  w = width;
  h = width;
  mazeSolver=new MazeSolver();
  maze = [];
  rows = Math.floor(w / sqSide);
  cols = Math.floor(h / sqSide);
 
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      maze.push(new Cell(i, j,sqSide));
      mazeSolver.solutionList.push(0);
    }
    mazeSolver.solutionList[0]=null;
  }
  current=maze[0];
  current.discovered=true;
  starting=maze[Math.floor(random(0,maze.length-1))];
  mazeSolver.stackFrontier.add(starting);
  mazeSolver.queueFrontier.add(starting);
  mazeSolver.pqFrontier.add(starting);
  ending=maze[Math.floor(random(0,maze.length-1))];
  sol=ending.index
}

function draw() {
  background(0);
  drawMaze();
  if(drewMaze){
    
  starting.start=true;
  ending.end=true;
    frameRate(20);
    if(radio.value()==1){
      mazeSolver.solveDFS();
    }else if(radio.value()==2){
      mazeSolver.solveBFS();
    }else{
      mazeSolver.solveAstar();
    }
    }else{
      frameRate(60);
    }
  
  if(solved){drawSolution();}
    
}

function mousePressed(){
  restart();
}
