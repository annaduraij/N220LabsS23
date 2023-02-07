//Exercise 3.2: Rectangle Objects | Reverse Tennis
//------------------------------------------------------------
//             Pre-Setup: Variable Declarations
//------------------------------------------------------------
//Canvas Width & Height
let canvasW,canvasH;

//Rectangle Width and Height Vars
let rectangleWidth, rectangleHeight;

//Create placeholders for Rectangle Objects
let leftRectangle, rightRectangle;

//Create constant Velocity Vector Magnitude for the Rectangle Objects
let vectorMag = 0.001 * canvasH;


//------------------------------------------------------------
//     P5 Setup: Variable and Parameter Initializations
//------------------------------------------------------------

function setup(){
    //Set Canvas Dimensions to Window Dimensions
    canvasW = windowWidth;
    canvasH = windowHeight;

    //Create Canvas
    createCanvas(canvasW,canvasH);

    //Set FrameRate to maximum for fluid motion
    frameRate(120);

    //Set Rectangle Width and Heights nominally but scale them to Window Size
    rectangleWidth = canvasW/10;
    rectangleHeight = canvasH/5;

    //Specifically, move each rectangle roughly 0.1% of the CanvasH
    vectorMag = 0.001 * canvasH;

    //Build the Rectangle Objects
    //Create a Left Rectangle Object
    /* Position:
        Horizontal Center of the left half of the screen: 1/4 * canvasW
        Vertical Center of the screen: 1/2 * canvasH

        Horizontal Span: declared rectangle width variable
        Vertical Span: declared rectangle height variable

        Color: [0,200,100,1]
     */
    leftRectangle = new Rectangle(
        1/4*canvasW,
        1/2*canvasH,
        rectangleWidth,
        rectangleHeight,
        [0,200,100,255]
    );

    //Create a Right Rectangle Object
    /* Position:
        Horizontal Center of the right half of the screen: 3/4 * canvasW
        Vertical Center of the screen: 1/2 * canvasH

        Horizontal Span: declared rectangle width variable
        Vertical Span: declared rectangle height variable

        Color: [200,100,0,1]
     */
    rightRectangle = new Rectangle(
        3/4*canvasW,
        1/2*canvasH,
        rectangleWidth,
        rectangleHeight,
        [200,100,0,255]
    );

}

//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){
    //Clear the Canvas of the Previous Rectangles
    clear();

    //Control Structure to Check If 'W' or 'UP_ARROW' is pressed
    //Use Boolean: keyIsDown(UP_ARROW) || keyIsDown(W)
    if(keyIsDown(UP_ARROW)){
        //If Pressed, use the move method of the Rectangle class to apply a positional change vector to each rectangle object

        //Move the left rectangle up or 90 degrees
        leftRectangle.move(90,vectorMag);
        //Move the right rectangle down, or 270 degrees
        rightRectangle.move(270,vectorMag);
    }
    //Otherwise Reset the Rectangle Position
    else {
        //Only Engage the Counter-Movement if the Rectangle is not at the Original Y Position
        if(leftRectangle.y !== canvasH/2 ){
            //Move the rectangle in the opposite direction by inverting vector magnitude
            leftRectangle.move(90,-1*vectorMag);
        }

        //Only Engage the Counter-Movement if the Rectangle is not at the Original Y Position
        if(rightRectangle.y !== canvasH/2 ){
            //Move the rectangle in the opposite direction by inverting vector magnitude
            rightRectangle.move(270,-1*vectorMag);
        }
    }


    //Draw the Rectangles
    //Use individual rectangles' draw methods
    leftRectangle.draw();
    rightRectangle.draw();



}//End of Draw Loop

//------------------------------------------------------------
//                     P5 User Functions
//------------------------------------------------------------

//Function that returns a parsed [r,g,b,a] array from a p5.js color
//Argument must be a p5.js rgb color fed in the form of 'color(r,g,b)'
function parseColor(colorObj){
    //Convert the Color Object into a String
    let colorStr = colorObj.toString();

    //Trim the 'rgba(' portion by splitting on '(' and grabbing the string after it
    colorStr = colorStr.split("(")
    colorStr = colorStr[1];

    //Trim the ')' porition at the end by splitting on ')' and grabbing the string before it
    colorStr = colorStr.split(")");
    colorStr = colorStr[0];

    //Split the string, which should be now comma separated values
    colorStr = colorStr.split(",");
    //The array should now correspond to [r,g,b,a]
    //Grab the values and store as r, g, b values
    let r = colorStr[0];
    let g = colorStr[1];
    let b = colorStr[2];
    let a = colorStr[3];

    //Return the Color Values
    return [r, g, b, a];

}// End of parseColor function

//Rectangle Class Constructor
//Parameters for int: initialPosX, int: initialPosY, int: rectWidth, int: rectHeight, array: rectColor[r,g,b,a]
function Rectangle(initialPosX, initialPosY, rectWidth, rectHeight, rectRGBA){

    //Represent the Rectangle Initial Position
    this.x = initialPosX
    this.y = initialPosY

    //Represent the Rectangle Dimensions
    this.width = rectWidth;
    this.height = rectHeight;

    //Represent the Rectangle Color as a p5.js color object
    this.color = color(
        rectRGBA[0],
        rectRGBA[1],
        rectRGBA[2],
        rectRGBA[3]);

    //Method to apply Positional Change Vector to the Rectangle
    this.move = function (angle,magnitude) {
        //Convert Angle to X & Y component vectors with Sine and Cosine functions

            //Convert Angle to Radians
            let theta = angle * (2*Math.PI)/360;

            //Generate Component Vectors of the Vector
            let vector = {
                x: Math.cos(theta)*magnitude,
                //Remember Y axis is inverted for programming
                y: Math.sin(theta)*magnitude*-1
            }

            //Debug: Log Vector
            //console.log(vector);

        //Apply component X & Y vectors to Rectangle Position
            this.x += vector.x;
            this.y += vector.y;

    }//End of Rectangle Move Method


    //Method to draw the Rectangle
    this.draw = function (){

        //Create a new drawing instance
            push();

        //Set drawing x and drawing y coordinates to the center of the rectangle
            let x = this.width/2;
            let y = this.height/2;

       //Translate the drawing frame such that the origin shifts to the center of the rectangle.
            translate(-1*x,-1*y);

       //Set Fill Color of the Rectangle
            fill(this.color);

       //Draw the actual Rectangle at the Rectangle's coordinates [remember the origin is already shifted to accommodate the fact Rectangle are drawn from the top left corner rather than the center]
            rect(this.x,this.y, this.width, this.height);

       //Break the current drawing instance and return to the original drawing instance
            pop();
    }//End of Rectangle Draw Method
}
