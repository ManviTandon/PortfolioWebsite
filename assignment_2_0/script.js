function setup() {
	createCanvas(200, 200);
	for (var y = 0; y < 200; y += 5){
		for (var x = 0; x < 200; x += 5){
			rect(x, y, 5, 5);
		}
	}
}