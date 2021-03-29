const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var bird;
var log;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(600,height,1200,20);
    bird=new Bird(200,200);

    box1 = new Box(700,380,50,50);
    box2 = new Box(900,380,50,50);
    pig=new Pig(800,380);
    log=new Log(800,350,300,PI/2);

}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    bird.display();
    log.display();
}