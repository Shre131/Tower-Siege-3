const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, paper, slingshot;
var stand1, stand2;
var box1,box2, box3, box4, box5, box6, box7,box8, box9, box10, box11;
var gameState = "onSling";
var score=0;

function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,690,1200,20);
    hexagon=new PAPER(300,400,50);
    slingshot=new SlingShot(hexagon.body,{x:300, y:300});
    stand1=new Ground(700,450,275,20);
    box1=new BOX(680,425,30,60);
    box2=new BOX(685,425,30,60);
    box3=new BOX(690,425,30,60);
    box4=new BOX(695,425,30,60);
    box5=new BOX(700,425,30,60);
    box6=new BOX(670,365,30,60);
    box7=new BOX(686,365,30,60);
    box8=new BOX(682,365,30,60);
  
    
    
    box9=new BOX(650, 290, 30, 60);
    
    box10=new BOX(700, 290, 30, 60);

  
    Engine.run(engine);
    
  
}


function draw() {
  rectMode(CENTER);
  getBackgroundimage();

  
  drawSprites();
ground.display();
slingshot.display();
hexagon.display();
stand1.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
    box3.display();
    box3.score();
   box4.display();
   box4.score();
 box5.display();
 box5.score();
box6.display();
box6.score();
	box7.display();
  box7.score();
box8.display();
box8.score();
box9.display();
box9.score();
box10.display();
box10.score();


textFont("Comic Sans MS");  
textSize(30);
text("Score:"+score,1000,40);


}	

function mouseReleased(){
    slingshot.fly();
}

function mouseDragged() {
  Matter.Body.setPosition(hexagon.body,{x:mouseX, y:mouseY});
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(hexagon.body);
    }
}

async function getBackgroundimage() {
  var response= await fetch ("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var resp=await response.json();
  var datetime= resp.datetime;
  console.log(datetime);
  var time=datetime.slice(11,13);
  if (time>=5 && time<=16) {
    background(255);
  }
  else{
     background(0);
  }
 
}