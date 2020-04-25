var ball;
//var cnv;
var g;
var d, c;

function setup() {
  createCanvas(400, 400);
  //  mousePressed();
    background(100);

}

function draw() {
  colorMode(HSB, height, height);
  if (mouseIsPressed) {
    fill(mouseY, height, height);
    //noStroke();
    circle(mouseX, mouseY, pmouseX, pmouseY);



  }

  // drawSprite();
}

function mousePressed() {
  d = 40;


}