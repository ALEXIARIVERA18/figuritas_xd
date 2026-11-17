function setup() {
  createCanvas(700, 600, WEBGL);
  angleMode(DEGREES);
  normalMaterial();
}

function draw() {
  background(220);

  push();
  translate(-250, -100, 0);
  rotateWithFrameCount();
  plane(70);
  pop();

  push();
  translate(10, -100, 0);
  rotateWithFrameCount();
  cylinder(70, 70);
  pop();

  
  push();
  translate(275, -100, 0);
  rotateWithFrameCount();
  cone(50, 70);
  pop();

  
  push();
  translate(100, 100, 0);
  rotateWithFrameCount();
  torus(50, 20);
  pop();

  push();
  translate(100, 100, 0);
  rotateWithFrameCount();
  ellipsoid(20, 40, 40);
  pop();
}

function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}

