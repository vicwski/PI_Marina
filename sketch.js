const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world

var backgroundImg, towerImage
var tower, ground
var cannon, angle
var balls = []

function preload() {
  backgroundImg = loadImage('./assets/background.gif')
  towerImage = loadImage('./assets/tower.png')
}

function setup() {
  createCanvas(1200, 600)

  engine = Engine.create()
  world = engine.world

  angleMode(DEGREES)
  angle = 15

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options)
  World.add(world, ground)

  tower = Bodies.rectangle(160, 350, 160, 310, options)
  World.add(world, tower)

  cannon = new Cannon(180, 110, 130, 100, angle)
}

function draw() {
  Engine.update(engine)
  image(backgroundImg, 0, 0, width, height)

  rect(ground.position.x, ground.position.y, width * 2, 1)

  push()
  imageMode(CENTER)
  image(towerImage, tower.position.x, tower.position.y, 160, 310)
  pop()

  cannon.display()

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i])
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y)
    cannonBall.trajectory = []
    Matter.Body.setAngle(cannonBall.body, cannon.angle)
    balls.push(cannonBall)
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot()
  }
}

function showCannonBalls(ball) {
  if (ball) {
    ball.display()
  }
}
