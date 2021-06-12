class Box{

constructor(x,y,w,h){

    this.body = Bodies.rectangle(x,y,w,h,{isStatic:false,restitution:0.8});
    World.add(Mworld, this.body);
    this.width = w;
    this.height = h;
   
}

appear(){
    var pos = this.body.position;

    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
}
move(){
    //if(this.body.position.y>700){
        this.body.position.y = this.body.position.y + 1;
    //}
    
}
move2(){
    
    
        this.body.position.y = this.body.position.y - 3;
    
}

}