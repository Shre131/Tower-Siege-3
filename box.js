class BOX {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.2,
      }
      this.visibility=255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     
      console.log(this.body.speed);
      if (this.body.speed<10) {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility=this.visibility-5;
        pop();
      }
    }

    score() {
      if (this.visibility<0 && this.visibility>-9){
        score=score+1;
      }
    }
  };