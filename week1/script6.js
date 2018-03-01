
var r, g, b;
let numParticles = 200;
let particles = [];

function setup() {
  createCanvas(500,500);
  r = random(255);
  g = random(255);
  b = random(255);
  for(let i = 0; i < numParticles; i++){
    particles[i] = new Particle(0, height, random(-2,2), random(-2,2), 20.0);
  }
  noStroke();

}

function draw() {
  background(0);
  fill(r, g, b, 0);
  strokeWeight (2);
  stroke(r, g, b);
  rect(0, 0, width, height);
  fill(255, 10);
  for (p of particles){
   p.move();
   p.display();
   p.regenerate();
  }
}

function mousePressed () {
	var d = dist(mouseX, mouseY, 500, 500);
	if (d < 100) {
		r = random(255);
		g = random(255);
		b = random(255);
	}
}

class Particle { 
  
  constructor(_x, _y, _xVel, _yVel, _r) {
    this.x = _x;
    this.y = _y;
    this.xVel = _xVel;
    this.yVel = _yVel;
    this.r = _r;
    this.gravity = 0.1;
  }
  
  move() {
    this.yVel += this.gravity;
    this.y += this.yVel;
    this.x += this.xVel;
  }
  
  display() {
    ellipse(this.x, this.y, this.r*3, this.r*3);
  }

  regenerate() {
    if (this.y > height+this.r) {
      this.x = mouseX;
      this.y = mouseY;
      this.xVel = random(-1.0, 1.0);
      this.yVel = random(-4.0, -2.0);
    }
  }
}