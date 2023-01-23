//Exercise 1.3: Circle Rebound
//------------------------------------------------------------
//             Pre-Setup: Variable Declarations
//------------------------------------------------------------
//Canvas Width & Height
let canvasW,canvasH;

//North|E|S|W Bounds of Canvas that take into account programming coordinates and that mathematical computations deal with circle center rather than the desired circle edge
let canvasNB,canvasEB,canvasSB,canvasWB;

//Circle Vars for Circle Coordinates and a Radius
let circleX,circleY,circleR;

//Magnitude of the East Velocity Vector applied to the Circle
let velocityEastX;


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

    //Assign Mathematical Bounds
    //Visual Bounds are at the edges of the screen but mathematical bounds are at circle center so mathematical bounds are assigned as the visual bounds with the offset distance from circle center to edge, the circle radius
    canvasNB = circleR;
    canvasEB = canvasW - circleR;
    canvasSB = canvasH - circleR;
    canvasWB = circleR;

    //Circle Coordinates
    //Start Circle Center's X coord at West Bound
    circleX = canvasEB;
    //Start Circle Center's Y coord at Middle of the Screen which is canvas Height divided by 2
    circleY = canvasH/2;

    //Assign Circle's Eastern Velocity to an Integer Value
    velocityEastX = 5;
}


//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){
    //Clear the Canvas of the Previous Circle
    clear();

    //Check if Circle's Horizontal Position has Exceeded the Eastern Bound
    if(circleX >= canvasEB){
        //If so, reset its horizontal position to the Western Bound
        circleX = canvasWB;
    }

    //Draw the Circle
    circle(circleX,circleY,circleR);

    //Translate the Circle East by Incrementing Circle Center's X coordinate by Eastern Velocity
    circleX += velocityEastX;
}