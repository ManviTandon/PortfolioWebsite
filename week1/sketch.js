function setup() {
	createCanvas(250, 450);
	background(10);

		stroke(205);
	strokeWeight(2);
	 

	// Draws a rectangle in the form "rect(x, y, width, height)"
	fill(0, 255, 0, 197);
	rect(80, 150, 150, 80);  // note how the rectangle has a default white fill

		// Draws a rectangle in the form "rect(x, y, width, height)"
	fill(0, 225, 0, 127);
	rect(80, 150, 100, 100);  // note how the rectangle has a default white fill

	// Draws a triangle in the form "triangle(x1, y1, x2, y2, x3, y3)"
	fill(255, 0, 0);
	triangle(50, 250, 250, 210, 50, 320);

	// Draws an ellipse in the form "ellipse(x, y, width, height)"
	fill(0, 255, 0);
	ellipse(105, 305, 150, 140);
}