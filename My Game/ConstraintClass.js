class Con{
    constructor(A,B){
    var o={
    bodyA: A,
    pointB: B,
    stiffness:0.2,
    length:300
    }
    this.chain = Constraint.create(o);
    World.add(Mworld,this.chain);  
    }
    show() {
        if(this.chain.bodyA){
        var p = this.chain.bodyA.position;
        var b = this.chain.pointB;

        push();
        strokeWeight(2);
        line(p.x, p.y, b.x, b.y);
        pop();
        }
    }

    
}