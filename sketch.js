const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options={
        restitution : 2
    }

   ground= Bodies.rectangle(200,400,400,25,ground_options);
    World.add(world,ground);
     
    ball= Bodies.rectangle(200,40,40,40,ball_options);
    World.add(world,ball);


   


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER);
    ellipseMode(RADIUS);
    fill("red");
    rect(ground.position.x,ground.position.y,400,25);

    stroke("orange");
    strokeWeight(4);
    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,40,40);

}
