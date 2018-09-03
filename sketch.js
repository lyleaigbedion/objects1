// create an array
var bouncers = [];

var gravity = .5; // push down at this rate

var paused = false;

function setup(){
createCanvas(windowWidth, windowHeight);


}

function draw() {
	background(255);

	if(!paused)

	// call EACH and EVERY object methods
	for(var i = 0; i < bouncers.length; i++) {
		bouncers[i].update();
		bouncers[i].display();
	}
}

function keypressed(){
	paused = !paused;
}

function mousePressed() {
	// add a bouncer/object to the scene!
	bouncers.push(new Bouncer());

	gravity += .1;
}

// create a class
function Bouncer() {

	// internal variables
	this.x = mouseX;
	this.y = mouseY;

	//size of ther bouncer
	this.diameter = 20;

	//control speed of fall, velocity
	this.velocity = 2.0;

	// color
	this.col = random(200);

	this.shapeType = 0; // 0 = circle 1 = triangle
	
	this.shapeType++;

	if(this.shapeType>1) this.shapeType = 0;

	// internal function for object
	this.update = function() {
		this.y += this.velocity; // go down

		//apply gravity
		this.velocity += gravity;

		//if the bouncing ball 
		//hits the bottom of the screen, bounce back up at a slower velocity
		if(this.y > height - this.diameter/2){
			this.velocity *= -.8;

			//change color on each bounce
			this.col = random(200);


		}
	}

	




	this.display = function() {
		// show it
		fill(this.col);
		noStroke();

		if (this.shapeType == 0) {
		ellipse(this.x, this.y, 20,20);
		}

		if(this.shapeType == 1){
			rect(this.x,this.y, 20, 20);

		}
	}

}