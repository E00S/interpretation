let result;

function preload() {
  	result = loadStrings('img_data.txt');
}

function setup() {
	createCanvas(800, 800);
	fill(0);
	// print(result.length)
	// print(result[0])

	for (let i = 0; i < result.length; i+= 2) {
    	square(result[i], result[i + 1], 3);
    	// print('I: ' + i)
  	}
}