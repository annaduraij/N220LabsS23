//Exercise 4.3 - Over and Out
//------------------------------------------------------------
//                   Variable Declarations
//------------------------------------------------------------
//Create Obj Literal for Square Div
    //Properties of 'divObj':
        //tag: 'div'
        //attributes: {id: 'squareDiv', width: '100px', height: '100px', backgroundColor: 'blue'}


//------------------------------------------------------------
//                        General JS
//------------------------------------------------------------
//Append Element as Child Node to HTML Body
    //Get and bind HTML Body Element using
    const pageBody = document.getElementsByTagName('body');

    //Build Child Node using buildHTML function and then Append to HTML Body
    pageBody.appendChild(buildHTML(divObj));

//Build Event Listener for HTML Onclick
    //Acquire Element via ID
    let divHTML = document.getElementById(divObj.attributes.id);

//Event Listeners and Functions such that the Div is Black during onMouseOver and Blue during onMouseOut
    //Attach 'onmouseover' Event Listener that runs the changeColor Function
        //Use an Anonymous Function for the changeColor with Arguments of divObj,'black'
    divHTML.addEventListener('onmouseover', function () {
        changeColor (divObj,'black');
    });//End of Anonymous Function

    //Attach 'onmouseout' Event Listener that runs the changeColor Function
        //Use an Anonymous Function for the changeColor with Arguments of divObj,'blue'
    divHTML.addEventListener('onmouseout', function () {
        changeColor (divObj,'blue');
    });//End of Anonymous Function


//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------
//Build HTML Element from JS
function buildHTML(elementObj)
{
    //Create HTML Element and Implant into Carrier Variable
    let elementHTML = document.createElement(elementObj.tag);

    //Attach Attributes to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
    for (let attribute in elementObj.attributes){

        //Add a If-Else Statement to Catch a CamelCase to KebabCase situation
        if (attribute == "backgroundColor") {
            elementHTML.setAttribute(background-color,elementObj.attributes[attribute]);
        }
        //Set Element Attribute
        else {
            elementHTML.setAttribute(attribute,divObj.attributes[attribute]);
        }

    } //End of forIn Loop

    //Return the Completed HTML Object
    return elementHTML;

} //End of function buildHTML()



// Signature Function of the Exercise
// Changes the Background Color of the Provided JS Element Obj to Provided Color and then Updates HTML Object
// Built into Event Listener
function changeColor(elementObj,color)
{
    //Set JS Obj's backgroundColor Attribute to the Provided Color
    elementObj.attributes.backgroundColor = color;

    //Get the HTML Document Element with ID matching JS Object's ID
    let elementHTML = document.getElementById(elementObj.attributes.id);

    //Set the attribute of the HTML element to reflect Updated JS Object
    elementHTML.setAttribute(background-color,elementObj.attributes.backgroundColor)

} //End of function 'changeColor'



//------------------------------------------------------------
//                        JS Classes
//------------------------------------------------------------

