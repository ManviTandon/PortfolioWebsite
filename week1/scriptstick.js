function setup() {
	var myCanvas = createCanvas(500, 500);
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


	strokeWeight(0); 
	fill(0);
	
	// Draws landscape
	fill(0, 0, 255);
	rect(150, 100, 200, 200);

	// Draws foreground
	fill(0, 255, 0, 197);
	rect(150, 300, 200, 30);  

	//Draws sun
	fill(255, 0, 0);
	ellipse(200, 160, 50, 50);

}