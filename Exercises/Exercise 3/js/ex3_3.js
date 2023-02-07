//Exercise 3.3: Bouncing Ball | World Wrap Reflector
//------------------------------------------------------------
//             Pre-Setup: Variable Declarations
//------------------------------------------------------------
//Canvas Object
let canvas;

//Number of Bouncing Circles
const circles = 100;

//Circle Object, Child of Circle Class
let circleObj;

//Fade Object, Child of ColorFade Class
let colorFade;


//------------------------------------------------------------
//     P5 Setup: Variable and Parameter Initializations
//------------------------------------------------------------

function setup(){
    //Fixed Integer Value to Circle Radius in px
    let circleR = windowHeight/32;

    // GODLIKE way to create objects in a loop
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    // https://www.codecademy.com/forum_questions/51068e93f73ad4947a005629

    //Loop to DYNAMICALLY GENERATE CIRCLE OBJECTS ON RUN TIME
    for (let i = 1; i <= circles; i++) {

        //Define Title of the Objects: 'circleObj#'
        let circleObject = "circleObj"+i.toString();

        //All Variables and Objects are technically speaking a part of the Window Object, and you can refer to it as window.object or window["Object"]
        window[circleObject] =
            //Build a Circle Object from the Circle Class
            circleObj = new Circle(
                //Begin it at a Random Point on the Window
                random(0,windowWidth),random(0,windowHeight),
                //Define its Radius as the predefined Circle Radius
                circleR,
                //Default Color is to Set the Circle Color to almost-solid black
            );

        

        //Apply a Velocity to the Circle in the Form of a Vector Object
        //Scale the Velocity to Window Size
        //Set the Initial Velocity to a Random Direction
        window[circleObject].velocity = new Vector(random(windowHeight/400,windowHeight/80),random(0,360));

        //Define Title of the ColorFade Objects: 'circleColorFade#'
        let circleColor = "circleColorFade"+i.toString();

        //Dynamically Create Color Fade Objects
        window[circleColor] = new ColorFade();

        //Log Creation of Objects
        console.log(window[circleObject],window[circleColor]);

    }//End of Dynamic Circle Object and Corresponding Color Fade Generation

    //Individual Circle Code
    //Build a Circle Object from the Circle Class
    circleObj = new Circle(
        //Begin it at a Random Point on the Window
        random(0,windowWidth),random(0,windowHeight),
        //Define its Radius as the predefined Circle Radius
        circleR*2,
        //Default Color is to Set the Circle Color to almost-solid black
    );


    //Apply a Velocity to the Circle in the Form of a Vector Object
        //Scale the Velocity to Window Size
        //Set the Initial Velocity to a somewhat Random Direction
    circleObj.velocity = new Vector(windowHeight/60,random(120,150));

    //Log the Circle Object
    console.log("Circle Object",circleObj);

    //Create colorFade Object, child of ColorFade Class
    colorFade = new ColorFade();


    //Define Canvas Object Literal
    canvas = {
        //Canvas Dimensions set to Occupy the full Display Window
        w: windowWidth,
        h: windowHeight,

        //Remember Bounds mathematically interact with the circle center and not the circle edge but interactions visually are from the circle edge so all bounds are the bounds +/- the circle radius value

        //Assign North bound 'nb' to 0 + circle.r
        nb: 0 + (circleR/2),
        //Assign East bound 'eb' to canvasW - circle.r
        eb: windowWidth - circleR,
        //Assign South bound 'sb' to canvasH - circle.r
        sb: windowHeight - circleR,
        //Assign West bound 'wb' to 0 + circle.r
        wb: 0 + circleR
    }

    //Log the Bounds of the Canvas
    console.log("Bound North: ",canvas.nb);
    console.log("Bound East: ",canvas.eb);
    console.log("Bound South: ",canvas.sb);
    console.log("Bound West: ",canvas.wb);

    //Create Actual Canvas using dimensions from the Canvas Object Literal
    createCanvas(canvas.w,canvas.h);

    //Increase Drawing Animation Frame Rate for High Refresh-Rate devices
    frameRate(120);

}


