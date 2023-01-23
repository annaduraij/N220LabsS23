//Exercise 1.2: Circle Color
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
    circleR = 40;

}


//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){
    //Clear the Canvas of the Previous Circle
    clear();

    //Set Circle Center's X & Y coordinates to the mouseX and mouseY coordinates
    circleX = mouseX;
    circleY = mouseY;

    //Check if Circle Center's Horizontal Position has Exceeded the Center of the Canvas
    if(circleX >= (canvasW/2)){
        //If so, the mouse is on the left side of the canvas and the circle color should be set to red
        fill(255,0,0);
    } else {
        //If not, the mouse must be on the right side of the canvas and the circle color should be set to blue
        fill(0,0,255);
    }

    //Draw the Circle
    circle(circleX,circleY,circleR);

}