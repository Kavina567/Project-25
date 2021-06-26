
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject, paper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,675, width,49);
	dustbinObj=new dustbin(1200,690);
	paper = new Paper(100,300,9);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:12, y:-13});

	}
}