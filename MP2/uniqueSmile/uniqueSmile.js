let mouthSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mouthSize = random(5, 300);
}

function draw() {
  background(250);
  fill("yellow");
  circle(windowWidth/2, windowHeight/2, 500);
  fill(0);
  square(windowWidth/2.6, windowHeight/2.6, 50);
  square(windowWidth/1.75, windowHeight/2.6, 50);
  arc(windowWidth/2, windowHeight/1.5, mouthSize, 75, 0, PI);
  
}
