//Exercise 4.1 - Peak Pixels
//------------------------------------------------------------
//                   Variable Declarations
//------------------------------------------------------------
//Create Obj Literal for Square Div
    //Properties of 'divObj':
        //tag: 'div'
        //attributes: {id: 'squareDiv', width: '100px', height: '100px', backgroundColor: 'green'}

//Representation of an HTML Object as a JS
divObj = {
    //HTML Tag
    tag:'div',
    //HTML Attributes as internal object
    attributes: {
        //Object DOM ID
        id: 'squareDiv',
        //Object Size
        width: '100px',
        height: '100px',
        //Object Background Color
        backgroundColor: 'green'
    }//End of inner Attributes Object
}//End of JS Object Literal to represent HTML


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

    //Attach 'click' Event Listener that runs the Scale Function
        //Use an Anonymous Function for the Scale Function
    divHTML.addEventListener('click', function () {
        scale (divObj);
    }); //End of Anonymous Function inside Listener




//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------
// Build HTML Element from JS
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

        //Return the Completed HTML Object
        return element;

    } //End of function buildHTML()


    // Signature Function of the Exercise
    // Scale the JS Object Size Attributes and Update the HTML
    function scale(elementObj)
    {
        //Split 'px' Unit from JS Object's Height and Width Attributes
            //Split String into Array of Segmented Strings
            //Retain only the first part, [0], which should contain the number
        elementObj.attributes.width = elementObj.attributes.width.split('px')[0];
        elementObj.attributes.height = elementObj.attributes.height.split('px')[0];

        //Scale existing JS Object's Height and Width by 10%
        elementObj.attributes.width *= 1.1;
        elementObj.attributes.height *= 1.1;

        //Append 'px' unit back on to the end of JS Object's Height and Width Attributes
        elementObj.attributes.width += 'px';
        elementObj.attributes.height += 'px';

        //Get the Document Element with ID
        let docElement = document.getElementById(elementObj.attributes.id);

        //Set the Document Elements' New Size Attributes
        docElement.setAttribute('width', elementObj.attributes.width);
        docElement.setAttribute('height', elementObj.attributes.width);

    } //End of function scale()

//------------------------------------------------------------
//                        JS Classes
//------------------------------------------------------------

