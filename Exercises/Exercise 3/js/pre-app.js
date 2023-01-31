//------------------------------
//   Ex2.1 - Drawing Drawer:
//------------------------------
/*
Drawing Drawer

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

//In p5.js setup()
    //Assign Window Width and Window Height respectively to Canvas Width and Canvas Height Variables
    //Create the Canvas
    //Set Background Color

//In p5.js draw()
    //Clear any Previous Draw Call
    //Translate the frame such that the origin is set to mouseX and mouseY coordinates
    //Use a function to draw the rocket composition

//Functions
    //Draw Rocket (size, color)
        //Set Strokeweight to 0
        //Set fill to color
        //Define Proportions,and General Positions of the Rocket
            //i.e. Rocket is 1/3 as wide as the height of the Rocket
            //i.e. Fuselage is 2/3 the height of the Rocket, and is the width of the Rocket
            //i.e. Nosecone is 1/3 the height of the Rocket, and is the width of the Rocket, starts above the Fuselage
            //i.e. Rocket Fins are 1/3 the height of the fuselage, and are 1/4 the width of the Rocket each, start at the bottom corners of the Rocket
        //Draw the Rocket
            //Triangle for Nosecone
            //Quadrilateral for Fuselage
            //Triangle for each of the Stabilizer Fins
        //Draw the Rocket Fire
            //Create 3 Nested Triangles with slightly smaller width and height with increasing color value
            //Initial width and height set to fuselage width, and perhaps 1/3 of the Rocket height
                //For Loop with counter that nominally decrements width and height, but also increments the color
                //Draw Triangle
    //End Draw Rocket Function

//End JS

//------------------------------
//     Ex2.2 - Red Remover
//------------------------------

/*
Write a function that

takes a color as an argument ( you can use color(170, 200, 150) )
sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
Returns that new color without red
Then, test this function by drawing a circle to the screen using the result. You might have something like:
let noRed = removeRed( color(170, 200, 150) );

fill(noRed);

//draw circle
 */

//Pre-p5.js
    //Create canvasW and canvasH variables to eventually represent canvas Width and canvas height; user customizable but will be set to window width and window height

    //Declare nominal vars 'circleX' and 'circleY' to represent circle (x,y) coordinates
    //Declare nominal var 'circleR' to represent radius of the drawn circle

    //Declare nominal var 'colorIn' to represent the input color into the Red Remover Function
    //Declare nominal var 'colorOut' to represent the input color output of the Red Remover Function, which shall be titled 'removeColorRed'

//In p5.js setup()
    //Assign Window Width and Window Height respectively to Canvas Width and Canvas Height Variables

    //Assign nominal var 'colorIn' with random RGB values
        //i.e. colorIn = color(random(0,255),random(0,255),random(0,255))
        //May be useful to log this into the console
    //Assign nominal var 'colorOut' as output of the removeColorRed with colorIn as its input
        //i.e. colorOut = removeColorRed(colorIn);
        //May be useful to log this into the console
    //Create the Canvas

//In p5.js draw()
    // Remember: [Draw() is inherently a continual loop that executes its contents once per frame]

    //Clear the Canvas of the Previous Drawings

    //Set Fill color with 'removeColorRed''s output color
        //i.e. fill(colorOut);


    // Circle X Coordinate == Mouse X Coordinate | Circle Y Coordinate == Mouse Y Coordinate
    //Assign Vars 'circleX' and 'circleY' respectively to mouseX and mouseY - Must be in Draw as mouseX and mouseY are dynamic and the variable values must be refreshed

    //Draw a circle at coordinates circleX,circleY with nominal radius 'circleR'

//Functions
    // removeColorRed(color){
        //Color is a variable that represents a p5.js RGB value, such as color(r,g,b)

        //Set the color's red value to zero and return it
        //i.e. return color.setRed(0);

    //} End removeColorRed function

//End JS

//Note: Final Algorithim Drastically Shifted due to the nature of JS and assigning objects. P5.js uses a color object and when copying the output, it actually just references the original color object. Therefore any methods or transformations applied to one instance of the color variable apply to all color variables. As such, in the final project I converted the input color to a string, converted it into an array containing r,g,b values and then returned the array. Inside the draw call, I then parsed the array into a color.


//------------------------------
//   Ex2.3 - Polar Points
//------------------------------
/*
Polar Points

Polar coordinates are coordinates on a circle, rather than on a cartesian grid. They can be calculated by taking the sin and cosine of a number. For this exercise, you will write a function that calculates polar coordinates and returns a value that will be used to draw a circle at those coordinates.

For this exercise

In addition to your setup() and draw() calls, add a new function named polarPoint()
Add one argument to polar point (r)
In the polar point function, create an x variable and set it to r * Math.sin(mouseX);
Create a Y variable, set it to the result of r * Math.cos(mouseX);
Finally, at the end of the function, write return createVector(x,y);
To test this function:

Set a variable (perhaps res) equal to the result of calling polarPoint() in your draw call
Add a translate(100,100); line before your drawing methods
Draw a circle at res.x, res.y, and with a radius of 10.
(res is technically an 'object', which we will learn more about next week)
The result will look something like below.

polarPoints.PNG

For more information about polar coordinates: https://en.wikipedia.org/wiki/Polar_coordinate_system
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
