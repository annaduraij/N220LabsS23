//Exercise 2.3: Circle Rebound
//------------------------------------------------------------
//             Pre-Setup: Variable Declarations
//------------------------------------------------------------
//Canvas Width & Height
let canvasW,canvasH;

//Circle Vars for Circle Coordinates and a Radius
let circleX,circleY,circleR;


//------------------------------------------------------------
//     P5 Setup: Variable and Parameter Initializations
//------------------------------------------------------------

function setup(){
    //Set Canvas Dimensions to Window Dimensions
    canvasW = windowWidth;
    canvasH = windowHeight;

    //Create Canvas
    createCanvas(canvasW,canvasH);

    //Fixed Integer Value to Circle Radius in px
    circleR = 10;

    //Increase Frame Rate to Maximum
    frameRate(120);

}


//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){

    //Fade the Background per Frame to gently erase the previous drawing
    //Fade Rate = %fade per second / FPS
    background('rgba(250,250,250,0.02)');

    //Build the Polar Vector and Assign it to circleX and circleY;
    circleX = polarPoint(circleR).x;
    circleY = polarPoint(circleR).y;

    //Not Implemented as it's not called for in the exercise
    //Converts Rectilinear Coordinates to Polar Coordinates and then Plots the Points
        //Should be redundant if done correctly
        //circleX = polarConversion().x;
        //circleY = polarConversion().y;

    //Translate the Canvas to the center of the window
    translate(0.5*canvasW,0.5*canvasH);

    //Draw the Circle
    circle(circleX,circleY,circleR);

}//End of Draw Loop

//------------------------------------------------------------
//                     P5 User Functions
//------------------------------------------------------------

//Function that somewhat arbitrarily returns a polar vector based on mouse position
function polarPoint(radius){

    //Declare block variables x & y that store vectors to describe the polar point
    let x,y;

    //Note Radius in a polar conversion typically is the square root of the x and y vectors
    //radius = (Math.sqrt(mouseX*mouseX + mouseY*mouseY))/radius;

    //Invoke the Math library for the cosine and sine methods

    //Horizontal Polar Conversion, x = r*cos(theta)
        x = radius * Math.sin(mouseX);

    //Vertical Polar Converstion, x = r*sin(theta)
        y = radius * Math.cos(mouseX);

    //Return a vector <x,y> with:
        return createVector(x,y);

}// End of polarPoint function


//Function that does the rectilinear to polar conversion, defaults to converting the mouse coordinates
function polarConversion(x=mouseX,y=mouseY){
    //Invoke the Math library for the cosine and sine methods

    //Note, radius = sqrt(x^2 + y^2)
    let radius = Math.sqrt(x*x + y*y);
    //Note, theta = inverse tangent (y / x)
    let theta = Math.atan(y/x);

    //Horizontal Polar Conversion, x = r*cos(theta)
    //x = radius * Math.cos(mouseX);
    x = radius * Math.cos(theta);

    //Vertical Polar Converstion, x = r*sin(theta)
    //y = radius * Math.sin(mouseX);
    y = radius * Math.sin(theta);

    //Return a vector <x,y> with:
    return createVector(x,y);

}// End of polarPoint function