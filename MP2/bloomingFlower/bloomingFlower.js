function setup() {
    // Create the canvas
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw(){
    background(52, 168, 235);
    circle(windowWidth/2, windowHeight/2, 60);
    
    translate(windowWidth/2, windowHeight/2);
    
    strokeWeight(4);
    stroke("white");
    fill("pink");
    //translate (300,200);
  
    for (let i = 0; i < 10; i ++) {
      ellipse(mouseX/5,mouseY/20, 100, 50);
      rotate(PI/4);
    }
  }
  