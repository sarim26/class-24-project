
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper 
var dustbin
var ground


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);




	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
  

dustbin1= new Dustbin(480,650,200,20)
dustbin2= new Dustbin(380,620,20,100)
dustbin3= new Dustbin(580,620,20,100)
ground= new Ground(width/2, height-35, width,10)
paper= new Paper(340,640,34)
Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  
paper.display()
dustbin1.display()
ground.display()

}

function keyPressed(){

	if(keyCode (UP_ARROW)){

Matter.Body.applyForce(paper.body,paper.body.position,{x : 85 ,y:-85})
		
	}
	

}

