function setup() {
	createCanvas(100, 100);
	background(300);
	strokeWeight(4); 
	fill(0);
	
	// Draws head
	ellipse(50, 0, 20, 20);

	// Draws body
	line(50, 20, 50, 50); 

	// Draws right arm 
	line(50, 35, 90, 40); 

	// Draws left arm 
	line(50, 35, 10, 40); 

	//Draws right leg
	line(50, 70, 65, 100); 

	//Draws left leg
	line(50, 70, 65, 100); 


}