//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){

    //Fade the Background per Frame to gently erase the previous drawing
    //Fade Rate = %fade per second / FPS
    background('rgba(250,250,250,0.004)');

    //Remove Stroke
    strokeWeight(0);

    //Loop to engage p5 draw calls on Dynamically-Generated Circle Objects
    for (let i = 1; i <= circles; i++) {

        //Define Title of the Objects: 'circleObj#'
        let circleObject = "circleObj"+i.toString();
        //Define Title of the ColorFade Objects: 'circleColorFade#'
        let circleColor = "circleColorFade"+i.toString();

        //Fade the Circle Color
        window[circleObject].color = window[circleColor].randomFade();

        //Execute a control structure to check if X coordinate of circle center, circle.x, has reached or exceeded either of the horizontal edges, AKA the canvas East and West bounds 'canvas.eb' and 'canvas.wb'
        if((window[circleObject].x >= canvas.eb) || (window[circleObject].x <= canvas.wb)){
            //If so, negate/reverse the existing horizontal or i velocity using the vector class set method, setI
            window[circleObject].velocity.setI(window[circleObject].velocity.i * -1);
            console.log("Horizontal Collision");
        }//End Control Structure

        //Execute a control structure to check if Y coordinate of circle center, window[circleObject].y, has reached or exceeded either of the horizontal edges, AKA the canvas North and South bounds 'canvas.nb' and 'canvas.sb'
        if((window[circleObject].y >= canvas.sb) || (window[circleObject].y <= canvas.nb)){
            //If so, negate/reverse the existing vertical or j velocity using the vector class set method, setJ
            window[circleObject].velocity.setJ(window[circleObject].velocity.j * -1);
            console.log("Vertical Collision");
        }//End Control Structure

        //Move the Circle Object according to its Velocity Vector Object using the Circle Class's Move Method
        window[circleObject].move();

        //Draw a Circle using the Circle Class's Draw Method
        window[circleObject].draw();

    }//End of Dynamic Circle Object and Corresponding Color Fade Generation

    //Individual Circle Code:

    //Fade the Circle Color

    //Execute a control structure to check if X coordinate of circle center, circle.x, has reached or exceeded either of the horizontal edges, AKA the canvas East and West bounds 'canvas.eb' and 'canvas.wb'
    if((circleObj.x >= canvas.eb) || (circleObj.x <= canvas.wb)){
        //If so, negate/reverse the existing horizontal or i velocity using the vector class set method, setI
        circleObj.velocity.setI(circleObj.velocity.i * -1);
        console.log("Horizontal Collision");
    }//End Control Structure

    //Execute a control structure to check if Y coordinate of circle center, circleObj.y, has reached or exceeded either of the horizontal edges, AKA the canvas North and South bounds 'canvas.nb' and 'canvas.sb'
    if((circleObj.y >= canvas.sb) || (circleObj.y <= canvas.nb)){
        //If so, negate/reverse the existing vertical or j velocity using the vector class set method, setJ
        circleObj.velocity.setJ(circleObj.velocity.j * -1);
        console.log("Vertical Collision");
    }//End Control Structure

    //Move the Circle Object according to its Velocity Vector Object using the Circle Class's Move Method
    circleObj.move();

    //Draw a Circle using the Circle Class's Draw Method
    circleObj.draw();

}//End of Draw Loop

//------------------------------------------------------------
//                     P5 User Functions
//------------------------------------------------------------

