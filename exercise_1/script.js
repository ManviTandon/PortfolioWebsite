
function setup() {
	createCanvas(100, 100);
	for (var x = 20; x <= 90; x += 10){
		if (x <= 50){
			line(x, 20, x+3, 50);
		} else {
			line(x, 50, x+3, 90);
		}
	}
}