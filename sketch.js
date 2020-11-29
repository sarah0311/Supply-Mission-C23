var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	block1 = new Block(400,655,200,20);
	block2 = new Block(290,610,20,100);
	block3 = new Block(510,610,20,100);

	var package_options = {
		isStatic:true
	}

	packageBody = Bodies.rectangle(width/2 , 200 , 35,35, package_options);
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//console.log(ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  if (keyIsDown(DOWN_ARROW)) {
	Body.setStatic(packageBody, false);

	packageBody.velocityY = 3;
  }


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  block1.display();
  block2.display();
  block3.display();
  
  drawSprites();
}