class Vector {
    //Default Constructor to Accept a Vector's Magnitude and Angle
    constructor(mag, angle) {

        //Vector Object Attributes
        //---------------------------------------------
        //Convert Angle in Degrees to Angle in Radians
        //Recall the Conversion 360 Degrees = 2pi Radians
        //Use the Math.PI constant to approximate Pi
        this.theta = angle * ((2 * Math.PI) / 360);

        //Convert Angle to X & Y component vectors with Sine and Cosine functions
        //X/i Component of a Vector = mag * cos(theta)
        this.i = Math.cos(this.theta) * mag;
        //Y/j Component of a Vector = mag * sin(theta)
        this.j = Math.sin(this.theta) * mag;

        //Store Constructor Argument directly as Vector Magnitude and Angle
        this.mag = mag;
        //Angle in Degrees
        this.angle = angle;

        //Functions to Rebuild Properties
        //---------------------------------------------
        //As there are Redundant Attributes that Contain the Same Values but in Different Units, these rebuild functions are required in the Setters to Update the Alternate but Equivalent Values

        //Rebuilding Angles Requires Component Vectors
        this.rebuildVector = function () {
            //Rebuild the Angle in Radians
            this.theta = Math.atan(this.j / this.i);
            //Rebuild the Angle in Degrees
            this.angle = this.theta * (360/(2 * Math.PI));
            //Rebuild the Vector's Overall Magnitude
            this.mag = Math.sqrt(Math.pow(this.i, 2) + Math.pow(this.j, 2));
        }

        //Rebuilding Component Vectors requires Magnitude and Angle
        this.rebuildComponents= function () {
            //Reuse Formula to Compute x/i and y/j component vectors
            this.i = Math.cos(this.theta) * this.mag;
            this.j = Math.sin(this.theta) * this.mag;
        }

        //Setters for Vector Object Values
        //---------------------------------------------
        //Requires Setters to Update other Vector Values

        //Method to Change Horizontal Unit Vector
        this.setI = function (i) {
            //Set the Attribute of the Vector Object to the Argument
            this.i = i;

            //Update the Alternate Representation of the Equivalent Values within the Object
            //Rebuild the Angle & Overall Magnitude
            this.rebuildVector();
        }

        //Method to Change Vertical Unit Vector
        this.setJ = function (j) {
            //Set the Attribute of the Vector Object to the Argument
            this.j = j;

            //Update the Alternate Representation of the Equivalent Values within the Object
            //Rebuild the Angle & Overall Magnitude
            this.rebuildVector();
        }

        //Method to Change Vector's Angle in Degrees
        this.setAngle = function (angle) {
            //Set the Attribute of the Vector Object to the Argument
            this.angle = angle;
            //Set the Directly Associated Attribute of the Argument
            this.theta = this.angle * ((2 * Math.PI) / 360);

            //Update the Alternate Representation of the Equivalent Values within the Object
            //Rebuild the Component Vectors to Match New Angle
            this.rebuildComponents();
        }

        //Method to Change Vector's Angle in Radians
        this.setTheta = function (theta) {
            //Set the Attribute of the Vector Object to the Argument
            this.theta = theta;
            //Set the Directly Associated Attribute of the Argument
            this.angle = this.theta * (360/(2 * Math.PI));

            //Update the Alternate Representation of the Equivalent Values within the Object
            //Rebuild the Component Vectors to Match New Angle
            this.rebuildComponents();
        }

        //Method to Change Vector's Overall Magnitude
        this.setMag = function (mag) {
            //Set the Attribute of the Vector Object to the Argument
            this.mag = mag;

            //Update the Alternate Representation of the Equivalent Values within the Object
            //Rebuild the Component Vectors to Match New Magnitude
            this.rebuildComponents();
        }

    }//End of Primary Vector Object Constructor

    //Static Method to build Vector Object from Component Vectors instead
    //Static Methods allow the method to be called from the constructor and thus be used without an instantiated object from the class
    static fromComponents(i, j) {
        //Computes the Magnitude of the Component Vector
            //Uses the formula Mag = sqrt( i^2 + j^2 + k^2 )
        let mag = Math.sqrt(
            Math.pow(i, 2)
            +
            Math.pow(j, 2)
        );

        //Computes the Angle of the Vector Object
            //Uses the formula Theta = inverse tangent (j/i)
            //Uses the conversion from Radians to Degrees of radians*360/2pi
        let angle = ((360 / (2 * Math.PI)) * Math.atan(j / i));

        //Create a Vector Object
        return new Vector(mag, angle);

    }//End of Static Method which is an Alternate Constructor

}//End of Vector Class

