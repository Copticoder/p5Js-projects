class Planet extends Attractor {
    constructor(x,y,mass,v){
        super(x,y,mass)
        this.vel=v;
        this.acc=createVector(0,0);
        this.trail=[];
        this.trailCol=this.randCol();
        this.planetCol=this.randCol();
    }
    applyForce(force){
            let f= p5.Vector.div(force,this.mass);
            this.acc.add(f);
    }
    applyGravity(planets){
        for(let planet of planets){
            if(planet.pos.x == this.pos.x){
                continue;
            }
            let direction=p5.Vector.sub(planet.pos,this.pos);
            let magSq=direction.magSq();
            direction.normalize();
            let g=10;
            let f= this.getForce(g,planet,magSq,direction);
            planet.applyForce(f);
        }
    }

    getForce(g,planet,magSq,direction){
        let f=direction.copy();
        f.mult(-planet.mass);
        f.mult(this.mass);
        f.mult(g);
        f.div(magSq);
        f.limit(20);
        return f;
    }
    update(){
        this.vel.add(this.acc);

        this.pos.add(this.vel);
        this.trail.push({x:this.pos.x, y:this.pos.y});
        if(this.trail.length>50){
            this.trail.shift();
        }
        this.acc.set(0,0);
    }
    show(){
        noStroke();
        fill(this.planetCol);
        circle(this.pos.x,this.pos.y,this.r);
    }
    drawTrail(){

        for(let j=0;j<this.trail.length-1;j++){
            stroke(this.trailCol);
            strokeWeight(1);
            line(this.trail[j].x,this.trail[j].y,this.trail[j+1].x,this.trail[j+1].y);
        }
    }
    randCol(){
        return [random(255),random(255),random(255)];
    }
}