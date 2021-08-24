
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1360, 600);
	
	engine = Engine.create();
	world = engine.world;

    bob1 = new Bob(580,450);
	bob2 = new Bob(630,450);
	bob3 = new Bob(680,450);
	bob4 = new Bob(730,450);
	bob5 = new Bob(780,450);

	roof = new Roof(680,100,300,20)

	rope1 = new Rope(bob1.body, roof.body, -50*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 50, 0);
	rope5 = new Rope(bob5.body, roof.body, 50*2, 0);

	//Create the Bodies Here.


  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode = UP_ARROW){
   Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -100, y: -100});
	}
}



