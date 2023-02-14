//Exercise 4.3 - Over and Out
//------------------------------------------------------------
//                   Variable Declarations
//------------------------------------------------------------
//Create Obj Literal for Square Div
    //Properties of 'divObj':
        //tag: 'div'
        //attributes: {id: 'squareDiv', width: '100px', height: '100px', backgroundColor: 'blue'}

//Representation of an HTML Object as a JS Object
let divObj = {
    //HTML Tag
    tag:'div',
    //HTML Attributes as internal object
    attributes: {
        //Object DOM ID
        id: 'squareDiv',
    },//End of inner Attributes Object
    style: {
        //Object Size
        width: '100px',
        height: '100px',
        //Object Background Color
        backgroundColor: 'blue'
    },//End of inner Style Object

}//End of JS Object Literal to represent HTML

//Global ElementHTML Variable
//Declared Here so that it can be referenced by the Window Object in the BuildHTML function
var elementHTML = 1;

//------------------------------------------------------------
//                        General JS
//------------------------------------------------------------
//Append Element as Child Node to HTML Body
    //Get and bind HTML Body Element using get Elements by Tag Name
        //Note this Returns an Array, so just get the first Element aka [0]
    const pageBody = document.getElementsByTagName('body')[0];
    
    //Build Child Node using buildHTML function and then Append to HTML Body
    pageBody.appendChild(buildHTML(divObj));

//Build Event Listener for HTML Onclick
    //Acquire Element via ID
    elementHTML = document.getElementById(divObj.attributes.id);

//Event Listeners and Functions such that the Div is Black during onMouseOver and Blue during onMouseOut
    //Attach 'onmouseover' Event Listener that runs the changeColor Function
        //Use an Anonymous Function for the changeColor with Arguments of divObj,'black'
    elementHTML.addEventListener('mouseover', function () {
        console.log("Mouse Over!");
        changeColor (divObj,'black');
    });//End of Anonymous Function

    //Attach 'onmouseout' Event Listener that runs the changeColor Function
        //Use an Anonymous Function for the changeColor with Arguments of divObj,'blue'
    elementHTML.addEventListener('mouseout', function () {
        console.log("Mouse Out!");
        changeColor (divObj,'blue');
    });//End of Anonymous Function


//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------
// Build HTML Element from JS Object
function buildHTML(elementObj)
{
    //Create HTML Element and Implant into Carrier Variable
    elementHTML = document.createElement(elementObj.tag);

    //Attach Attributes to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
    for (let attribute in elementObj.attributes){

        //Set elementHTML Attribute
        elementHTML.setAttribute(attribute,divObj.attributes[attribute]);

    } //End of forIn Loop

    //Attach Style Properties to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
    for (let property in elementObj.style){

        //Use Global Window Parent Object:
        //https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string

        //Log the Initial Object Properties
        console.log(property,elementObj.style[property]);

        //Use the Window Object to Call the 'Object.style.property' Method
        window['elementHTML']['style'][property.toString()] = elementObj.style[property];

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
    elementObj.style.backgroundColor = color.toString();

    //Get the HTML Document Element with ID matching JS Object's ID
    let elementHTML = document.getElementById(elementObj.attributes.id);

    //Set the style property of the HTML element to reflect updated JS Object
    elementHTML.style.backgroundColor = elementObj.style.backgroundColor;

} //End of function 'changeColor'



//------------------------------------------------------------
//                        JS Classes
//------------------------------------------------------------

