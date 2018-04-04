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

function QuickHull(S) {
  // Find convex hull from the set S of n points

  // Find left and right most points, say A & B, and add A & B to convex hull

  let minX = width;
  let maxX = 0;
  let minXIndex = 0;
  let maxXIndex = 0;
  for(let i = 0; i < S.length; i++) {
    if(S[i].x < minX) {
      minX = S[i].x;
      minXIndex = i;
    }
    if(S[i].x > maxX) {
      maxX = S[i].x;
      maxXIndex = i;
    }
  }

  // A and B have been found by this procedure.
  const A = S[minXIndex];
  const B = S[maxXIndex];
  convexHull.push(A);
  convexHull.push(B);

  // Segment AB divides the remaining (n-2) points into 2 groups S1 and S2 
  // where S1 are points in S that are on the right side of the oriented line from A to B, 
  // and S2 are points in S that are on the right side of the oriented line from B to A
  let S1 = [];
  let S2 = [];
  partition(S, A, B, S1, S2);
  FindHull(S1, A, B);
  FindHull(S2, B, A);
}

function FindHull(Sk, P, Q) {
  return;
}

function partition(S, A, B, S1, S2) {
  const AB = createVector(B.x - A.x, B.y - A.y);
  const ABperp = createVector(- AB.y, AB.x);
  const limitValue = ABperp.x * A.x + ABperp.y * A.y;
  console.log('A, B, AB, ABp', A, B, AB, ABperp);
  for (let i = 0; i < S.length; i++) {
    if (S[i] != A && S[i] != B) {
      const scalarprod = S[i].x * ABperp.x + S[i].y * ABperp.y;
      if (scalarprod >= limitValue) {
        S1.push(S[i]);
      }
      else {
        S2.push(S[i]);
      }
    }
  }
}