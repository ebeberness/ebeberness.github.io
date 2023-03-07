let t = 0;
let lines = [];
let isDrawing = false;
let startX, startY;
let slider;
let val;
let clearPressed = false;
let linesPressed = false;
let newCanvas;


function setup() {
  
  createCanvas(400, 400);
  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');
  
  saveButton = createButton('Save');
  saveButton.position(450, 10);
  saveButton.mousePressed(saveArt);
  
  clearButton = createButton('Clear');
  clearButton.position(500, 10);
  clearButton.mousePressed(erased); 
}

function draw() {
  clear();
  val = slider.value();
  background(val);
  drawLine();
  
  
  if(clearPressed == true){
    erased();
   }
  
  }
  
function drawLine() {
 noStroke();
  if (mouseIsPressed) {
    if (isDrawing) {
      lines.push({
        startX: mouseX,
        startY: mouseY,
        endX: pmouseX,
        endY: pmouseY,
      });
    }
    isDrawing = true;
      }

  if (isDrawing) {
    stroke(255);
    line(startX, startY, mouseX, mouseY);
  }
  
  for (const lin of lines) {
    line(lin.startX, lin.startY, lin.endX, lin.endY);
  }
}

function lineIsPressed(){
  linePressed = true;
}

function erased() {
      lines=[];
      clearPressed = false;
}

function saveArt() {
  saveCanvas(canvas, 'myCanvas', 'jpg');
}


