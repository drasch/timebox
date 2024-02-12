function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(5);

  font = loadFont('ttf/Monocraft.otf');
  textFont(font);
  canvasSetup();
}

function canvasSetup() {
  w = min(windowWidth * 0.2 ,windowHeight * 0.4);
  textSize(w);
}

function draw() {
  let time = String(hour()).padStart(2,'0') + ":" + String(minute()).padStart(2,'0')
  background(20);

  stroke('red');
  fill('red');
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
