function setup() {
	var myCanvas = createCanvas(100, 100);
	myCanvas.parent('sketch-holder');
	background(255);
	strokeWeight(4); 
	fill(0);
	
	// Draws head
	ellipse(50, 12, 20, 20);

	// Draws body
	line(50, 20, 50, 70); 

	// Draws right arm 
	line(50, 35, 90, 40); 

	// Draws left arm 
	line(50, 35, 10, 40); 

	//Draws right leg
	line(50, 70, 65, 100); 

	//Draws left leg
	line(50, 70, 35, 100); 


}