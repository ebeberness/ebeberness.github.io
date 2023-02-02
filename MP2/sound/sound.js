let song;

function setup() {
  song = loadSound('/sunshine.mp3');
  createCanvas(windowWidth, windowHeight);
  background("#ffc0db");
}
function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background("#ffc0db");
  } else {
    song.play();
    background("#ade6e6");
  }
}

function draw(){

  fill("orange");
  star(windowWidth/2, windowHeight/2, 80, 100, 10);

  fill("yellow");
  circle(windowWidth/2, windowHeight/2, 150);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
