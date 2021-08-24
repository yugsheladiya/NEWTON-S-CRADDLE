class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            posB: {x:this.offsetX,y:this.offsetY},
        };

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){

        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;

        var positionA = posA.x;
        var positionB = posA.y;
        var positionC = posB.x + this.offsetX;
        var positionD = posB.y + this.offsetY;

        strokeWeight(3);
        stroke("white");

        line(positionA,positionB,positionC,positionD);
    }
}