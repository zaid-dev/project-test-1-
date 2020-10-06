class Particle{
    constructor(x,y){

        this.body = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0, 255), random(0,255), random(0,255));
        World.add(world, this.body);
    }

    particleDisplay(){
        var pos = this.body.position;

        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,20,20);
    }
}