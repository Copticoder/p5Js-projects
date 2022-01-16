class Attractor{
    constructor(x,y,mass){
        this.pos=createVector(x,y);
        this.mass=mass;
        this.r=sqrt(this.mass)/5;
    }
    applyGravity(planet){
        let direction=p5.Vector.sub(planet.pos,this.pos);
        let magSq=direction.magSq();
        direction.normalize();
        let g=0.1;
        let f=direction.copy();
        f.mult(-planet.mass);
        f.mult(this.mass);
        f.mult(g);
        f.div(magSq);
        planet.applyForce(f);
    }
    show(col){
        fill(col);
        circle(this.pos.x,this.pos.y,this.r);
    }
}

