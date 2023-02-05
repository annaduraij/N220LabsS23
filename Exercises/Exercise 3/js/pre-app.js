//------------------------------
//   Ex2.1 - Drawing Drawer:
//------------------------------
/*
Object Drawer

Create a composition of some object - a car, a rocket, a set of keys.
Move that composition code into a new function ("drawKeys()", for instance).
Add two arguments to the function (x and y)
Use those arguments to control the position of each of the drawing calls in the function (things like rect() and circle())
Finally, either:
Place the function call in the draw() function, and have your composition follow mouseX and mouseY
Draw 3+ of your compositions in different spaces on the screen by writing your function call three or more times in either setup() or draw()
 */

//Pre-p5.js
    //Create canvasW and canvasH variables to eventually represent canvas Width and canvas height; user customizable but will be set to window width and window height
    //Declare a variable to store the Rocket Height Argument
    //Declare a constant integer to store the Star Grid's Density

//In p5.js setup()
    //Assign Window Width and Window Height respectively to Canvas Width and Canvas Height Variables
    //Assign a nominal value to the rocketHeight

    //Create the Canvas

    //Set the Framerate to 120 for fluid motion


//In p5.js draw()
    //Translate the frame such that the origin is set to mouseX and mouseY coordinates

    //Starry Sky Background
        //Set Background Color to translucent Midnight to wipe Canvas

        //Create a Star Grid
            //Outer For Loop that loops through columns
            //Column Count based on canvasW / Star Grid density integer

                //Inner For Loop that loops through rows
                //Row Count based on canvasH / Star Grid density integer

                    //Draw a circle with 'Jitter' at the current 'cell' AKA at the specific row/grid combination
                        //Jitter ahicieved with generating a random value between -0.5i and 0.5i where is respectively the current row/column value such that the star is randomly generated +/- half a column and half a row from the exact position

        //Build a New Rocket Object

        //Draw the Rocket Object using a .draw method

//Functions
    //Parse Color (yoinked from Ex2_2 Red Remover)
        //Takes a p5 Color Object

        //Convert p5 Color Object to a string

        //Convert p5 Color String to an Array
            //Arrives in the form of rgba(r,g,b,a)
            //Trim by ...( with Split method
            //Trim by )... with Split method
            //Split by ',' which will return an array with r | g | b | a

        //Return the Array of RGBA values

    //Rocket Class Constructor
        //Add required parameters of rocketHeight, rocketWidth, rocketPosX,rocketPosY, rocketClor

        //Properties
            //Height = rocketHeight
            //Width = rocketWidth

            //x = rocketPosX
            //y = rocketPosY

            //color = rocketColor

            //colorFuselage would require the regular color to be parsed, add the desire damount, and then re-encoded as a p5 color object

            //colorWindow = light blue

            //*Assuming Proportions are Copied Over from Ex2_1*
            //fuselageWidth = 3/5 * width
            //fuselageHeight = 7/10 * height
            //... Assume the aforementioned properties for all other parts are copied from Ex2_1.js, or look to final program

        //Methods
            //Draw Method
                //Translate by rocketPosX and rocketPosY parameters

                //Everything else is practically the same as Ex2.1 js except variables are replaced with attributes generally speaking:


//End JS

//------------------------------
//     Ex3.2 - Reverse Tennis
//------------------------------

/*
Create two objects with properties for the x, y, width, and height for a 'tall' rectangle. Set their 'x' properties so that when drawn, one will appear on the left side of the composition, and the other on the right side.

In the draw function,

draw both of the rectangles in the objects to the screen, based on their properties
if the up key is pressed, make the first object move up, and the second object move down
if the down key is pressed, make the first object move down, and the other object move up

 if (keyIsDown(UP_ARROW)) {
    //change properties
  }

 */

//Pre-p5.js
    //Create canvasW and canvasH variables to eventually represent canvas Width and canvas height; user customizable but will be set to window width and window height

    //Create constants to store rectangle width and height

//In p5.js setup()
    //Assign Window Width and Window Height respectively to Canvas Width and Canvas Height Variables

    //Create the Canvas

    //Set Frame Rate to 120 for fluid motion

    //Set constants for Rectangle Width and Height
        //Horizontal Span: 1/16 * canvasW
        //Vertical Span: 1/8 * canvasH


