
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var object2;
var object3;
var object4;
var object5;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


  object=Bodies.rectangle(100,100,50,50);
  World.add(world,object);

  object2=Bodies.circle(200,50,40);
  World.add(world,object2);

  object3=Bodies.rectangle(250,200,40,40);
  World.add(world,object3);

  object4=Bodies.circle(300,300,60);
  World.add(world,object4);

  object5=Bodies.rectangle(220,320,70,70);
  World.add(world,object5);
 // console.log(object.position.x);
  //console.log(object.position.y);
}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  fill ("blue");
    rect(object.position.x,object.position.y,50,50);
    fill ("red");
    circle(object2.position.x,object2.position.y,40);
    fill ("yellow");
    rect(object3.position.x,object3.position.y,40,40);
    fill ("green");
    circle(object4.position.x,object4.position.y,60);
    fill ("pink");
    rect(object5.position.x,object5.position.y,70,70)
  
}
