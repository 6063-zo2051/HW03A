let cDiam1 = 15;
let xOffset1 = 0;
let xSpacing1 = 50;

let yOffset1 = 0;
let ySpacing1 = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(234, 225, 12);

  for (let xPos1 = xOffset1; xPos1 <= width - xOffset1; xPos1 += xSpacing1) {
      for (let yPos1 = yOffset1; yPos1 <= height - yOffset1; yPos1 += ySpacing1) {
      fill(0, 0, 0); 
      circle(xPos1, yPos1, cDiam1);
    }
  }


let cDiam2 = 5;
let xOffset2 = 50;
let xSpacing2 = 50;

let yOffset2 = 50;
let ySpacing2 = 50;

  for (let xPos2 = xOffset2; xPos2 <= width - xOffset2; xPos2 += xSpacing2) {
    for (let yPos2 = yOffset2; yPos2 <= height - yOffset2; yPos2 += ySpacing2) {
    fill(0, 0, 0); 
    circle(xPos2, yPos2, cDiam2);
    }
  }
}
