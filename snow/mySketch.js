let snowflakes = [];
var snow;

function preload(){
	snow= loadImage('Snapseed.jpg');
}
function setup() {
  createCanvas(400, 600);
  fill(255);
  noStroke();
}

function draw() {
  background('black');
  let t = frameCount / 60;
	
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
		
image(snow,0,0,400,600);
  }


  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }
}
// snowflake class
function snowflake() {
  
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
   
    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    
    this.posY += pow(this.size, 0.5);

    
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}