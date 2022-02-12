const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var tower;
var canon
var backgroundImage
var angle

function preload(){
backgroundImage=loadImage("./assets/background.gif")




}



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  tower= new Tower(150,350,150,320) 

  rectMode(CENTER);
  ellipseMode(RADIUS);


  angle=-PI/4

  
 // create canon 
 canon= new Canon(180,100,110,50,angle)

function draw() {
  background(51);
  Engine.update(engine);


  //displaying Background Image
 image(backgroundImage,0,0,width,height)
tower.show()
canon.display()

}
}
