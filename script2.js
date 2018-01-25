function onClick() {
	createCanvas(250, 400);
	strokeWeight(15); 
	fill(0);
	
	// Draws landscape
	fill(0, 0, 255);
	rect(100, 100, 100, 90);

	// Draws foreground
	fill(0, 255, 0, 197);
	rect(100, 150, 50, 90);  

	//Draws sun
	fill(255, 0, 0);
	ellipse(150, 100, 50, 50);


}