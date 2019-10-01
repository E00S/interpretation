let img; // Declare variable 'img'.
const arr = [];

function setup() {
	
	createCanvas(800, 800);
	line(0, 0, width, height);
  	img = loadImage('test2.jpg', drawImg); // Load the image
}

function drawImg () {
	image(img, 0, 0, 800, 800);
}

function keyTyped() {
  if (key === 'q') {
    saveStrings(arr, 'img_data.txt');
  } 
}

function draw() {
	if (mouseIsPressed) {
		fill(0);
		square(mouseX, mouseY, 3);
  	// print(mouseX, mouseY);
  	// let X =  'square(' + mouseX + ', ' + mouseY + ', 3);'
	  	let X = mouseX;
	  	let Y = mouseY;
	  	append(arr, X);
	  	append(arr, Y);
	  	print(arr);
  	} 
}