//Circle Class Constructor
function Circle (initialPosX, initialPosY, circleRadius, circleColor = [0,0,0,200]){

    //Represent the Circle Initial Position
    this.x = initialPosX;
    this.y = initialPosY;

    //Represent the Circle Velocity as a vector object that contains component vectors, vector magnitude, vector angle in degrees and radians
    //Declared but needs a vector Object to be passed to it
    this.velocity = {i: 0, j:0};

    //Represent the Circle Dimension with Radius
    this.radius = circleRadius;

    //Represent the Circle Color as a p5.js color object using the array of RGBA values from the input
    this.color = color(circleColor[0], circleColor[1], circleColor[2], circleColor[3]);

    //Method to apply Velocity Vector to the Circle Position
    this.move = function () {
        //Apply component X & Y velocity vectors to Circle Position
        this.x += this.velocity.i;
        //Remember Y axis is inverted for programming
        this.y -= this.velocity.j;
    }//End of Circle's Move Method


    //Method to draw the Circle
    this.draw = function () {

        //Create a new drawing instance
            push();

       //Set Fill Color of the Circle
            fill(this.color);

       //Draw the actual Circle at the Circle Coordinates with its given radius
            //Note Circle Function actually uses Circle Diameter
            circle(this.x,this.y, 2*this.radius);

       //Break the current drawing instance and return to the original drawing instance
            pop();
    }//End of Circle Draw Method

}//End of Circle Class


//Class 'ColorFade' Constructor
//Builds Children Objects that can take Three p5 Color Objects and then Fade Colors
//Built as an object to have self-contained Information
function ColorFade (colorInitial = color(0,0,0),colorIntermediate = color(0,0,0),colorFinal = color(0,0,0), colorFadeSpeed = 1/(random(50,400)) ) {

    //Initialize Object Attributes with Arguments
        //Note: These Attributes link to p5 Color Objects, So they will always reference the original Color Objects
    //Initial Color at Start of Transformation
    this.c0 = colorInitial;
    //End Color at End of Transformation
    this.c1 = colorFinal;

    //Point the Fade Color Attribute to the Fade Color Variable
    this.fadeColor = colorIntermediate;

    //Attributes that determine fade Speed and State
    //Counter Variable that Determines Fade State Progression, note, it's a decimal
    this.fadeState = 0.99;
    //Determines Fade Speed/Step Rate of Fade State Progression
    this.fadeStep = colorFadeSpeed;



    //Internalized Function that returns a parsed [r,g,b,a] array from a p5.js color
    //Argument must be a p5.js rgb color fed in the form of 'color(r,g,b,a)'
    this.parseColor = function(colorObj){
        //Convert the Color Object into a String
        let colorStr = colorObj.toString();

        //Trim the 'rgba(' portion by splitting on '(' and grabbing the string after it
        colorStr = colorStr.split("(")
        colorStr = colorStr[1];

        //Trim the ')' portion at the end by splitting on ')' and grabbing the string before it
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

    }// End of parseColor Method


    //Signature Method to fade the color Randomly
    this.randomFade = function() {

        /*
        //Log the Colors
        console.log("Initial Color: ",this.c0);
        console.log("Intermediate Color: ",this.fadeColor);
        console.log("Final Color: ",this.c1);
        */

        //Check if the Intermediate Color AKA Fade Color has Matched the Final Color
        /* Legacy: if(parseColor(this.fadeColor) === parseColor(this.c1)) */

        //Check if the fadeState exceeds 1, which would indicate the Fade Color is Beyond the Final Color
        if(this.fadeState > 1){
            //Set Initial Color to the Final Color
            //Parse it such that the Object isn't Referenced but rather cloned
            this.c0 = this.parseColor(this.c1);
            //Re-instantiate as a p5 Color Object
            this.c0 = color(
                this.c0[0],
                this.c0[1],
                this.c0[2],
                this.c0[3]
            );

            //Assign New Random Color to the Final color
            this.c1 = color(
                random(0,255),
                random(0,255),
                random(0,255),
            );

            //Reset Fade State Progression to 0 out of 1
            this.fadeState = 0;

        }//End of If Statement to Reset Color on Interpolation Completion

        //Interpolate Color and Assign it to the Fade Color
        //Uses p5.js lerpColor method which takes an initial color, final color, and a decimal interpolation amount
        this.fadeColor = lerpColor(this.c0,this.c1,this.fadeState);
        //Increment fadeState
        this.fadeState += this.fadeStep;

        //Return Fade Color
        return this.fadeColor;

    }//End of randomFade;

}








