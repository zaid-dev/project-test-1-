const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box;

var particles = [];
var plinkos = [];
var division = [];

var devisionHeight = 300;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  

  ground = new Ground(240,770,500,20);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  drawSprites();
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
}
for(var k = 0; k<=width; k = k + 80){
  division.push(new Division(k, height-devisionHeight/2, 10, devisionHeight));
}