//Exercise 3.1: Object Drawer
//------------------------------------------------------------
//             Pre-Setup: Variable Declarations
//------------------------------------------------------------
//Canvas Width & Height
let canvasW,canvasH;

//Rocket Height
let rocketHeight;

//Star Density, higher = more stars
const starGrid = 8;


//------------------------------------------------------------
//     P5 Setup: Variable and Parameter Initializations
//------------------------------------------------------------

function setup(){
    //Set Canvas Dimensions to Window Dimensions
    canvasW = windowWidth;
    canvasH = windowHeight;

    //Set Rocket Height to 1/4 of the Canvas Height
    rocketHeight = canvasH/4;

    //Create Canvas
    createCanvas(canvasW,canvasH);

    //Increase Frame Rate to Maximum
    frameRate(120);
}


//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------

function draw(){
    //Clear the Canvas of the Previous Composition

    //Set the Background Color to roughly Midnight
    background(color(10,10,30,80));
    
    //Paint a Starry Sky
    //x is a counter variable that splits the canvas horizontally into 10 columns
    for( let x = canvasW/starGrid; x <= canvasW; x += canvasW/starGrid){

        //y is a counter variable that splits the canvas vertically into 'starGrid' rows
        //Since this is nested within each column, this loop renders all 'starGrid' rows of 1 column at a time
        for (let y = canvasH/starGrid; y <= canvasH; y += canvasH/starGrid){
            //Remove Stroke
            strokeWeight(0);
            //Set Circle Fill to White with Random Alpha
            fill(color(255,255,255,random(100,255)));
            //Randomly 'Jitter' the circle's X,Y coordinates using the random function between +/- 1/2 of a column and +/- 1/2 of a row
            //Also randomly determine the star size from 0 to 3
            circle(x + random(-canvasW/(starGrid*2),canvasW/(starGrid*2)),y+random(-canvasH/(starGrid*2),canvasH/(starGrid*2)),random(0,3))
        }
    }


    //Draw the Rocket with a size of canvasH/4
    let rocky = new Rocket(rocketHeight,rocketHeight/4,mouseX,mouseY,color(40,40,40));

    rocky.draw();
}



//------------------------------------------------------------
//                     P5 Supplemental Functions
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

//------------------------------------------------------------
//                     P5 User Functions
//------------------------------------------------------------

