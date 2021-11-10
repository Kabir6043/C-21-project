
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var radius= 40;
var ball, groundObj, leftSide, rightSide;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 

var ball_options={
  isStatic: false,
  restitution: 0.3,
  friction:0,
  density:1.2
}

ball=Bodies.circle(260,100,radius/2,ball_options)
World.add(world,ball)
  
groundObj= new Ground(width/2,670,width,20)
leftSide= new Ground(1100, 600, 20, 120)
rightSide= new Ground(1350, 600, 20, 120)
Engine.run(engine)
}
  

function draw() 
{
  background(51);
  
  
  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  /*ellipse(ball.position.x,ball.position.y,10);
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  pop();

ground.show();
top_wall.show()
left.show()
  right.show()
  Engine.update(engine);*/
}




function keyPressed(){
 if(keyCode==UP_ARROW) {
  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

 }
}