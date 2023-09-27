let cDiam1 = 15;
let xOffset1 = 0;
let xSpacing1 = 50;

let yOffset1 = 0;
let ySpacing1 = 50;

let cDiam2 = 10;
let xOffset2 = 0;
let xSpacing2 = 25;

let yOffset2 = 0;
let ySpacing2 = 25;

let cDiam3 = 15;
let xOffset3 = 25;
let xSpacing3 = 50;

let yOffset3 = 25;
let ySpacing3 = 50;

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

  for (let xPos2 = xOffset2; xPos2 <= width - xOffset2; xPos2 += xSpacing2) {
     for (let yPos2 = yOffset2; yPos2 <= height - yOffset2; yPos2 += ySpacing2) {
        fill(0, 0, 0); 
        circle(xPos2, yPos2, cDiam2);
     }
      }

  for (let xPos3 = xOffset3; xPos3 <= width - xOffset3; xPos3 += xSpacing3) {
      for (let yPos3 = yOffset3; yPos3 <= height - yOffset3; yPos3 += ySpacing3) {
          fill(0, 0, 0);   
          circle(xPos3, yPos3, cDiam3);
          }
         }

    }
