var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
var PLAY=0,END=1,gamestate=0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 4
	

	//groundSprite=createSprite(width/2, height-30, width,10);
   // groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});

	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 645, width, 10 , {isStatic:true} );
    World.add(world, ground);


	Engine.run(engine);
	box = Bodies.rectangle(width/2,height,width,20)
	World.add(world,box)
	
	box1 = new Box(width/2,650,200,20)
	box2 = new Box(310,610,20,100)
	box3 = new Box(490,610,20,100)
  

}
function draw() {
  rectMode(CENTER);
  background(0);

  if(gamestate == PLAY)
  {
	packageSprite.x= helicopterSprite.x 
	keyPressed()
  }
   
  else if(gamestate == END)
  {
     helicopterSprite.velocityX = 0
  }
  packageSprite.y= packageBody.position.y 
  
  if(helicopterSprite.x>800)
  {
	  text("YOU FAILED",width/2,height/2)
  }

  box1.display()
  box2.display()
  box3.display()
  drawSprites();
 
}

function keyPressed() 
{

  if (keyCode === DOWN_ARROW) 
  {
	Body.setStatic(packageBody,false)
	//https://shubham589-bot.github.io/supply-mission1/
	gamestate = END
  }
}
