class SlingShot{
    constructor(bodyA,bodyB){
        var optiions={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04, length:10
        }
        this.sling=Constraint.create(optiions);
        World.add(world,this.sling);
        }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
        push();
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop ();
    }
}