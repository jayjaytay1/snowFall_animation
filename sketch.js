const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


    engine = Engine.create();
    world = engine.world

function preload() {
 backgroundImage = loadImage("snow1.jpg")


}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  snow = new Snow(300,70,50,50);
  snow2 = new Snow(330,80,50,50);
  snow3 = new Snow(360,70,50,50);
  snow4 = new Snow(390,80,50,50);
  snow5 = new Snow(410,70,50,50);
   









}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  snow.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  drawSprites();
}