//Rocket Class Constructor
function Rocket (rocketHeight,rocketWidth,rocketPosX,rocketPosY, rocketColor){

    //Build the Parameters into Rocket Properties
    //Keyword 'this' refers to the Object Being Built
    this.height = rocketHeight;
    //Good Aspect Ratio for the Rocket is H:4W
    this.width = rocketWidth;

    //Rocket's Position in Space
    this.x = rocketPosX;
    this.y = rocketPosY;

    //Primary Color of the Rocket
    this.color = rocketColor;

    //Fuselage Color is lighter than Main Rocket Color
    this.colorRatio = 1.4;

    this.colorFuselage = color(
        parseColor(this.color)[0]*this.colorRatio,
        parseColor(this.color)[1]*this.colorRatio,
        parseColor(this.color)[2]*this.colorRatio,
    );

    //Fuselage Window is a Light Blue
    this.colorFuselageWindow = color(
        180,
        230,
        240
    )

    //Proportions of the Rocket Parts:
    //Main Body/Fuselage of the Rocket
    this.fuselageWidth = (3/5) * this.width;
    this.fuselageHeight = (7/10) * this.height;

    //Circular Fuselage Window
    this.fuselageWindowRaidus = this.fuselageWidth/2;

    //Fuselage Window's Top Edge should be about 1/8th below the top of the Fuselage
    this.fuselageWindowHeight = (1/8) * this.fuselageWidth + this.fuselageWindowRaidus;

    //Rocket Fins
    //Width Split between remaining width from rocket frame width and width occupied by fuselage
    this.finWidth = (1/2) * (this.width - this.fuselageWidth);
    this.finHeightMain = (1/2) * this.fuselageHeight;
    this.finHeightTips = (1/10) * this.height;

    //Rocket Nosecone
    //Height Occupies the remainder of the Rocket Height subtracted by the Fuselage Height and extra Fin Tips height
    this.noseconeHeight = this.height - this.fuselageHeight - this.finHeightTips;

    //Function to Draw the Object
    this.draw = function () {

        //Translate the Drawing Point to the Rocket Position
        translate(this.x, this.y);

        //Remove Stroke from the Shapes
        strokeWeight(0);

        //Move the Rocket such that it's bisected by the Y axis and that the origin of the canvas is positioned to the center of the rocket's fuselage window
        translate(-(this.width / 2), - (this.noseconeHeight + this.fuselageWindowHeight));

        //Translate the Entire Rocket Right by the FinWidth to accommodate the Left Fin
        translate(this.finWidth, 0);

        //Nosecone - Darker Grey
        //Sits on top of the Fuselage and meets in the middle of it
        fill(this.color);
        triangle(
            0, this.noseconeHeight,
            this.fuselageWidth, this.noseconeHeight,
            0.5 * this.fuselageWidth, 0
        );

        //Fuselage Section - Lighter Grey
        //Offset below the Nosecone
        fill(this.colorFuselage);
        quad(
            0, this.noseconeHeight,
            this.fuselageWidth, this.noseconeHeight,
            this.fuselageWidth, this.fuselageHeight + this.noseconeHeight,
            0, this.fuselageHeight + this.noseconeHeight,
        );

        //Fuselage Window Frame
        //Offset a bit below the top of the Fuselage
        //Slightly larger than the actual Fuselage Window
        fill(this.color);
        circle(
            this.fuselageWidth / 2, this.noseconeHeight + this.fuselageWindowHeight, this.fuselageWindowRaidus * 1.2
        );

        //Fuselage Window
        //Offset a bit below the top of the Fuselage
        fill(this.colorFuselageWindow);
        circle(
            this.fuselageWidth / 2, this.noseconeHeight + this.fuselageWindowHeight, this.fuselageWindowRaidus
        );


        //Thruster Triangle Fire
        //Looped to Generate Inner Triangles
        for (let i = 0; i < 9; i++) {
            //Changes this.color to transition from red to orange to yellow
            fill(200 + 10 * i, 0 + 40 * i, 0 + 10 * i,100);
            //Somewhat random Increments that's randomly build
            const widthIncrement = this.width * 0.08 * i;
            const heightDecrement = this.height * (0.5 - (0.04 * i))
            triangle(
                //Starts at Half Left Fin's Width and Ends on Half the Right Fin's Width
                0 - this.finWidth / 2 + widthIncrement, this.fuselageHeight + this.noseconeHeight,
                this.fuselageWidth + this.finWidth / 2 - widthIncrement, this.fuselageHeight + this.noseconeHeight,
                this.fuselageWidth / 2, this.fuselageHeight + this.noseconeHeight + random(0.8 * heightDecrement, 1.2 * heightDecrement)
            )
        }

        //Right Stabilizer Fin
        //Offset to the right of the bottom of the Fuselage
        //Note top vertex of the fin is placed next to the fuselage which is offset a positive y, equal to this.noseconeHeight, below the y=0 line
        fill(this.color);
        triangle(
            this.fuselageWidth, this.fuselageHeight + this.noseconeHeight,
            this.fuselageWidth + this.finWidth, this.fuselageHeight + this.noseconeHeight + this.finHeightTips,
            this.fuselageWidth, (this.fuselageHeight + this.noseconeHeight) - this.finHeightMain
        );

        //Left Stabilizer Fin
        //Offset to the left of the Bottom of the Fuselage
        fill(this.color);
        triangle(
            0, this.fuselageHeight + this.noseconeHeight,
            0 - this.finWidth, this.fuselageHeight + this.noseconeHeight + this.finHeightTips,
            0, (this.fuselageHeight + this.noseconeHeight) - this.finHeightMain
        );
    } //End of Rocket.draw method

}//End of Rocket Class Constructor





/* Legacy Rocket Draw Function
function drawRocket (rocketHeight,rocketWidth,rocketPosX,rocketPosY, rocketColor){

    //Translate the Drawing Point to the Rocket Position
    translate(rocketPosX,rocketPosY);

    //Remove Stroke from the Shapes
    strokeWeight(0);

    //Rocket's Lighter Fuselage Color, Higher Ratio makes the Fuselage Brighter in respect to the Main Rocket Color
    const secondaryColorRatio = 1.4;
    let rocketColorSecondary = color(
        parseColor(rocketColor)[0]*secondaryColorRatio,
        parseColor(rocketColor)[1]*secondaryColorRatio,
        parseColor(rocketColor)[2]*secondaryColorRatio,
        );



    //Assume the overall shape has an aspect ratio of 1:4
    //let rocketWidth = rocketHeight/4;

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
    fill(rocketColorSecondary);
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
 */




