let setTime=0;
let c;
let w;
let startTime=new Date();

let bg=20;
function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(30);

  canvasSetup();
}

function canvasSetup() {
  background(bg);
  w = min(windowWidth,windowHeight) * 0.8;
  stroke('red');
  fill('red');
  textSize(70);
  textAlign(CENTER, CENTER);
  strokeWeight(2);
  text('15', windowWidth/2.0 - w/2.0 - 40, windowHeight/2.0);
  text('30', windowWidth/2.0, windowHeight/2.0 + w/2.0 + 40);
  text('45', windowWidth/2.0 + w/2.0 + 40, windowHeight/2.0);
  text('60', windowWidth/2.0, windowHeight/2.0 - w/2.0 - 40);
  stroke(bg);

}

function draw() {
  let time = setTime - (new Date() - startTime)/(1000.0*60);
  let arcLength = (60-time)/60.0 * 2* PI - HALF_PI;

  stroke(bg);
  fill(bg);
  strokeWeight(1.0);
  arc(windowWidth/2.0,windowHeight/2.0,w,w, 0, 2*PI, PIE);

  fill('red');
  strokeWeight(0);
  arc(windowWidth/2.0,windowHeight/2.0,w,w, min(arcLength, 3*HALF_PI-0.01), 3 * HALF_PI, PIE);

  stroke(222);
  for (let i = 0; i < 12; i++) {
    let startRad = i % 3 == 0 ? 0.75 : 0.8;
    if (i % 3 == 0 ) {
      strokeWeight(4);
    } else {
      strokeWeight(1);
    }
    let r = w/2.0;
    let cx = windowWidth/2.0;
    let cy = windowHeight/2.0;
    let rads = 2*PI*i/12.0 - HALF_PI;
    line(cx + startRad*r*cos(rads), cy + startRad*r*sin(rads), cx + 0.9*r*cos(rads), cy + 0.9*r*sin(rads));
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
  if (setTime === 0) {
    startTime = new Date();
  }

  if (code === 'KeyR') {
    setTime = 0;
    noLoop();
    return;
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
