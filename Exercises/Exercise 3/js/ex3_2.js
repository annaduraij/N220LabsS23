//Exercise 2.2: Red Remover
//------------------------------------------------------------
//             Pre-Setup: Variable Declarations
//------------------------------------------------------------
//Canvas Width & Height
let canvasW,canvasH;

//Circle Vars for Circle Coordinates and a Radius
let circleX,circleY,circleR;

//Color Vars that will be respectively the input and output of the removeColorRed function that is the highlight of the exercise
//Will assigned with a 'color(r,g,b)' value in setup()
let colorIn,colorOut;


//------------------------------------------------------------
//     P5 Setup: Variable and Parameter Initializations
//------------------------------------------------------------

function setup(){
    //Set Canvas Dimensions to Window Dimensions
    canvasW = windowWidth;
    canvasH = windowHeight;

    //Create Canvas
    createCanvas(canvasW,canvasH);

    //Set a nominal radius value that somewhat scales off of the user's window size
    circleR = 1/8 * canvasH;

    //Set FrameRate to 5 as 60 strobes the color
    frameRate(4);

}

//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){
    //Clear the Canvas of the Previous Circle
    clear();

    //Initialize colorIn with a random RGB value
    colorIn = color(random(0,255), random(0,255), random(0,255));

    //Log the value
    console.log("Color In:",colorIn);

    //Assign colorOut to the array output of 'removeColorRed(colorIn)
    colorOut = removeColorRed(colorIn);
    //Use p5.js inline to parse the array's color values as a color
    colorOut = color(colorOut[0],colorOut[1],colorOut[2])

    //Log the value
    console.log("Color Out:",colorOut);



    //Set Circle Center's X & Y coordinates to the mouseX and mouseY coordinates
    circleX = mouseX;
    circleY = mouseY;

    //Set the Color Fill
    fill(colorOut);
    //Draw an Outer Circle with the post-removed color
    circle(circleX,circleY,circleR);


    //Set the Color Fill
    fill(colorIn);
    //Draw an Inner Circle with pre-removed color
    circle(circleX,circleY,circleR/2);


}//End of Draw Loop

//------------------------------------------------------------
//                     P5 User Functions
//------------------------------------------------------------

//Function that removes the red color value from an input color
//Argument must be a p5.js rgb color fed in the form of 'color(r,g,b)'
function removeColorRed(color){
    //Convert the Color Object into a String
    let colorStr = color.toString();

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

    //Set red component to zero
    r = 0;

    //Return the Color Values
    return [r, g, b];

}// End of removeColorRed function