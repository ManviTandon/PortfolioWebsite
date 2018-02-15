function setup(){                    
	// draw 100 circles, each with a randomized offset and transparency
	// randomSeed(1); // what happens when we assign a random seed? 
	background(0);
	stroke(255, 60);
	for (var i = 0; i < 100; i++) { 
		var r = random(10);
		strokeWeight(r);
		var offset = r * 5.0;
		ellipse(i-20, i+offset, 30, 20);
	}
}
