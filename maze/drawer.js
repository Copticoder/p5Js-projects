var maze;
var current;
var drewMaze;

function drawSolution(){


    maze[sol].solCell=true;
    if(mazeSolver.solutionList[sol]!= 0){
      
      maze[mazeSolver.solutionList[sol]].solCell=true;
      sol=mazeSolver.solutionList[sol];
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
  
  
  
  