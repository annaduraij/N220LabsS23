
//Program that draws a line from point A, which is defined by where the mouse is clicked, to point B, which is defined by where the mouse is hovering

//Variable that represents the point at which the Line Begins
let startPoint = { x: 0, y: 0 };
//Variable that represents the point at which the Line Ends
let endPoint = { x: 0, y: 0 };
//Variable that will represent the distance between two points
let lineDistance;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    //Sets the Background Color to Grey
    background(220);

    //On Mouse Click, reset the Line start point to the current mouse position
    if(mouseIsPressed) {
        startPoint.x = mouseX;
        startPoint.y = mouseY;
    }

    //Set the Mouse End Point to where the mouse is hovering
    endPoint.x = mouseX;
    endPoint.y = mouseY;

    //Var lineDistance represents the distance in pixels from the line startPoint to the cursor, the endpoint
    //If Line distance exceeds 120, change the line color to red
    lineDistance = distance( startPoint, endPoint);

    //If Line distance exceeds 120, change the line color to red
    if(lineDistance > 120) {
        stroke("#FF0000");
    }
    //Otherwise set it to black
    else {
        stroke("#000000");
    }

    //Draw the Line from the mouse click point to the mouse hover point
    line(startPoint.x, startPoint.y, endPoint.x,endPoint.y);

}//End of Draw

//Function to calculate the distance between two points
function distance(point1, point2) {

    //Change in X
    let deltaX = point2.x - point1.x;
    //Change in Y
    let deltaY = point2.y - point1.y;

    //Pythagorean Theorem to return the hypotenuse length
    //AKA Distance Formula, sqrt(change in x^2 + change in y^2)
    let dist = Math.sqrt(deltaX*deltaX + deltaY*deltaY);

    //Log the Distance into the console to be safe
    console.log('Distance Output: ',dist);

    //Return the Distance value
    return dist;
}