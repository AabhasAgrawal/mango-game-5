class Stone {
  constructor(x, y,) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':false
    }
    this.body = Bodies.rectangle(x, y, 20,20, options);
    this.width = 30;
    this.height = height;
    this.image = loadImage("sprites/stone.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 30, 30);
    pop();
  }
  }
  