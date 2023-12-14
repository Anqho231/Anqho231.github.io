function setup() {
  createCanvas(600, 500);
  noStroke();
  rectMode(RADIUS);
  noLoop();
}

function draw() {
  background(100, 90, 100);
  //hair back
  fill(0, 0, 0)
  rect(300, 180, 165, 300, 100)
  //shoulders
  fill(55, 55, 60);
  rect(width / 2, height, width / 3, 0.15 * height, 200);
  //side hair layers
  fill(0, 0, 0)
  rect(300, 190, 180, 200, 1)
//neck
  fill(255, 190, 180);
  rect(width / 2, 0.75 * height, 6 / 60 * width, height / 5, 100);
  //head
  ellipse(width / 2, height / 2, 0.54 * width, 3 / 5 * height);
  //hair front
  fill(0, 0, 0);
   arc(0.59 * width, height / 5, width / 1.69, 0.35 * height, QUARTER_PI, PI);
  //hair front
  fill(0, 0, 0);
   arc(0.29 * width, height / 5, width / 6, 0.40 * height, QUARTER_PI, PI);
  //hair front
  fill(0, 0, 0);
   arc(0.721 * width, height / 5, width / 6, 0.4 * height, QUARTER_PI, PI);
  //mouth
  fill(5);
  arc(width / 2, 0.55 * height, 0.30 * width, 2 / 8 * height, 0, PI, CHORD);
  //teeth
  fill(250);
  rect(width / 2, 0.60 * height, 0.1 * width, 0.03 * height, 0, 0, 25, 25);
  fill(200);
  rect(width / 2, 0.56 * height, 0.1 * width, 0.006 * height);
 //nose
  fill (0, 0, 0)
  arc(300, 240, 10, 30, 270, 90)
  //eyelashes
  fill(60);
  arc(1.1 * width / 3, 0.43 * height, 0.10 * width, 0.12 * height, PI, TWO_PI, CHORD);
  arc(0.633 * width, 0.43 * height, 0.10 * width, 0.12 * height, PI, TWO_PI, CHORD);
  //eye whites
  fill(250);
  arc(0.375 * width, 0.43 * height, 0.083 * width, 0.1 * height, PI, TWO_PI, CHORD);
  arc(0.625 * width, 0.43 * height, 0.083 * width, 0.1 * height, PI, TWO_PI, CHORD);
  //irises
  fill(130, 90, 0);
  ellipse(0.375 * width, 0.41 * height, 0.05 * width, 0.05 * height);
  ellipse(0.625 * width, 0.41 * height, 0.05 * width, 0.05 * height);
  //pupils
  fill(5)
  ellipse(0.375 * width, 0.41 * height, 0.033 * width, 0.04 * height);
  ellipse(0.625 * width, 0.41 * height, 0.033 * width, 0.04 * height);
 //tongue
  fill(100, 50, 50)
  ellipse(width / 2, 0.65 * height, 0.15 * width, 0.04 * height);

}
