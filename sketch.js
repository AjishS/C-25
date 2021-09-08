const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
// var arr = [[1,2],[2,3],[3,4]]
// console.log(arr[0][1])
// console.log(arr[1][1])

// arr.push("Ajish")
// console.log(arr)
// arr.pop()
// console.log(arr)
var balls = []



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES)
  angle = 15;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  cannonball = new CannonBall(cannon.x, cannon.y)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  //cannonball.display();
  for(var i = 0; i <balls.length; i++){
    showCannonBalls(balls[i],i);
  }
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    //cannonball.shoot();
    balls[balls.length-1].shoot()
  }
}
  
function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var cannonBall = new CannonBall(cannon.x,cannon.y)
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball,i){
if(ball){
  ball.display();
}
}


// [1,2,3,4]

// length= 4
// index = 3

// [1,2,3,4,5]

// length = 5
// index= 4

// length = 6
// index = 5