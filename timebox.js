let c;
let w;
let endTime = new Date();
let alarming = false;
let red = true;
let bg = 20;
let endColor = '#881111';
let endColor2 = '#ffffff';
let timerColor = '#881111';
let textsize = 0;
let e = 5;
let e2 = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(30);

  canvasSetup();
}

function canvasSetup() {
  background(bg);
  w = min(windowWidth, windowHeight) * 0.8;
  stroke(timerColor);
  fill(timerColor);
  textSize(70);
  textAlign(CENTER, CENTER);
  strokeWeight(2);
  text('15', windowWidth / 2.0 - w / 2.0 - 40, windowHeight / 2.0);
  text('30', windowWidth / 2.0, windowHeight / 2.0 + w / 2.0 + 40);
  text('45', windowWidth / 2.0 + w / 2.0 + 40, windowHeight / 2.0);
  text('60', windowWidth / 2.0, windowHeight / 2.0 - w / 2.0 - 40);
  stroke(bg);
  noCursor();
}

function draw() {
  canvasSetup();
  let time = (endTime - new Date()) / (1000.0 * 60);
  let arcLength = (60 - time) / 60.0 * 2 * PI - HALF_PI;

  stroke(bg);
  fill(bg);
  strokeWeight(1.0);
  arc(windowWidth / 2.0, windowHeight / 2.0, w, w, 0, 2 * PI, PIE);

  fill(timerColor);
  strokeWeight(0);
  arc(windowWidth / 2.0, windowHeight / 2.0, w, w, min(arcLength, 3 * HALF_PI - 0.01), 3 * HALF_PI, PIE);

  stroke(222);
  for (let i = 0; i < 12; i++) {
    let startRad = i % 3 == 0 ? 0.75 : 0.8;
    if (i % 3 == 0) {
      strokeWeight(4);
    } else {
      strokeWeight(1);
    }
    let r = w / 2.0;
    let cx = windowWidth / 2.0;
    let cy = windowHeight / 2.0;
    let rads = 2 * PI * i / 12.0 - HALF_PI;
    line(cx + startRad * r * cos(rads), cy + startRad * r * sin(rads), cx + 0.9 * r * cos(rads), cy + 0.9 * r * sin(rads));
  }
  if (time < 0) {
    alarming = true;
    endOfTimer(time);
    frameRate(1);
  }
  if (0 < time && time < 0.5) {
    almostDone(time)
  }

  if (time < -1) {
    noLoop();
  }
}
function endOfTimer(time) {
  textSize(70);
  if (red) {
    fill(endColor);
    stroke(endColor);
    red = false;
  } else {
    fill(endColor2);
    stroke(endColor2);
    red = true;
  }
  text("Time's UP!", windowWidth / 2.0, windowHeight / 2.0);
}


function mousePressed() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvasSetup();
}

function addTime(mins) {
  frameRate(30);
  if (endTime < new Date()) {
    endTime = new Date();
  }
  endTime = new Date(endTime.getTime() + 1000.0 * 60 * mins);
  endTime = min(new Date((new Date).getTime() + 1000.0 * 60 * 60), endTime)
}

function keyPressed({ code }) {
  if (code === 'KeyR') {
    endTime = new Date();
    alarming = true;
    noLoop();
    return;
  }
  else if (code === 'Digit1') {
    addTime(1);
  }
  else if (code === 'Digit5') {
    addTime(5);
  }
  else if (code === 'Digit8') {
    addTime(10);
  }
  else if (code === 'Digit9') {
    addTime(25);
  }
  else if (code === 'Digit0') {
    addTime(30);
  }
  else if (code === 'Digit2') {
    addTime(0.1);
  }
  loop();
}
function almostDone(time) {
  if (0.25 < time && time < 0.5) {
    if (textsize > 200) {
      e2 = -5
    }
    if (textsize < 40) {
      e2 = 5
    }
    textSize(70 + textsize);
    stroke(endColor)
    text("30", windowWidth / 2.0, windowHeight / 2.0);
    textsize += e2;
  }
  if (0 < time && time < 0.25) {
    if (textsize > 200) {
      e = -5
    }
    if (textsize < 40) {
      e = 5
    }
    textSize(70 + textsize);
    stroke(endColor)
    text("15", windowWidth / 2.0, windowHeight / 2.0);
    textsize += e;
  }

}
