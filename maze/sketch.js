var maze;
var w, h;
var rows, cols;
var sqSide;
var current;
var stackFrontier;
var drewMaze=false;
var queueFrontier;
var starting,ending,solved;
var solutionList;
solutionList=[];
var sol;
solved=false;
function setup() {
  // frameRate(10);
  createCanvas(600, 600);
  stackFrontier=new StackFrontier();
  queueFrontier=new QueueFrontier();
  pqFrontier= new PQMinHeap();
  sqSide = 20;
  w = width;
  h = height;
  maze = [];
  rows = w / sqSide;
  cols = h / sqSide;

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      maze.push(new Cell(i, j,sqSide));
      solutionList.push(0);
    }
    solutionList[0]=null;
  }
  current=maze[0];
  current.discovered=true;
  starting=maze[0];
  stackFrontier.add(starting);
  queueFrontier.add(starting);
  pqFrontier.add(starting);
  ending=maze[rows-1];
  sol=ending.index

}
var r;
r=0;
function draw() {
  background(0);
  drawMaze();
  
  if(drewMaze){solveAstar();}
  
  if(solved){drawSolution();}
    
}
function drawSolution(){


  maze[sol].solCell=true;
  if(maze[solutionList[sol]] != null){
    
    maze[solutionList[sol]].solCell=true;
    sol=solutionList[sol];
  
  }

}


function solveDFS(){
  if(!solved)
  {
    if(!stackFrontier.empty()){
    var node = stackFrontier.remove();
    node.hunter();
    node.visited=true;
    
    if(node==ending){
      solved=true;
    }
      var neighbors=node.dfsNeighbours();
      for(var counter=0;counter<neighbors.length;counter++){
        stackFrontier.add(neighbors[counter]);
        solutionList[neighbors[counter].index]=node.index;
      
    }
  }}

}


function solveAstar(){
  if(!solved){
    if(!pqFrontier.empty()){
      var node=pqFrontier.remove();
      console.log(node.fCost);
      node.hunter();
      node.visited=true;
      if(node == ending){
        solved=true;
      }
      var neighbors=node.dfsNeighbours();
      for(var counter=0;  counter<neighbors.length  ; counter++){
        neighbors[counter].getFcost(starting,ending);
        pqFrontier.add(neighbors[counter]);
        solutionList[neighbors[counter].index]=node.index;

      }
    }
  }
}

function solveBFS(){
  if(!solved){
    if(!queueFrontier.empty()){
      var node =queueFrontier.frontier[0];
      queueFrontier.remove(); 
      node.visited=true;
  
      node.hunter();
      if(node==ending){
        solved=true;
      }
      var neighbors=node.dfsNeighbours();

      for(var counter=0;  counter<neighbors.length  ; counter++){
        neighbors[counter].visited=true;
        queueFrontier.add(neighbors[counter]);
        solutionList[neighbors[counter].index]=node.index;

      }

    }

  }
}

function drawMaze(){
  for (var x = 0; x < maze.length; x++) {
    maze[x].showSquare();
  }
  if(!drewMaze){
    current.hunter();
    var next=current.neighbourCells();  
    if(next){
    wallRemover(next);
    current=next;
  }else{
    checkEndMaze();
  }
}
}

function wallRemover(next){
  next.discovered=true; 
  if(maze[next.top()]==current){
    next.walls[0]=false;
    current.walls[2]=false;
  } else if (maze[next.bottom()]==current){
    next.walls[2]=false;
    current.walls[0]=false;
  }else if (maze[next.left()]==current){
    next.walls[1]=false;
    current.walls[3]=false;
  }else{
    next.walls[3]=false;
    current.walls[1]=false;
  }
}

function checkEndMaze(){
  if(r<maze.length-1){
    r+=1;
    current=maze[r];
  }else{
    drewMaze=true;
  }
}



