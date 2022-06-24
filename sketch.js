const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world, ground

var towerImg, bkImg

function preload() {
  towerImg = loadImage('assets/tower.png')
  bkImg = loadImage('assets/background.gif')
}
function setup() {
  canvas = createCanvas(1200, 600)
  engine = Engine.create()
  world = engine.world

  options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options)
  World.add(world, ground)

  tower = Bodies.rectangle(120, height - 260, 200, 350, options)
  World.add(world, tower)
}

function draw() {
  background(187)
  Engine.update(engine)

  image(bkImg, 0, 0, width, height)

  rect(ground.position.x, ground.position.y, width * 2, 1)

  push()
  imageMode(CENTER)
  image(towerImg, tower.position.x, tower.position.y, 200, 350)
  pop()
}
