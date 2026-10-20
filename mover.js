// CLASS: each mover is one face that moves and rotates.
class mover {
  constructor() {
    this.size = random(75, 155);
    this.x = random(this.size / 2, max(this.size / 2, width - this.size / 2));
    this.y = random(this.size / 2, max(this.size / 2, height - this.size / 2));
    this.xDir = random(-8, 8);
    this.yDir = random(-8, 8);
    this.angle = random(TWO_PI);
    this.spin = random(-0.035, 0.035);
  }

  display() {
    push(); 
    translate(this.x, this.y); // move to the face's position
    rotate(this.angle); // turn the face
    image(faceImage, 0, 0, this.size, this.size); // draw the image
    pop(); 
  }

  update() {
    this.x += this.xDir;
    this.y += this.yDir;
    this.angle += this.spin;
  }

  keepInCanvas() {
    // Bounce when the center gets close to the canvas edge.
    // Extra space accounts for the rotating corners of the image.
    let edge = this.size * 0.7;
    if (this.x > width - edge || this.x < edge) {
      this.xDir *= -1;
      this.x = constrain(this.x, min(edge, width / 2), max(width - edge, width / 2));
    }
    if (this.y > height - edge || this.y < edge) {
      this.yDir *= -1;
      this.y = constrain(this.y, min(edge, height / 2), max(height - edge, height / 2));
    }
  }
}
