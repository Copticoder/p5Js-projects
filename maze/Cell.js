class Cell {
  constructor(i, j, side) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.side = side;
    this.discovered = false;
    this.visited = false;
    this.curx = this.j * this.side;
    this.cury = this.i * this.side;
    this.index=(this.j)+(this.i*rows);
    this.solCell=false;
    this.fCost=0;
    this.start=false;
    this.end=false;
  }

  showSquare() {
    this.isdiscoveredCell();
    if(this.start){
      this.isstart();
    }
    if(this.end){
      this.isend();
    }
    if(!this.solCell&&this.start){
      this.isstart();
    }else if(!this.solCell&&!this.start){
      this.isvisitedCell();
    }else{
      this.issolCell();
    }
    this.drawWalls();
  }
  isstart(){
    noStroke();
    fill(255,0,255);   
    square(this.curx,this.cury,this.side);
    
  }
  isend(){
    noStroke();
    fill(255,255,0);   
    square(this.curx,this.cury,this.side);
  
  }
  issolCell(){
    noStroke();
    fill(255,0,0);   
    square(this.curx,this.cury,this.side);
  }



  drawWalls(){
    stroke(255, 255, 255);
    strokeWeight(1);
    //top : 0 , left : 1, bottom : 2 , right : 3
    if (this.walls[0]) {
      line(this.curx, this.cury, this.curx + this.side, this.cury);
    }
    if (this.walls[1]) {
      line(this.curx, this.cury, this.curx, this.cury + this.side);
    }
    if (this.walls[2]) {
      line(this.curx, this.cury + this.side, this.curx + this.side, this.cury + this.side);
    }
    if (this.walls[3]) {
      line(this.curx + this.side, this.cury, this.curx + this.side, this.cury + this.side);
    }
  }
  isdiscoveredCell() {
    if (this.discovered == true) {
      noStroke();

      fill(0);
      square(this.curx, this.cury, this.side);
  
  }}
  isvisitedCell(){
    if(this.visited){
      noStroke();
      fill(0,255,0);
      square(this.curx,this.cury,this.side);
    }

  }
  hunter(){
    noStroke();
    fill(0,0,255);
    square(this.curx,this.cury,this.side);
  }

  neighbourCells() {
    var neighbors = [];
    if (this.top() && maze[this.top()].discovered != true) {
      neighbors.push(maze[this.top()]);
    }
    if (this.bottom() && maze[this.bottom()].discovered != true) {
      neighbors.push(maze[this.bottom()]);
    }

    if (this.left() && maze[this.left()].discovered != true) {
      neighbors.push(maze[this.left()]);
    }
    if (this.right() && maze[this.right()].discovered != true) {
      neighbors.push(maze[this.right()]);
    }
    var next = neighbors[int(random(0, neighbors.length))];

    return next;
  }


  top() {
    if (this.i - 1 >= 0) {
      return this.j + (this.i - 1) * cols;
    }
    return false;
  }
  bottom() {
    if (this.i + 1 < rows) {
      return this.j + (this.i + 1) * rows;
    }
    return false;
  }
  left() {
    if (this.j - 1 >= 0) {
      return this.j - 1 + this.i * rows;
    }
    return false;
  }
  right() {
    if (this.j + 1 < cols) {
      return this.j + 1 + this.i * rows;
    }

    return false;
  }

  dfsNeighbours() {
    var avlNeighbours = [];
    if (this.top() && !this.walls[0] && maze[this.top()].visited==false) {
      avlNeighbours.push(maze[this.top()]);
    } if (this.bottom() && !this.walls[2] && maze[this.bottom()].visited==false) {
      avlNeighbours.push(maze[this.bottom()]);
    } if (this.left() && !this.walls[1]&&maze[this.left()].visited==false) {
      avlNeighbours.push(maze[this.left()]);
    } if (this.right() && !this.walls[3]&&maze[this.right()].visited==false) {
      avlNeighbours.push(maze[this.right()]);
    }
    return avlNeighbours;
  }
  getFcost(starting,ending){
    this.fCost=(Math.abs(starting.i-this.i)+Math.abs(starting.j-this.j)) + (Math.abs(ending.i-this.i)+Math.abs(ending.j-this.j));
  }

}



