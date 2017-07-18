function setup(){
     createCanvas(500,400);
    background(225);
}

var xPos = 0
var yPos = 0
var x = 3;
var y = 2;


function draw() {
    background(225);
    if(xPos < 0 || xPos > 500) x = -x;
    if(yPos < 0 || yPos > 400) y = -y;
    xPos += x;
    yPos += y;
    ellipse(xPos,yPos, 1000);
    fill(0,64);
}