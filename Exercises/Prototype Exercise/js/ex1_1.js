//Exercise 1.1: Console Logger
//------------------------------------------------------------
//             Pre-Setup: Variable Declarations
//------------------------------------------------------------
//Declare Variable to Count:
let i;

//------------------------------------------------------------
//     P5 Setup: Variable and Parameter Initializations
//------------------------------------------------------------

function setup(){
    //Initialize Counter Variable 'i' to 0
    i = 0;

    //Create a Div that contains the Counter Info
    //Create a Span inside the Div that contains the Counter Value
    document.getElementById('scriptContainer').innerHTML =
        "<div id=\"counter\">" +
        "                        Counter Variable 'i': \n" +
        "                    <span id=\"counterValue\">\n" +
        "                        0\n" +
        "                    </span>\n" +
        "</div>\n"
    ;
}


//------------------------------------------------------------
//  P5 Draw: Computations and Renderings of Dynamic Entities
//------------------------------------------------------------
//Inherently Loops Once per Frame
function draw(){

    //Update the HTML text's counter value
    document.getElementById('counterValue').innerText = i;

    //Update the counter value into the console
    console.log(i);

    //Increment the Counter
    i++;
}