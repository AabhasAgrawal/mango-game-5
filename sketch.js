
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var child ,childImage;
var chain ;
var rock ;

function preload()
{
	treeImage=loadImage("sprites/tree.png")
	childImage=loadImage("sprites/boy.png")
}

function setup() {

	createCanvas(1200, 600);


	engine=Engine.create();
	world=engine.world;

	tree = createSprite(1000,300,30,150);
	tree.addImage(treeImage)
	tree.scale=0.4;

	mango1 = new Mango(900,200,40,40);
	mango2 = new Mango(900,250,40,40);
	mango3 = new Mango(950,200,40,40);
	mango4 = new Mango(900,300,40,40);
	mango5 = new Mango(950,250,40,40);
	mango6 = new Mango(950,300,40,40);
	mango7 = new Mango(850,200,40,40);
	mango8 = new Mango(950,110,40,40);
	mango9 = new Mango(1000,230,40,40);
	mango10 = new Mango(1100,270,40,40);
	mango11 = new Mango(1100,200,40,40);

	child = createSprite(200,500,80,240);
	child.addImage(childImage)
	child.scale=0.1;

	rock = new Stone(400,200);
	
	chain = new Rope (rock.body,{ x: 148, y:440});

	Engine.run(engine);  
}


function draw() {
  background(255);
  Engine.update(engine);

  Decetollision(rock,mango1); 
  Decetollision(rock,mango2); 
  Decetollision(rock,mango3);  
  Decetollision(rock,mango4); 
  Decetollision(rock,mango5); 
  Decetollision(rock,mango6); 
  Decetollision(rock,mango7); 
  Decetollision(rock,mango8); 
  Decetollision(rock,mango9); 
  Decetollision(rock,mango10); 
  Decetollision(rock,mango11); 

  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  rock.display();
 child.display();
 chain.display();


}

  
function mouseDragged(){

    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

    chain.fly();
}

function Decetollision (rock,mango1){
	mango1BodyPosition=mango1.body.position
	rockBodyPosition=rock.body.position 
	var distance=dist (rockBodyPosition.x,rockBodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y) 
  
	if (distance<=mango1.r+rock.width){
  
	  Matter.Body.setStatic(mango1.body,false)
  
	}
  }