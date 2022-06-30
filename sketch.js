const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world

var backgroundImg, towerImage
var tower, ground
var cannon, cannonball
var angle

function preload() {
  backgroundImg = loadImage('./assets/background.gif')
  towerImage = loadImage('./assets/tower.png')
}

function setup() {
  createCanvas(1200, 600)
  engine = Engine.create()
  world = engine.world

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options)
  World.add(world, ground)

  tower = Bodies.rectangle(160, 350, 160, 310, options)
  World.add(world, tower)

  cannon = new Cannon(180, 110, 130, 100, angle)
  cannonball = new CannonBall(cannon.x, cannon.y)
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
  cannonball.display()
}
