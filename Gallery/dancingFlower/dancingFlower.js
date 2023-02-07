let song;
let playing = false;

function setup() {
  song = loadSound('/MP2/sunshine.mp3');
  createCanvas(windowWidth, windowHeight);
  
}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    playing = false;
  } else {
    song.play();
    playing = true;
  }
}

function draw(){
  //clear();
  background(52, 168, 235);
  
  fill("green")
  ellipse(windowWidth/2.2,windowHeight/1.2, 100, 20);
  ellipse(windowWidth/1.835,windowHeight/1.2, 100, 20);
  
  line(windowWidth/2, windowHeight/2, windowWidth/2,     windowHeight);


  fill("pink");
  
  const dim = Math.min(windowWidth, windowHeight);
  
  strokeJoin(ROUND);
  strokeWeight(dim * 0.01);
  stroke(255);
  
  const time = millis() / 500;
  const duration = 7;
  const playhead = time / duration % 1;

  const rotation = playhead * PI * 2;
  
  const x = windowWidth/2;
  const y = windowHeight/2;
  
  const size = dim * 0.5;
  
  push();

  translate(x, y);
  if (playing) {
  rotate(rotation);
  }
  translate([CENTER]);

  for (let i = 0; i < 10; i ++) {
    ellipse(0, 80, size/5, size/3.5);
    rotate(PI/3);
  }
  
  pop();


  circle(windowWidth/2, windowHeight/2, 60);
  

}
