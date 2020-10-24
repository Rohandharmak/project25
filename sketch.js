
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground;
var dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(500,100);
	ground= new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1200,650);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper1.display();
  ground.display();
  dustbin.display();
  keyPressed();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



