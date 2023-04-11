//------------------------------
//   Ex10.1 - Color Changer
//------------------------------
/*
Color Changer

Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. Give them a margin of 5px.

Using only one event handler, write event listeners to respond to a click on each element. Each element should change to a different color: one red, one green, and one blue. Use a data attribute on the elements to store the color to be changed to.
 */

//General JS
    //Create an Object with the New Colors
    /* colors = {
        //Red Colored Rectangle
        rect1: 'rgb(240, 30, 70)',
        //Green Colored Rectangle
        rect2: 'rgb(0, 255, 140)',
        //Blue Colored Rectangle
        rect3: 'rgb(65, 20, 240)'
    };

    //Iterate through the Object
        //Build Identical Rectangle Div
            //200px by 200px
            //floated left
            //margin of 5px
        //Set Dataset.colorShift Property to the Iterated Object Value
        //Build an Onclick Event Listener with function evaluateInput(event)
     */

//Functions
//Signature Function that utilizes the JS Event Object and JS Datasets to Dynamically Adjust the Event based on the pre-existing Data bound to the HTML Object

/* function evaluateInput (event) {

    //Use event.target to get and bind the clicked element
    //let elem = event.target;
    //Set the background color of the clicked element to its dataset.colorshift property
    //elem.style.backgroundColor = elem.dataset.colorShift;

} //End of function 'evaluateInput' */

//End JS

//------------------------------
//  Ex10.2 - Color Mixer
//------------------------------
/*
This is an application that will start a div at a black color, and as a user presses buttons associated with RGB, the div will change to new colors. The button presses should affect additively - that is. If a div is currently blue, pressing +red buttons will change the div to a purple color.

9 buttons (associated with red green and blue). There should be a +1, +5, and +10 button for each color.
1 div that will change colors to the rgb color calculated

1 div that shows the current calculated rgb color

You must use attributes on the buttons for the values to change the colors by.
 */

//General JS
    //Declare a constant array with the increment values
    //const incValues = [-10,-5,-1,+1,+5,+10];
    //Declare a constant array with the colors
    //const colors = ['Red','Green','Blue'];

    //Think about GUI Format
    //   <div> that displays the Color
    //   <div> that prints current Color values
    // Red: (-10) (-5) (-1) (+1) (+5) (+10)
    // Green: (-10) (-5) (-1) (+1) (+5) (+10)
    // Blue: (-10) (-5) (-1) (+1) (+5) (+10)

    //Build an output div
        //Width is 80% of the viewport width
        //Height is 40% of the viewport height
        //Set Background color to 'rgb(0,0,0)'

    //Build a div that prints the output div's current color
        //Initial InnerHTML: ` (R: 0, G: 0, B: 0) `

    //Build a Table <table>
    //Outer Loop per Row: Colors
        //Start New Row <tr>

        //Create First Cell <td> with Template Literal
            //`${color}:`
        //End Cell </td>

        //Inner Loop per Column: Buttons with Increments
            //Create New Cell <td>
            //Create New Div <div> with the Two Dataset Attributes
            //data-color with the color from the outer foreach loop
            //data-increment with the magnitude from the inner foreach loop
            //Set Onclick Event Listener to evaluateInput(event) function

            //End Div </div>
            //End Cell </td>

        //End Row </tr>

    //End Table </table>

//Functions
    //Signature Function to use the event listener's built in event.target property to reference the object and acquire its dataset values as arguments for the color shift

/* function evaluateInput (event, outputID='outputID',consoleID='consoleID') {

    //Bind HTML Output Display Element corresponding to outputID to a JS Variable
    //Bind the HTML Output Display Element to a variable
    //Bind the current background color of the HTML Output Display element to a variable

    //Bind HTML Output Console Element corresponding to consoleID to a JS Variable
    //Bind the HTML Output Console Element to a variable

    //Parse the string value of the Output Display's Background Color and Bind it Back to the Previous Var

    //Identify the Onclick Event Target's Dataset Parameters
    //Use an Object Literal to contain the values
        //Bind the event.target.dataset.color to shift.color
        //Bind the event.target.dataset.increment to shift.mag

    //Set the output display color object with the key based on shift.color and the increment based on shift.mag
    //color[shift.color] += shift.mag

    //Set the HTML Output Console Element's InnerHTML to a Template Literal
    // `(R: ${color.red}, G: ${color.green}, B: ${color.blue})`

    //Convert the color object back into a color string
    //color = `rgb(${color.red},${color.green},${color.blue})`

    //Set the HTML Output Display's New Background Color to the Color String

} //End of function 'evaluateInput' */

//Function that returns a parsed [r,g,b,a] array from a JS color
//Argument is a string color in the format of 'rgb(r,g,b)' or 'rgba(r,g,b,a)' if the enableAlpha is set to true
/*
function parseColor(colorStr,enableAlpha = false){

    //Trim any extra spaces from the Color String
    colorStr = colorStr.trim();

    //Error Handler- If the colorStr is Empty or Invalid
    if(typeof colorStr !== "string" || colorStr === '') {
        //Log the Error
        console.log("Parsed Color was Invalid",colorStr);
        //Return
        return;
    }

    //Trim the 'rgba(' or 'rgb(' portion by splitting on '(' and grabbing the string after it
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
    //Only look for the alpha element if the flag is true
    if (enableAlpha) {
        let a = colorStr[3];
        //Return the rgba object
        return {red: r, green: g, blue: b, alpha: a};
    }
    //Otherwise, Return the Color Values as an object
    return {red: r, green: g, blue: b};

}// End of parseColor function

 */
//End JS


//------------------------------
//    Ex10.3 - Flash Cards
//------------------------------
/*
Flash Cards

An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?". Each button should have a data-answer attribute that lists the answer.

When a button is clicked, display the answer to the button's question in a div. Use only one function, and that function must make use of the button's data-attribute.

 */

//General JS
//Create an Array of Objects with the Flash Cars
/* flashcards = [
    {q: 'What is Jay's favorite color?' , a: 'Black' },
    {q: 'Who is Jay's favorite animal?' , a: 'Regulus' },
    {q: 'What is Jay's favorite verb?', a: 'Scintillate' }
];

//Iterate through the Array
    //Build Identical Rectangle Div
        //200px by 200px
        //floated left
        //margin of 5px
    //Set Dataset.question Property to the Iterated Object's 'q' property
    //Set Dataset.answer Property to the Iterated Object's 'a' property
    //Build an Onclick Event Listener with function evaluateInput(event)

    //Set InnerHTML to the Iterated Object's 'q' property
 */

//Functions
//Signature Function that utilizes the JS Event Object and JS Datasets to Dynamically Adjust the Event based on the pre-existing Data bound to the HTML Object
/* function evaluateInput (event) {

    //Use event.target to get and bind the clicked element
    //let fc = event.target;

    //Check if the InnerHTML matches the Answer or Question Property
    if(fc.innerHTML === elem.dataset.question) {
        //Set the innerHTML of the clicked element to its dataset.answer property
        fc.innerHTML = elem.dataset.answer;
    } else {
        //Otherwise set it to the Question
        fc.innerHTML = elem.dataset.question;
    }

} //End of function 'evaluateInput' */

//End JS


