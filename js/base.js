class Base{
    constructor(x,y,width,height){
        var Option ={
            isStatic:true
        }
      this.body=Bodies.rectangle(x,y,width,height,Option);
      this.width=width;
      this.height=height;
      World.add (world,this.body)  
    }
    display(){
    var pos = this.body.position;
    push();
    translate (pos.x,pos.y);
   // rotate (angle);
    rectMode(CENTER);
  fill("brown");
  rect(0,0,this.width,this.height);
  pop ()
    }
}