function setup() {
    // Create the canvas
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw(){
    background(52, 168, 235);
    
    fill("green")
    ellipse(windowWidth/2.2,windowHeight/1.2, 100, 20);
    ellipse(windowWidth/1.835,windowHeight/1.2, 100, 20);
  
    line(windowWidth/2, windowHeight/2, windowWidth/2, windowHeight);
    circle(windowWidth/2, windowHeight/2, 100);

    translate(windowWidth/2, windowHeight/2);
    
    strokeWeight(6);
    stroke("white");
    fill("pink");
    //translate (300,200);
  
    for (let i = 0; i < 10; i ++) {
      ellipse(mouseX/5,mouseY/20, 200, 100);
      rotate(PI/4);
    }

  
  }
  