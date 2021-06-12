class Ball {
    constructor(x,y,radius) {
        var o = {
            //velocity: {x:-5},
            isStatic: false,
            restitution : 0.8,
            density : 1,
        }
        this.body = Bodies.circle(x,y,radius/2,o);
        this.radius = radius;
        World.add(Mworld,this.body); 
    }
    show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    pos.x = mouseX;
    pos.y = mouseY;

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    fill("orange");
    ellipseMode(CENTER);
    ellipse(0,0,this.radius,this.radius);
    pop(); 
  }

  fly() {
     
         this.body.position.y = this.body.position.y - 2;
      
  }
}