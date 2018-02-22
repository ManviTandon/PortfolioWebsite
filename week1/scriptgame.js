var weight = 1;
var buttonWidth = 30; 
var buttonHeight = 10;
var drawRect = true; 
var penColor;



function setup() {
	var myCanvas = createCanvas(400, 400);
	myCanvas.parent('drawingPad');
	noFill ();
	rect(200, 200, 100, 100);
  rect(0, 0 ,width, height);
	penColor = color(0); // assign the color black to penColor
	alert("complete the house");

}


function draw(){
  	noStroke(); 
  	fill (0,0,255);
  	rect(10, 10, buttonWidth, buttonHeight);

  	if (mouseIsPressed == true) {
	    stroke(penColor);
    	if (drawRect == true){
      		rect(mouseX, mouseY, weight, weight); 
    	} else {
      		strokeWeight(weight);
      		line(mouseX, mouseY, pmouseX, pmouseY);
      	}
    }	
}


function mouseReleased() {
    if ((mouseX > 10) && (mouseX < buttonWidth+10) && (mouseY > 10) && (mouseY < buttonHeight+10)){
      print("button was clicked"); //check console
      if (drawRect == true){ 
          drawRect = false; // if drawRect is true, switch to false
      } else {
          drawRect = true;  // if drawRect is false, switch to true
      }
    }
}



function keyPressed() {
	// now in this function, instead of directly setting the stroke() color
    // we change the global variable penColor
	if (key == 'b' || key == 'B') {
	  penColor = color(0, 0, 0);
	} else if (key == 'w' || key == 'W'){
	  penColor = color(255, 255, 255);
	} else if (key == 'r' || key == 'R'){
	  penColor = color(255, 0, 0);
	} else if (key == 'g' || key == 'G'){
	  penColor = color(0, 153, 0);
	} else if (key == 'y' || key == 'Y'){
	  penColor = color(255, 255, 51);
	} else if (key == 'l' || key == 'L'){
	  penColor = color(0, 0, 204);
	} else if (keyCode == RIGHT_ARROW){
      weight++;
      strokeWeight(weight);
    } else if (keyCode == LEFT_ARROW){
      weight/=2;
      strokeWeight(weight);
    }
}