/* Rocket Class Constructor with Sub Properties that requires Sub Objects to be Implemented, refer to aBall example in class:

Example of Sub-Objects
let aBall = {
    x:10, y: 10,
    speed: { x:2, y:2 },
    radius: 20
}
*//*


//Rocket Class Constructor
function Rocket (rocketHeight,rocketWidth,rocketPosX,rocketPosY, rocketColor){

    //Build the Parameters into Rocket Properties
    //Keyword 'this' refers to the Object Being Built
    this.height = rocketHeight;

    this.width = rocketWidth;

    this.x = rocketPosX;

    this.y = rocketPosY;

    this.color = rocketColor;

    this.color.ratio = 1.4;

    this.fuselage.color = color(
        parseColor(this.color)[0]*this.color.ratio,
        parseColor(this.color)[1]*this.color.ratio,
        parseColor(this.color)[2]*this.color.ratio,
    );
    
    this.fuselage.window.color = color(
        180,
        230,
        240
    )

    //Proportions of the Rocket Parts:
    //Main Body/Fuselage of the Rocket
    this.fuselage.width = (3/5) * this.width;
    this.fuselage.height = (7/10) * this.height;

    //Circular Fuselage Window
    this.fuselage.window.radius = this.fuselage.width/2;

    //Fuselage Window's Top Edge should be about 1/8th below the top of the Fuselage
    this.fuselage.window.height = (1/8) * this.fuselage.width + this.fuselage.window.radius;

    //Rocket Fins
    //Width Split between remaining width from rocket frame width and width occupied by fuselage
    this.fin.width = (1/2) * (this.width - this.fuselage.width);
    this.fin.height.main = (1/2) * this.fuselage.height;
    this.fin.height.tips = (1/10) * this.height;
    
    //Rocket Nosecone
    //Height Occupies the remainder of the Rocket Height subtracted by the Fuselage Height and extra Fin Tips height
    this.nosecone.height = this.height - this.fuselage.height - fin.height.tips;
    

    this.draw = function () {

        //Translate the Drawing Point to the Rocket Position
        translate(this.x, this.y);

        //Remove Stroke from the Shapes
        strokeWeight(0);
        

        //Move the Rocket such that it's bisected by the Y axis and that the origin of the canvas is positioned to the center of the rocket's fuselage window
        translate(-(this.width / 2), - (this.nosecone.height + this.fuselage.window.height));

        //Translate the Entire Rocket Right by the FinWidth to accommodate the Left Fin
        translate(this.fin.width, 0);


        //Nosecone - Darker Grey
        //Sits on top of the Fuselage and meets in the middle of it
        fill(this.color);
        triangle(
            0, this.nosecone.height,
            this.fuselage.width, this.nosecone.height,
            0.5 * this.fuselage.width, 0
        );

        //Fuselage Section - Lighter Grey
        //Offset below the Nosecone
        fill(this.fuselage.color);
        quad(
            0, this.nosecone.height,
            this.fuselage.width, this.nosecone.height,
            this.fuselage.width, this.fuselage.height + this.nosecone.height,
            0, this.fuselage.height + this.nosecone.height,
        );

        //Fuselage Window Frame
        //Offset a bit below the top of the Fuselage
        //Slightly larger than the actual Fuselage Window
        fill(this.color);
        circle(
            this.fuselage.width / 2, this.nosecone.height + fuselage.window.height, fuselage.window.radius * 1.2
        );

        //Fuselage Window
        //Offset a bit below the top of the Fuselage
        fill(this.fuselage.window.color);
        circle(
            this.fuselage.width / 2, this.nosecone.height + fuselage.window.height, fuselage.window.radius
        );


        //Thruster Triangle Fire
        //Looped to Generate Inner Triangles
        for (let i = 0; i < 9; i++) {
            //Changes this.color to transition from red to orange to yellow
            fill(200 + 10 * i, 0 + 40 * i, 0 + 10 * i);
            //Somewhat random Increments that's randomly build
            const widthIncrement = this.width * 0.08 * i;
            const heightDecrement = this.height * (0.5 - (0.04 * i))
            triangle(
                //Starts at Half Left Fin's Width and Ends on Half the Right Fin's Width
                0 - this.fin.width / 2 + widthIncrement, this.fuselage.height + this.nosecone.height,
                this.fuselage.width + this.fin.width / 2 - widthIncrement, this.fuselage.height + this.nosecone.height,
                this.fuselage.width / 2, this.fuselage.height + this.nosecone.height + random(0.8 * heightDecrement, 1.2 * heightDecrement)
            )
        }

        //Right Stabilizer Fin
        //Offset to the right of the bottom of the Fuselage
        //Note top vertex of the fin is placed next to the fuselage which is offset a positive y, equal to this.nosecone.height, below the y=0 line
        fill(this.color);
        triangle(
            this.fuselage.width, this.fuselage.height + this.nosecone.height,
            this.fuselage.width + this.fin.width, this.fuselage.height + this.nosecone.height + this.fin.height.tips,
            this.fuselage.width, (this.fuselage.height + this.nosecone.height) - this.fin.height.main
        );

        //Left Stabilizer Fin
        //Offset to the left of the Bottom of the Fuselage
        fill(this.color);
        triangle(
            0, this.fuselage.height + this.nosecone.height,
            0 - this.fin.width, this.fuselage.height + this.nosecone.height + this.fin.height.tips,
            0, (this.fuselage.height + this.nosecone.height) - this.fin.height.main
        );
    } //End of Rocket.draw method

}//End of Rocket Class Constructor

 */