//In p5.js draw()
    // Remember: [Draw() is inherently a continual loop that executes its contents once per frame]

    //Clear the Canvas of the Previous Drawings

    //Create a pair of rectangle objects
        //Create a Left Rectangle Object
            /* Position:
                Horizontal Center of the left half of the screen: 1/4 * canvasW
                Vertical Center of the screen: 1/2 * canvasH

                Horizontal Span: declared rectangle width variable
                Vertical Span: declared rectangle height variable

                Color: [0,200,100,1]
             */
        //Create a Right Rectangle Object
            /* Position:
                Horizontal Center of the right half of the screen: 3/4 * canvasW
                Vertical Center of the screen: 1/2 * canvasH

                Horizontal Span: declared rectangle width variable
                Vertical Span: declared rectangle height variable

                Color: [200,100,0,1]
             */

    //Control Structure to Check If 'W' or 'UP_ARROW' is pressed
        //Use Boolean: keyIsDown(UP_ARROW) || keyIsDown(W)
            //If Pressed, use the move method of the Rectangle class to apply a positional change vector to each rectangle object
                //Specifically, move each rectangle roughly 1% of the CanvasH
                //Move the left rectangle up or 90 degrees
                //Move the right rectangle down, or 270 degrees

    //Draw the Rectangles
        //Use individual rectangles' draw methods



//Functions
    //Rectangle Class Constructor
        //Parameters for int: initialPosX, int: initialPosY, int: rectWidth, int: rectHeight, array: rectColor[r,g,b,a]

            //Represent the Rectangle Initial Position
                //this.x = initialPosX
                //this.y = initialPosY

            //Represent the Rectangle Dimensions
                //this.width = rectWidth;
                //this.height = rectHeight;

            //Represent the Rectangle Color as a p5.js color object
                //this.color = color(rectColor[0], rectColor[1], rectColor[2], rectColor[3])

            //Method to apply Positional Change Vector to the Rectangle
                /*this.move = function (int: angle in degrees, int: mag ) {
                    //Convert Angle to X & Y component vectors with Sine and Cosine functions
                    //Convert Angle from degrees to Radians with Angle * 2pi / 360 degrees
                        let vector = {
                            x: Math.cos(angle)*mag,
                            //Remember Y axis is inverted for programming
                            y: Math.sin(angle)*mag*-1
                        }


                    //Apply component X & Y vectors to Rectangle Position
                        this.x += vector.x;
                        this.y += vector.y;

                }
                 */

            //Method to draw the Rectangle
                /*this.draw = function {

                    //Create a new drawing instance
                        push();

                    //Set drawing x and drawing y coordinates to the center of the rectangle
                        let x = this.width/2;
                        let y = this.height/2;

                   //Translate the drawing frame such that the origin shifts to the center of the rectangle.
                        translate(x,y);

                   //Set Fill Color of the Rectangle
                        fill(this.color);

                   //Draw the actual Rectangle
                        rect(0,0, this.width, this.height);

                   //Break the current drawing instance and return to the original drawing instance
                        pop();
                }
                 */

//Supplementary Functions
    //Parse Color (yoinked from Ex2_2 Red Remover)
        //Takes a p5 Color Object

        //Convert p5 Color Object to a string

        //Convert p5 Color String to an Array
            //Arrives in the form of rgba(r,g,b,a)
            //Trim by ...( with Split method
            //Trim by )... with Split method
            //Split by ',' which will return an array with r | g | b | a

        //Return the Array of RGBA values

//End JS

//------------------------------
//   Ex3.3 - Bouncing Ball / World Wrap Reflector
//------------------------------
/*
Take your ball bounce or world wrap assignment and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function.
 */

//Note: Pre-Program Algorithim Is Copied and Augmented from Ex1_3.js
//Note: Velocity Method is taken from Ex3_2.js

//Start JS

