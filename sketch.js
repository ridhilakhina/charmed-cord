let tick;

function setup() {
  createCanvas(720, 480);
}

function draw() {
  background('blue');
  tick = second(); 
  
  //seconds
  strokeWeight(10);
  stroke('turquoise');
  
  let mX = map(tick, 0, 59, 0, width);
  let mY = map(tick, 0, 59, 0, height);
  circle(mX, mY, tick);
  
  noFill();
  translate(width/2, height/2);
  rotate(-190);
  translate(width/-2, height/-2);
  let m = map(tick, 0, 59, 0, 360);
  arc(width/2, width/2, 300, 300, 0, m);
}