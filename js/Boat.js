class Boat {
  constructor(x, y, width, height, boatPos) {
    var options = {
      isStatic: true
    }

    this.body = Bodies.rectangle(x, y, width, height, options)
    this.width = width
    this.height = height
    this.boatPosition = boatPos
    this.image = loadImage('assets/boat.png')
    World.add(world, this.body)
  }

  display() {
    var pos = this.body.position

    push()
    translate(pos.x, pos.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
    pop()
  }
}