//Outside Setup

    //Declare Vars 'canvasW' and 'canvasH' to represent width and height of the canvas
    //Declare Vars 'canvasNB', 'canvasEB', 'canvasSB','canvasWB' to represent the bounds of the canvas

    //Declare Var 'canvas' which will contain a canvas object literal

    //Declare Var 'circle' which will represent the circle Object

    //Declare nominal var 'circleR' to represent radius of the drawn circle


//Within Setup:

    //Assign Var 'circleR' to a nominal fixed integer value

    //Create a Circle Object and assign it to the circle variable
    /*
        circle = new Circle(0,0,circleR,circleColor[0,0,0,255]);
     */

    //Create a Vector Object for the Circle's Velocity and Assign it to the Circle
    //Proportionately Scale the Vector's Magnitude to Window Size
    //Randomize Initial Angle in Degrees from 0 to 360

    //Create Canvas Object Literal and Assign it to Canvas variable
    /*
        canvas {
        //Canvas Width
        w: windowWidth,
        //Canvas Height
        h: windowHeight,

        //Remember Bounds mathematically interact with the circle center and not the circle edge but interactions visually are from the circle edge so all bounds are the bounds +/- the circlr radius value

        //Assign North bound 'nb' to 0 + circleR
        nb: 0 + circle.r,
        //Assign East bound 'eb' to canvasW - circleR
        eb: this.w - circle.r,
        //Assign South bound 'sb' to canvasH - circleR
        sb: this.h - circle.r,
        //Assign West bound 'wb' to 0 + circleR
        wb: 0 + circle.r,
        }
     */



//Within Draw Call:
//Remember: [Draw() is inherently a continual loop that executes its contents once per frame]

    //Clear the Canvas of the Previous Drawings

    //Execute a control structure to check if X coordinate of circle center, circle.x, has reached or exceeded either of the horizontal edges, AKA the canvas East and West bounds 'canvas.eb' and 'canvas.wb'
        //If so, negate/reverse the horizontal or i velocity using the vector class set method, setI with the argument 'circle.velocity.i * -1'
    //End Control Structure

    //Execute a control structure to check if Y coordinate of circle center, circle.y, has reached or exceeded either of the horizontal edges, AKA the canvas North and South bounds 'canvas.nb' and 'canvas.sb'
        //If so, negate/reverse the vertical or j velocity using the vector class set method, setJ with the argument 'circle.velocity.j * -1'
    //End Control Structure

    //Move the Circle Object according to it's Velocity Vector Object using the Circle Class's Move Method

    //Draw a Circle using the Circle Class's Draw Method

//Functions
    //Circle Class Constructor
        //Parameters for Circle { int: initialPosX, int: initialPosY, int: circleRadius, array: circleColor[r,g,b,a] }

            //Represent the Circle Initial Position
                //this.x = initialPosX
                //this.y = initialPosY

            //Represent the Circle Velocity as a vector object that contains component vectors, vector magnitude, vector angle in degrees and radians
            //Declared but needs a vector Object to be passed to it
                //this.velocity;

            //Represent the Circle Dimensions
                //this.radius = circleRadius

            //Represent the Circle Color as a p5.js color object using the array of RGBA values from the input
                //this.color = color(circleColor[0], circleColor[1], circleColor[2], circleColor[3])

            //Method to apply Velocity Vector to the Circle Position
                /*this.move = function ( ) {
                    //Apply component X & Y velocity vectors to Circle Position
                        this.x += this.velocity.i;
                        //Remember Y axis is inverted for programming
                        this.y -= this.velocity.j;
                }
                 */

            //Method to draw the Circle
                /*this.draw = function {

                    //Create a new drawing instance
                        push();

                   //Set Fill Color of the Circle
                        fill(this.color);

                   //Draw the actual Circle at the Circle Coordinates with its given radius
                        circle(this.x,this.y, this.r);

                   //Break the current drawing instance and return to the original drawing instance
                        pop();
                }
                 */


// Vector Class
/*
//Template Class for 2D Vector Objects
//Builds Vector Objects with Angles in Degrees and Radians, Magnitude, and Component Vectors
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
        this.i = Math.cos(theta) * mag;
        //Y/j Component of a Vector = mag * sin(theta)
        this.j = Math.sin(theta) * mag;

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

 */
//Supplementary Functions

//End JS

