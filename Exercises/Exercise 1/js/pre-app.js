//------------------------------
//      Ex1.1 - Counter:
//------------------------------
/*
Create an application that outputs a number to the console every draw call of P5. This number should start at zero, and increase by one every frame.
 */

//Initialize a nominal counter variable 'i' outside of the draw() function

//Execute an increment assignment within the draw() function

//Contents of draw() function are executed once per frame and therefore should increment var 'i' once per frame

//Execute console.log(...) on var 'i', logs the value of 'i' on every draw() call/frame draw



//------------------------------
//     Ex1.2 - Puck Side:
//------------------------------

/*
Canvas size: 400x300

Create an application that draws a circle where the mouse is at. (Use  the P5 variables mouseX and mouseY for this). When the mouse is on the right half of the canvas, draw the circle in red. When the mouse is on the left side of the canvas, draw the circle in blue.
 */

//Start JS

//Outside Setup
    //Declare Vars 'canvasW' and 'canvasH' to represent width and height of the canvas
    //Declare Vars 'circleX' and 'circleY' to represent circle (x,y) coordinates
    //Declare nominal var 'circleR' to represent radius of the drawn circle

//Within Setup:
    //Assign Vars 'canvasW' and 'canvasH' in setup() to canvas width and height
    //Assign Var 'circleR' to a fixed integer value
    //Create Canvas

//Within Draw Call:
    // Remember: [Draw() is inherently a continual loop that executes its contents once per frame]

    //Clear the Canvas of the Previous Drawings

    // Circle X Coordinate == Mouse X Coordinate | Circle Y Coordinate == Mouse Y Coordinate
    //Assign Vars 'circleX' and 'circleY' respectively to mouseX and mouseY - Must be in Draw as mouseX and mouseY are dynamic and the variable values must be refreshed


    // Left Half of Canvas == X coordinates < (1/2 of canvas width)
    // Right Half of Canvas == X coordinates > (1/2 of canvas width)

    //Execute a control structure to check if circleX < 1/2 canvas width
        //If so, the mouse is on the left side of the canvas and the circle color should be set to red
        //If not, the mouse must be on the right side of the canvas and the circle color should be set to blue
    //End Control Structure

    //Draw a circle at coordinates circleX,circleY with nominal radius 'circleR'

//End JS



//------------------------------
//   Ex1.3 - World Wrap
//------------------------------
/*
Create a canvas 800px x 600 px.

Make an application that starts drawing a ball on the left hand of the screen - make it move to the right 5 pixels per frame.

Write the code so that when the circle reaches 800 pixels to the right, move the circle to the far left of the screen.
 */

//Start JS

//Outside Setup
    //Declare Vars 'canvasW' and 'canvasH' to represent width and height of the canvas
    //Declare Vars 'canvasNB', 'canvasEB', 'canvasSB','canvasWB' to represent the bounds of the canvas
    //Declare Vars 'circleX' and 'circleY' to represent circle (x,y) coordinates
    //Declare nominal var 'circleR' to represent radius of the drawn circle
    //Declare Var 'velocityX' to represent speed in pixels of horizontal circle translation

//Within Setup:
    //Assign Vars 'canvasW' and 'canvasH' in setup() to canvas width and height
    //Create Canvas

    //Assign Var 'circleR' to a nominal fixed integer value
    //Assign Var 'circleX' to 'circleR' to represent the circle center beginning one radius away from the Canvas's horizontal edge
    //Assign Var 'circleY' to nominal integer value to represent the height [recommended at 1/2 of canvasH]

    //Assign Var 'velocityEastX' to a fixed integer value

    //Assign Canvas Bounds:
    //Remember Bounds mathematically interact with the circle center and not the circle edge but interactions visually are from the circle edge so all bounds are the bounds +/- the circleR value
    //Circle edge is a fixed circleR length from the center of the Circle (circleX,circleY)
        //Assign North bound 'canvasNB' to 0 + circleR
        //Assign East bound 'canvasEB' to canvasW - circleR
        //Assign South bound 'canvasSB' to canvasH - circleR
        //Assign West bound 'canvasWB' to 0 + circleR

//Within Draw Call:
//Remember: [Draw() is inherently a continual loop that executes its contents once per frame]
    //Clear the Canvas of the Previous Drawings

    //Execute a control structure to check if X coordinate of circle center, circleX, has reached or exceeded canvas right horizontal edge, AKA the canvas East bound 'canvasEB'
        //If so, reset X coordinate of circle center to left horizontal edge, AKA the canvas West bound 'canvasWB'
        //If not, do nothing circle coordinate adjustment is necessary and this
    //End Control Structure

    //Draw a Circle at coordinates circleX,circleY with nominal radius 'circleR'

    //Apply the east velocity vector to the horizontal coordinate circleX of the Circle
        //Assign circleX += velocityEastX;


//End JS
