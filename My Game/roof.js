class Roof{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.body = Bodies.rectangle(x,y,width,height,options);
     // this.image = loadImage("landscape.jpg");
      this.width = width;
      this.height = height;
      //this.body.position.x = this.width/2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x -= 5;
      if(this.body.position.x <200){
        this.body.position.x = this.width/2;
      }
      //console.log(pos.x);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      //fill("#9BEDE9");
      rect(0, 0, this.width*2, this.height);
      pop();
    }


  }
