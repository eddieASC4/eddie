function setup(){
    createCanvas(1360, 720)
    background(51)
}

var playername = prompt("Please enter your name")
function draw(){
    textSize(22)
    textStyle(BOLD)
    strokeWeight(3);
    //Stats
    rect(100, 510 , 800,200);
    //Name
    rect(100, 465, 200, 40);
    //Player Pokemon
    ellipse(250, 300, 300);
    //Player stats
    rect(920, 510, 260, 200);
    //Enemy Pokemon
    ellipse(950, 200, 250);
    //Enemy name
    rect(1100, 70, 180, 40);
    //Enemy stats
    rect(1100, 120, 230, 200);
    text(playername,110,495)
    text("Cyrus", 1115, 100);
    text("HP:", 930, 540);
    text("ATK:", 930, 560);
    
}




