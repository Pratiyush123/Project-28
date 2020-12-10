
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,mango,stone;
var tree,treeimg,chain;
var boy,boyimg;

function preload()
{
	treeimg = loadImage("tree.png")
	boyimg = loadImage("boy.png")
}

function setup() {
	createCanvas(2300, 1300);

	tree = createSprite(1700,650,100,100);
	tree.addImage(treeimg)
	
	boy = createSprite(200,1150,50,10);
	boy.addImage(boyimg)
	boy.scale = 0.2

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(1000,1300,2700,50);
	mango = new Mango(1350,530,40);
	mango2 = new Mango(1430,450,40);
	mango3 = new Mango(1530,580,40);
	mango4 = new Mango(1600,400,40);
	mango5 = new Mango(1680,310,40);
	mango6 = new Mango(1600,250,40);
	mango7 = new Mango(1750,510,40);
	mango8 = new Mango(1850,400,40);
	mango9 = new Mango(1850,270,40);
	mango10 = new Mango(1950,460,40);
	mango11 = new Mango(2100,440,40);
	mango12 = new Mango(1850,150,40);
	stone = new Stone(400,500,30);

	chain = new Chain(stone.body,{x: 100,y: 1040});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");
	textSize(50);
    text("Press Space to get a second Chance to Play!!",100 ,100);

	drawSprites();

	ground.display();
	chain.display();
	mango.display();
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
	mango12.display();

	stone.display();
	
	
	detectollision(stone,mango);
	detectollision(stone,mango2);
	detectollision(stone,mango3);
	detectollision(stone,mango4);
	detectollision(stone,mango5);
	detectollision(stone,mango6);
	detectollision(stone,mango7);
	detectollision(stone,mango8);
	detectollision(stone,mango9);
	detectollision(stone,mango10);
	detectollision(stone,mango11);
	detectollision(stone,mango12);
	

}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x: mouseX,y: mouseY})
}

function mouseReleased(){
    chain.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x: 100,y: 1040})
		chain.attach(stone.body)
	}
} 

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	  if (distance<=lmango.r+lstone.r) {
		  Matter.Body.setStatic(lmango.body,false);
	  }
}