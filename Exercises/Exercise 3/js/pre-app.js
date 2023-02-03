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

//Supplmentary Functions
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

//Note: Final Algorithim Drastically Shifted due to the nature of JS and assigning objects. P5.js uses a color object and when copying the output, it actually just references the original color object. Therefore any methods or transformations applied to one instance of the color variable apply to all color variables. As such, in the final project I converted the input color to a string, converted it into an array containing r,g,b values and then returned the array. Inside the draw call, I then parsed the array into a color.


//------------------------------
//   Ex3.3 - Bouncing Ball / World Wrap Reflector
//------------------------------
/*
Take your ball bounce or world wrap assignment and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function.
 */

//Start JS

//Outside Setup

    //Declare Vars 'canvasW' and 'canvasH' to represent width and height of the canva

    //Declare Vars 'circleX' and 'circleY' to represent circle (x,y) coordinates
    //Declare nominal var 'circleR' to represent radius of the drawn circle

    //Declare carrier var 'polarVector' to hold the value of the 'polarPoint(radius)' function

//Within Setup:

    //Assign Vars 'canvasW' and 'canvasH' in setup() to canvas width and height
    //Create Canvas

    //Assign Var 'circleR' to a nominal fixed integer value

//Within Draw Call:
//Remember: [Draw() is inherently a continual loop that executes its contents once per frame]

    //Call 'polarPoint(circleR)' and assign to var polarVector

    //Translate the drawing by x=100 and y=100

    //Draw a circle with center coordinates of polarVector.x and polarVector.y with radius of circleR

//Functions
    // polarPoint(radius){

        //Declare block variables x & y that store vectors to describe the polar point

        //Invoke the Math library for the cosine and sine methods

            //Note, radius = sqrt(x^2 + y^2)
            //Note, theta = inverse tangent (y / x)

        //Horizontal Polar Conversion, x = r*cos(theta)
        //x = radius * Math.cos(mouseX);

        //Vertical Polar Converstion, x = r*sin(theta)
        //y = radius * Math.sin(mouseX);

        //Return a vector <x,y> with:
        //return createVector(x,y)

    //} End polarPoint vector generation function


//End JS
