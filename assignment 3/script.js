var x, y;

function setup() {
  createCanvas(200, 300);
  x = width;
  y = height / 2;
}

function draw() {
  // Draw a low-opacity white rectangle 
  fill(255, 10); 
  rect(0, 0, width, height);

  // Draw a circle
  stroke(50);
  fill(120);
  ellipse(x, y, 40, 40);
  
  // Jiggling randomly on the vertical axis
  y = y + random(-1, 1);
  // Moving right at a constant speed
  x = x + 1;
  
  // Reset to the left side
  if (x > 200) {
    x = 0;
  }
}