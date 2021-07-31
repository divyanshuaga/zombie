class Stone{
    constructor(x,y,w,h){
        var Option ={
            restitution:0.8
        }
      this.body=Bodies.rectangle(x,y,w,h,Option);
      this.stone = loadImage("stone.png")
      this.w=w;
      this.h=h;
      
      World.add (world,this.body)  
    }
    display(){
    var pos = this.body.position;
    push();
    translate (pos.x,pos.y);
   // rotate (angle);
  imageMode(CENTER);
  fill("red");
  image(this.stone,0,0,this.w,this.h);
  pop ()
    }
}