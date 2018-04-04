// Quickhull implementation and visualization

let S = [];
const numberOfPoints = 25;
const margin = 40;

let convexHull = [];

function setup() {
  createCanvas(400, 400);
  background(51);

  for(let i = 0; i < numberOfPoints; i++) {
    const pnt = createVector(random(margin,width-margin), random(margin,height-margin));
    S.push(pnt);
  }
}

function draw() {
  // draw background
  background(51);

  // draw points
  push();
  strokeWeight(4);
  stroke(255);
  S.forEach(s => {
    point(s.x, s.y);
  });
  pop();

  // draw convex hull
  push();
  noFill();
  strokeWeight(2);
  stroke(0, 250, 0);
  beginShape();
  convexHull.forEach(s => {
    vertex(s.x, s.y);
  });
  endShape();
}