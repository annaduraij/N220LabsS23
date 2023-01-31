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
let colorRandom,colorIn,colorOut;


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

    //Initialize colorIn
    colorIn = color(0,0,0);
    //Initialize colorRandom
    colorRandom = color(0,0,0);

    //Set FrameRate to 5 as 60 strobes the color
    frameRate(60);

}

//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){
    //Clear the Canvas of the Previous Circle
    clear();

    //Log the Color In value
    //console.log("Color In:",colorIn.toString());

    //Unassemble the Color Objects by Parsing Them
    colorIn = parseColor(colorIn)
    colorRandom = parseColor(colorRandom);

    /*Due to the Nature of the Color Interpolation Rounding being slightly off
        Must use a series of comparisons between the parsed color values of the ColorIn and ColorRandom
        As long as it's roughly the same, I chose a tolerance level of 2
        Assume the colorIn has reached the colorRandom and it's time to assign a new Random Color
     */
    const colorTolerance = 10;
    //Once ColorIn Matches the Random Color, reset the Random Color
    if(
        (Math.abs(colorIn[0] - colorRandom[0]) <= colorTolerance)
        &&
        (Math.abs(colorIn[1] - colorRandom[1]) <= colorTolerance)
        &&
        (Math.abs(colorIn[2] - colorRandom[2]) <= colorTolerance)
    ){
        colorRandom = parseColor(color(random(0,255), random(0,255), random(0,255)));
        //Log the New Random Color Value
        console.log("Random Color:",colorRandom.toString());
    }

    //Reassemble the parsed Colors into p5 Color Objects
    colorIn = color(colorIn[0],colorIn[1],colorIn[2])
    colorRandom = color(colorRandom[0],colorRandom[1],colorRandom[2])

    //Slowly fade colorIn to colorRandom with increments of 5% using the lerpColor function
    let interpolatedColor = lerpColor(colorIn, colorRandom, 0.05);
    //Log the Interpolated Color
    //console.log("Interpolated Color:",interpolatedColor);

    //Parse and Pass the Interpolated Color to ColorIn
    interpolatedColor = parseColor(interpolatedColor);
    colorIn = color(interpolatedColor[0],interpolatedColor[1],interpolatedColor[2]);



    //Assign colorOut to the array output of 'removeColorRed(colorIn)
    colorOut = removeColorRed(parseColor(colorIn));
    //Use p5.js inline to parse the array's color values as a color
    colorOut = color(colorOut[0],colorOut[1],colorOut[2])

    //Log the Final Color Out value
    //console.log("Color Out:",colorOut.toString());



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

}// End of removeColorRed function

//Function that removes the red color value from an input color
//Argument must be a p5.js rgb color fed in the form of 'color(r,g,b)'
function removeColorRed(colorArray){

    //The array should correspond to [r,g,b,a]
    //Grab the values and store as r, g, b values
    let r = colorArray[0];
    let g = colorArray[1];
    let b = colorArray[2];
    let a = colorArray[3];

    //Set red component to zero
    r = 0;

    //Return the Color Values and Alpha Value
    return [r, g, b, a];

}// End of removeColorRed function