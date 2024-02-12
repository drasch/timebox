let setTime=0;
let c;
let w;
let startTime=new Date();

let white=245;
function setup() {
  createCanvas(windowWidth, windowHeight);

  background(white);
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
  stroke(white);

}

function draw() {
  let time = setTime - (new Date() - startTime)/(1000.0*60);
  let arcLength = (60-time)/60.0 * 2* PI - HALF_PI;

  stroke(white);
  fill(white);
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

  if (time <0 ){
    noLoop();
  }
}

function mousePressed() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvasSetup();
}

function keyPressed({code}) {
  console.log({code});
  if (keyCode === 's') {
    // start/pause?
  }
  else if (code === 'KeyR') {
    startTime = new Date();
    setTime = 0;
  }
  else if (code === 'Digit1') {
    setTime += 1;
  }
  else if (code === 'Digit5') {
    setTime += 5;
  }
  else if (code === 'Digit9') {
    setTime += 10;
  }
  else if (code === 'Digit0') {
    setTime += 60;
  }
  setTime = min(60, setTime);
  loop();
}
