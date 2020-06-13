const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options = {
        restitution:2
    }
    var ball2_options = {
        restitution:2
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball = Bodies.rectangle (200, 200, 20, 20, ball_options);
    console.log(ground);
    World.add (world, ball)
    ball2 = Bodies.circle(200, 170, 10, ball2_options);
    World.add(world, ball2)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
    rect(ground.position.x,ground.position.y,400,20);
    rect(ball.position.x, ball.position.y, 20, 20);
    ellipse(ball2.position.x, ball2.position.y, 10, 10);
}