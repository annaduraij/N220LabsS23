//Exercise 4.2 - McDiv'ns
//------------------------------------------------------------
//                   Variable Declarations
//------------------------------------------------------------
//Create Obj Literal for McDiv
        //Properties of 'mcDivObj':
            //tag: 'div'
            //attributes: {id: 'mcDiv', color: black, backgroundColor: 'yellow'}
            //innerHTML: ''
            //clicks: 0

//Representation of an HTML Object as a JS
mcDivObj = {
    //JS-Specific Tracker for Amount of Clicks
    clicks: 0,
    //HTML Tag
    tag:'div',
    //HTML Attributes as internal object
    attributes: {
        //Object DOM ID
        id: 'mcDiv',
        //Object Color
        color: 'black',
        //Object Background Color
        backgroundColor: 'yellow'
    }//End of inner Attributes Object
}//End of JS Object Literal to represent HTML

//------------------------------------------------------------
//                        General JS
//------------------------------------------------------------
//Append Element as Child Node to HTML Body
    //Get and bind HTML Body Element using
    const pageBody = document.getElementsByTagName('body');

    //Build Child Node using buildHTML function and then Append to HTML Body
    pageBody.appendChild(buildHTML(mcDivObj));

//Build Event Listener for HTML Onclick
    //Acquire Element via ID
    let divHTML = document.getElementById(mcDivObj.attributes.id);

    //Attach 'click' Event Listener that runs the mcDiv function
        //Use an Anonymous Function for the mcDiv
    divHTML.addEventListener('click', function () {
        mcDiv (mcDivObj);
    });//End of Anonymous Function



//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------
//Build HTML Element from JS
function buildHTML(elementObj)
{
    //Create HTML Element and Implant into Carrier Variable
    let element = document.createElement(elementObj.tag);

    //Attach Attributes to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
    for (let attribute in elementObj.attributes){

        //Add a If-Else Statement to Catch a CamelCase to KebabCase situation
        if (attribute == "backgroundColor") {
            element.setAttribute(background-color,elementObj.attributes[attribute]);
        }
        //Set Element Attribute
        else {
            element.setAttribute(attribute,divObj.attributes[attribute]);
        }

    } //End of forIn Loop

    //Set Element InnerHTML as dictated by Object Literal
    element.innerHTML = elementObj.innerHTML;

    //Return the Completed HTML Object
    return element;

} //End of function buildHTML()



// Signature Function of the Exercise
// Insert 'mc' into InnerHTML when executed, and once executed 3 times, switch to 'divdivdiv'
// Built into Event Listener
function mcDiv(elementObj)
{
    //Increment existing JS Object's 'clicks' property
    elementObj.clicks ++;

    //Execute Control Structure to Check If Clicks >= 3
    if (elementObj.clicks >= 3){
        //If so, set JS Obj's innerHTML property to 'divdivdiv'
        elementObj.innerHTML = 'divdivdiv';
    } else {
        //Otherwise, append ' mc' onto existing JS Object's innerHTML
        elementObj.innerHTML += ' mc';
    }//End If Else

    //Get the HTML Document Element with ID matching JS Object's ID
    let elementHTML = document.getElementById(elementObj.attributes.id);

    //Set the innerHTML of the HTML Document to match JS Obj
    elementHTML.innerHTML = elementObj.innerHTML;

} //End of function 'mcDiv'



//------------------------------------------------------------
//                        JS Classes
//------------------------------------------------------------

