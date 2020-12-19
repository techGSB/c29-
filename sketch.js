
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gr,g1,g2;
var b1,b2,b2,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22;
var stone;
var bg;

function preload()
{

	
}

function setup() {
	createCanvas(1345, 650);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 
  gr = new Ground(600,620,1500,20);  
  g1 = new Ground(760,550,250,15);
  g2 = new Ground(1110,450,250,15);
  b1 = new Box(660,522,40,40);
  b2 = new Box(705,522,40,40);
  b3 = new Box(750,522,40,40);
  b4 = new Box(795,522,40,40);
  b5 = new Box(840,522,40,40);
  b6 = new Box(705,480,40,40);
  b7 = new Box(750,480,40,40);
  b8 = new Box(795,480,40,40);
  b9 = new Box(775,438,40,40);
  b10 = new Box(725,438,40,40);
  b11 = new Box(750,396,40,40);
  b12 = new Box(1010,396,40,40);


  b13 = new Box(1055,396,40,40);
  b14 = new Box(1100,396,40,40);
  b14 = new Box(1145,396,40,40);
  b15 = new Box(1190,396,40,40);
  b16= new Box(1100,350,150,40);
  b17 = new Box(1059,305,40,40);
  b18 = new Box(1099,305,40,40);
  b19 = new Box(1144,305,40,40);
  b20 = new Box(1100,256,40,40);


  stone = new Stone(330,438,50);
  launcher = new Launcher(stone.body,{x:234,y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  gr.display();
  g1.display();
  g2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
stone.display();
  drawSprites();












  



}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}



function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:280, y:575})
	 launcher.attach(stone.body);
	}
}


