
//p5 Specific Code
function setup(){
    //Canvas Size
    //Remember origin is top-left
    //displayWidth and displayHeight sets the Canvas width and height to the window width and height
    createCanvas(displayWidth,displayHeight);

    background(20,20,20);

    //Sets the Fill Color of All Elements
    fill(20,200,100);

    //Creates a Rectangle
    //rect(x,y,x extension, y extension)
    rect(200,40,40,400);

}

function draw(){
    //Automajically draws a circle of radius 10 at the mouse coordinates
    //Dynamic!
 circle(mouseX,mouseY,10);
}