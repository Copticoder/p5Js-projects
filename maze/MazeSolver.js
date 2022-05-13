class MazeSolver{
    constructor(){
        this.solved=false;
        this.stackFrontier=new StackFrontier();
        this.queueFrontier=new QueueFrontier();
        this.pqFrontier= new PQMinHeap();
        this.solutionList=[]
    }

    
 solveDFS(){
    if(!solved)
    {
      if(!this.stackFrontier.empty()){
      var node = this.stackFrontier.remove();
      node.hunter();
      node.visited=true;
      
      if(node==ending){
        solved=true;
      }
        var neighbors=node.dfsNeighbours();
        for(var counter=0;counter<neighbors.length;counter++){
          this.stackFrontier.add(neighbors[counter]);
          this.solutionList[neighbors[counter].index]=node.index;
      }
    }}
  
  }
  
  
   solveAstar(){
    if(!solved){
      if(!this.pqFrontier.empty()){
        var node=this.pqFrontier.remove();
        node.visited=true;
        node.hunter();
        if(node == ending){
          solved=true;
        }
        var neighbors=node.dfsNeighbours();
        for(var counter=0;  counter<neighbors.length  ; counter++){
          neighbors[counter].getFcost(starting,ending);
          this.pqFrontier.add(neighbors[counter]);
  
          this.solutionList[neighbors[counter].index]=node.index;
  
        }
      }
    }
  }
  
   solveBFS(){
    if(!solved){
      if(!this.queueFrontier.empty()){
        var node =this.queueFrontier.frontier[0];
        this.queueFrontier.remove(); 
        node.visited=true;
    
        node.hunter();
        if(node==ending){
          solved=true;
        }
        var neighbors=node.dfsNeighbours();
  
        for(var counter=0;  counter<neighbors.length  ; counter++){
          this.queueFrontier.add(neighbors[counter]);
  
          this.solutionList[neighbors[counter].index]=node.index;
  
        }
  
      }
  
    }
  }
  
}