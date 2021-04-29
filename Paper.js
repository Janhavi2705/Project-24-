class Paper{
      constructor(x,y,radius,angle){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2  
      }
     this.body = Matter.Bodies.circle(x,y,radius,options);
     this.width = width;
     this.height = height; 
     Matter.Body.setAngle(this.body,angle)
     World.add(world, this.body);
}
display(){
     // var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill("red");
      circle(0, 0, this.width, this.height);
      pop();
    }
  };