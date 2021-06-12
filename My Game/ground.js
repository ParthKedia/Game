class Ground {
    constructor(x,y,width) {
        var o = {
            //velocity: {x:-5},
            isStatic: true
            //velocity: {x:-5,y:0}
        }
        this.body = Bodies.rectangle(x,y,width,30,o);
        this.x = x;
        this.width = width;
        this.height = 30;
        World.add(Mworld,this.body); 
    }
    show() {
    var pos = this.body.position;
    var angle = this.body.angle;

    /*if (roof.body.position.x < displayWidth/2){
        roof.body.position.x = displayWidth/2;
      }*/

    /*pos.x -= 5;
    
    if(pos.x < 0){
        pos.x = this.x
    }*/

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop(); 
  }

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push()
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop(); 
      
  }
}