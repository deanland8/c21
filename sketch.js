const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground;
var left;
var up;
var right;
var ball;
var btn1,btn2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  btn1= createImg("up.png");
btn1.position( 20,20);
btn1.size(50,50);
btn1.mouseClicked(vforce);

//for button 2
btn2= createImg("right.png");
btn2.position( 220,20);
btn2.size(50,50);
btn2.mouseClicked(hforce);
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground= new Ground(200,390,400,20);
  left= new Ground(10,200,20,400);
  right=new Ground(390,200,20,400);
  up= new Ground(200,10,400,20);

var ball_options={
  restitution: 0.75
};
  ball= Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);
}

btn1= createImg("up.png");
btn1.position( 20,20);
btn1.size(50,50);
btn1.mouseClicked(vforce);

//for button 2
btn2= createImg("right.png");
btn2.position( 220,20);
btn2.size(50,50);
btn2.mouseClicked(hforce);



function draw() 
{
  background(51);
  ground.display();
  left.display();
  right.display();
  up.display();
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
}
//horizontal force in right
function hforce(){
  //body name, body position, body force direction
Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.05,y:0});
}
//vertical force in up
function vforce(){
Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.05});
}