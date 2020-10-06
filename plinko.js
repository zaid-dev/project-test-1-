class Plinko{
    constructor(x,y){
        this.body = Bodies.circle(x,y,10);
        World.add(world, this.body);
    }

    plinkoDisplay(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pox.y,10,10);
    }
}