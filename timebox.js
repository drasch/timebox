let time=60;
let c;
let w;

function setup() {
  createCanvas(windowWidth, windowHeight);
  

  background(300);
  frameRate(30);

  canvasSetup();
}

function canvasSetup() {
  w = min(windowWidth,windowHeight) * 0.8;
  stroke('red');
  fill('red');
  textSize(24);
  textAlign(CENTER, CENTER);
  strokeWeight(2);
  text('15', windowWidth/2.0 - w/2.0 - 20, windowHeight/2.0);
  text('30', windowWidth/2.0, windowHeight/2.0 + w/2.0 + 20);
  text('45', windowWidth/2.0 + w/2.0 + 20, windowHeight/2.0);
  text('60', windowWidth/2.0, windowHeight/2.0 - w/2.0 - 20);
  stroke('white');

}

function draw() {
  let arcLength = (60-time)/60.0 * 2* PI - HALF_PI;
  
  stroke('white');
  fill('white');
  strokeWeight(1.0);
  arc(windowWidth/2.0,windowHeight/2.0,w,w, 0, 2*PI, PIE);

  fill('red');
  strokeWeight(0);
  arc(windowWidth/2.0,windowHeight/2.0,w,w, min(arcLength, 3*HALF_PI-0.01), 3 * HALF_PI, PIE);
  
  stroke('black');
  strokeWeight(1);
  for (let i = 0; i < 12; i++) {
    let r = w/2.0;
    let cx = windowWidth/2.0;
    let cy = windowHeight/2.0;
    let rads = 2*PI*i/12.0 - HALF_PI;
    line(cx + 0.8*r*cos(rads), cy + 0.8*r*sin(rads), cx + 0.9*r*cos(rads), cy + 0.9*r*sin(rads));
  }

  time -= 0.01;
  if (time <0 ){
    noLoop();
  }
}

function mousePressed() {
  time=60;
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvasSetup(); 
}
