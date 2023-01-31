//Exercise 2.1: Drawing Drawer
//------------------------------------------------------------
//             Pre-Setup: Variable Declarations
//------------------------------------------------------------
//Canvas Width & Height
let canvasW,canvasH;


//------------------------------------------------------------
//     P5 Setup: Variable and Parameter Initializations
//------------------------------------------------------------

function setup(){
    //Set Canvas Dimensions to Window Dimensions
    canvasW = windowWidth;
    canvasH = windowHeight;

    //Create Canvas
    createCanvas(canvasW,canvasH);

}


//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){
    //Clear the Canvas of the Previous Composition
    clear();

    //To Draw a Rocket, need 5 basic shapes
    //Rectangle for the Fuselage
    //Two triangular fins around the fuselage
    //A Circle for the Window
    //A Triangle for the Nose Cone


    //Set the Background Color to roughly Midnight
    background(10,10,30);

    //Paint a Starry Sky
    //x is a counter variable that splits the canvas horizontally into 10 columns
    for( let x = canvasW/10; x <= canvasW; x += canvasW/10){

        //y is a counter variable that splits the canvas vertically into 10 rows
        //Since this is nested within each column, this loop renders all 10 rows of 1 column at a time
        for (let y = canvasH/10; y <= canvasH; y += canvasH/10){
            //Remove Stroke
            strokeWeight(0);
            //Set Circle Fill to White
            fill(255,255,255);
            //Randomly 'Jitter' the circle's X,Y coordinates using the random function between +/- 1/2 of a column and +/- 1/2 of a row
            //Also randomly determine the star size from 0 to 3
            circle(x + random(-canvasW/20,canvasW/20),y+random(-canvasH/20,canvasH/20),random(0,3))
        }
    }

    //Move the Frame to the Mouse Position
    translate(mouseX,mouseY);
    //Draw the Rocket with a size of canvasH/4
    drawRocket(canvasH/4,50);

}



//------------------------------------------------------------
//                     P5 User Functions
//------------------------------------------------------------

function drawRocket (rocketHeight, rocketColor){
    //Keep in mind fuselage is painted 50% lighter for some contrast
    
    //Remove Stroke from the Shapes
    strokeWeight(0);
    
    

    //Assume the overall shape has an aspect ratio of 1:4
    let rocketWidth = rocketHeight/4;

    //Proportions of the Rocket:
    //Fuselage about 2/3rds the overall width
    let fuselageWidth = (3/5)*rocketWidth;
    //Fuselage about 2/3rds of the overall height
    let fuselageHeight = (7/10)*rocketHeight;

    //Fuselage Window
    let fuselageWindowR = fuselageWidth/2;
    //Fuselage Window's Top Edge should be about 1/8th below the top of the Fuselage
    let fuselageWindowHeight = 1/8 * fuselageWidth + fuselageWindowR;


    //Stabilizer Fins occupy whatever the remainder of the overall width is, after the fuselage occupies it, and then splits it
    let finWidth = (rocketWidth-fuselageWidth)/2;
    //Fin should be 1/2 of the fuselage height
    let finHeight = (1/2)*fuselageHeight;
    //Extra Height where the Fin extends below the Fuselage
    let finExtraHeight = 1/10*rocketHeight;

    //Nosecone proportion is about 1/4th the overall Rocket Height
    let noseconeHeight = rocketHeight - fuselageHeight - finExtraHeight;

    //Move the Rocket such that it's bisected by the Y axis and that the origin of the canvas is positioned to the center of the rocket's fuselage window
    translate(-(rocketWidth/2),-(noseconeHeight+fuselageWindowHeight));

    //Translate the Entire Rocket Right by the FinWidth to accommodate the Left Fin
    translate(finWidth,0);

    
    //Nosecone - Darker Grey
    //Sits on top of the Fuselage and meets in the middle of it
    fill(rocketColor);
    triangle(
        0,noseconeHeight,
        fuselageWidth,noseconeHeight,
        0.5*fuselageWidth,0
    );
    
    //Fuselage Section - Lighter Grey
    //Offset below the Nosecone
    fill(1.5*rocketColor);
    quad(
        0,noseconeHeight,
        fuselageWidth,noseconeHeight,
        fuselageWidth,fuselageHeight+noseconeHeight,
        0,fuselageHeight+noseconeHeight,
    );

    //Fuselage Window Frame
    //Offset a bit below the top of the Fuselage
    //Slightly larger than the actual Fuselage Window
    fill(rocketColor);
    circle(
        fuselageWidth/2,noseconeHeight + fuselageWindowHeight, fuselageWindowR*1.2
    );

    //Fuselage Window
    //Offset a bit below the top of the Fuselage
    fill(180,230,240);
    circle(
        fuselageWidth/2,noseconeHeight + fuselageWindowHeight, fuselageWindowR
    );


    //Thruster Triangle Fire
    //Looped to Generate Inner Triangles
    for(let i = 0; i < 9; i++){
        //Changes rocketColor to transition from red to orange to yellow
        fill(200+10*i,0+40*i,0+10*i);
        //Somewhat random Increments that's randomly build
        widthIncrement = rocketWidth*0.08*i;
        heightDecrement = rocketHeight*(0.5-(0.04*i))
        triangle(
            //Starts at Half Left Fin's Width and Ends on Half the Right Fin's Width
            0-finWidth/2 + widthIncrement, fuselageHeight+noseconeHeight,
            fuselageWidth + finWidth/2 - widthIncrement, fuselageHeight+noseconeHeight,
            fuselageWidth/2, fuselageHeight+noseconeHeight+random(0.8*heightDecrement,1.2*heightDecrement)
        )
    }

    //Right Stabilizer Fin
    //Offset to the right of the bottom of the Fuselage
    //Note top vertex of the fin is placed next to the fuselage which is offset a positive y, equal to noseconeHeight, below the y=0 line
    fill(rocketColor);
    triangle(
        fuselageWidth,fuselageHeight+noseconeHeight,
        fuselageWidth+finWidth,fuselageHeight+noseconeHeight+finExtraHeight,
        fuselageWidth, (fuselageHeight+noseconeHeight) - finHeight
    );

    //Left Stabilizer Fin
    //Offset to the left of the Bottom of the Fuselage
    fill(rocketColor);
    triangle(
        0,fuselageHeight+noseconeHeight,
        0-finWidth,fuselageHeight+noseconeHeight+finExtraHeight,
        0, (fuselageHeight+noseconeHeight) - finHeight
    );

}//End of Draw Rocket