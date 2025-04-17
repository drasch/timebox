let timerColor = '#aa3333';
function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(5);

  font = loadFont('ttf/subway-ticker.regular.ttf');
  textFont(font);
  canvasSetup();
}

function canvasSetup() {
  w = min(windowWidth * 0.3 ,windowHeight * 0.4);
  textSize(w);

  noCursor();
}

function draw() {
  let time = String(hour()).padStart(2,'0') + ":" + String(minute()).padStart(2,'0')
  background(20);

  stroke(timerColor);
  fill(timerColor);
  textAlign(CENTER, CENTER);
  strokeWeight(1);
  text(time, windowWidth/2.0, windowHeight/2.0);
}

function mousePressed() {
  startTime=new Date();
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvasSetup();
}

function keyPressed({ key }) {
  if (key == 'f' || key == 'F') {
    fullscreen(!fullscreen());
  }
}
