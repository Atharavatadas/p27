
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
var h1,ball,ball1,ball2,ball3,ball4,ball5,ball6;
var l1,l2,l3,l4,l5,l6,l7

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	h1 = new log(400,250,600,30)
	ball = new bob(140,600,60)
	ball1 = new bob(220,600,60)
	ball2 = new bob(540,600,60)
    ball6 = new bob(620,600,60)
	ball3 = new bob(300,600,60)
	ball4 = new bob(380,600,60)
	ball5 = new bob(460,600,60)
    l1 = new rope(ball.body,h1.body,ball,)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  h1.display();
  ball.display();
  ball1.display();
  ball5.display()
  ball4.display()
  ball3.display()
  ball2.display()
  ball6.display()
  l1.display()

  drawSprites();
 
}



