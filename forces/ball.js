class Ball{
    constructor(posx,posy,mass){
        this.mass=mass;
        this.rCol=random(100,255);
        this.gCol=random(100,255);
        this.bCol=random(100,255);
        this.r=sqrt(this.mass)*10;
        this.pos=createVector(posx,posy);
        this.acc=createVector(0,0);
        this.vel=createVector(2,0);
    }
    
    friction(){
        let d=height-this.pos.y-this.r;
        if(d<1){
            let friction = this.vel.copy();
            friction.normalize();
            friction.mult(-1);
            let mu=0.1;
            friction.setMag(this.mass*mu);

            this.applyForce(friction);
        }
    }
    applyForce(force){
        let f = p5.Vector.div(force,this.mass)
        this.acc.add(f);
    }
    checkBoundaries(){
        if (this.pos.y >= height - this.r/2) {
            this.pos.y = height - this.r/2;
            this.vel.y *= -1;
          }
      
          if (this.pos.x >= width - this.r/2) {
            this.pos.x = width - this.r/2;
            this.vel.x *= -1;
          } else if (this.pos.x <= this.r/2) {
            this.pos.x = this.r/2;
            this.vel.x *= -1;
          }

    }
    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);
        

    }
    show(vectors){
        fill(this.rCol,this.gCol,this.bCol);
        circle(this.pos.x,this.pos.y,this.r);
        this.drawVelocity();
        this.drawVectors(vectors, 100);
    }
    drawVelocity(){
        push();
            let arrow=this.vel.copy();
            arrow.normalize();
            arrow.setMag(this.vel.mag()*5);
            arrow.add(this.pos);
            stroke(255,0,0);
            strokeWeight(2)
            line(this.pos.x,this.pos.y,arrow.x,arrow.y);
            pop();
        }
    drawVectors(vectors,col){
        push();
        for(let i=0;i<vectors.length;i++){
            let arrow=vectors[i].copy();
            arrow.normalize();
            arrow.setMag(vectors[i].mag()*2);
            arrow.add(this.pos);
            console.log(arrow.x,arrow.y);
            stroke(col+(5*i),0,col+(5*i));
            strokeWeight(2)
            line(this.pos.x,this.pos.y,arrow.x,arrow.y);
        }
        pop();

}
}