function setup(){
     createCanvas(300,300);
    background(225);

   //bottom half
    stroke("black"); 
    strokeWeight(5); 
    fill("black");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);
    //top half
    fill("blue");
    arc(width/5, height/2, 200,200, PI, 0, CHORD);

    //center
    fill("white");
    ellipse(width/2, height/2, 90);

    fill("green");
    ellipse(width/2, height/2, 14);

}
