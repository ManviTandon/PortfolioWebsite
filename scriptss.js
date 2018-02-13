// declare variables xPos and yPos
var xPos;
var yPos;
// declare a var called xSpeed;
var xSpeed = 5;
// declare a var called ySpeed
var ySpeed = 6;
// declare a variable called img 
var img;
// declare a var for image width, assign 40 
var image.width = 40;
// declare a var for image height, assign 30
var image.height = 30
// use the preload()function to load an image, 
var img;
function preload() {
img = loadImage('assets/pineapple.png');
}
// you'll need to create a folder called assets, and include the png there

function setup() {
	// create a canvas at least 400 x 400
	createCanvas (400, 400);
	// set xPos to be half of the width 
	xPos = image.width/2
	// set yPos to be half of the height
    yPos = image.height/2
	// assign xSpeed and ySpeed 
	// with random values between 1 and 10

}

function draw(){
	background(0);                 // set the background to black

	// draw the image at the (xPos, yPos) coordinate,
	// using the template image(img, xPos, yPos, width, height)
	 image(img, xPos + xSpeed, yPos + ySpeed, image.width, image.height);

	// add the xSpeed to xPos
	// add the ySpeed to yPos

	// if we reach the edge of the canvas
	// turn around (toggle xSpeed negative to positive)

	// same as above, toggle ySpeed if we hit the top or bottom
}