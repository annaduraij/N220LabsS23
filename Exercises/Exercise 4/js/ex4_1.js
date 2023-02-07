//Exercise 4.1 - Peak Pixels
//------------------------------------------------------------
//                   Variable Declarations
//------------------------------------------------------------
//Create Obj Literal for Square Div
//Representation of an HTML Object as a JS
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
        backgroundColor: 'green'
    },//End of inner Style Object

}//End of JS Object Literal to represent HTML

//Global Element Variable Such that the Window Object Can be Used
var element = 1;


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
        element = document.createElement(elementObj.tag);

        console.log("HTML Element", element);
        console.log("Window: HTML Element", window['element']);

        //Attach Attributes to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
        for (let attribute in elementObj.attributes){

            //Set Element Attribute
            element.setAttribute(attribute,divObj.attributes[attribute]);

        } //End of forIn Loop

        //Attach Style Properties to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
        for (let property in elementObj.style){

            //Use Global Window Parent Object:
            //https://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string

            /*
            //Add a If-Else Statement to Catch a CamelCase to KebabCase situation
            if (elementObj.style[property] === "backgroundColor") {
                //Overwrite
                window['element']['style']['background-color'] = elementObj.style[property];
            } */
            //Set Element Attribute
            //else {
            console.log(property,elementObj.style[property]);

            //Use the Window Object to Call the 'Object.style.property' Method
            window['element']['style'][property.toString()] = elementObj.style[property];



            //}

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
        elementObj.style.width = elementObj.style.width.split('px')[0];
        elementObj.style.height = elementObj.style.height.split('px')[0];

        //Scale existing JS Object's Height and Width by 10%
        elementObj.style.width *= 1.1;
        elementObj.style.height *= 1.1;

        //Append 'px' unit back on to the end of JS Object's Height and Width Attributes
        elementObj.style.width += 'px';
        elementObj.style.height += 'px';

        //Get the Document Element with ID
        let docElement = document.getElementById(elementObj.attributes.id);

        //Set the Document Elements' New Size Attributes
        docElement.style.width = elementObj.style.width;
        docElement.style.height = elementObj.style.height;

    } //End of function scale()

//------------------------------------------------------------
//                        JS Classes
//------------------------------------------------------------

