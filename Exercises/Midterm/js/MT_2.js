//Mid-Term Examination 2

//---------------------------------------------------------
//                        JS Classes
//---------------------------------------------------------

//Class to Create JS Objects that Represent an HTML Object
class HTMLasJS {
    //Constructor
    //All Arguments can be Objects themselves
    constructor(htmlTag = '',htmlAttributes = {},cssStyles = {},innerHTML = '', extraAttributes = {}) {

        //HTML Tag to Construct Element
        this.tag = htmlTag;
        //HTML Attributes such as ID & Class
        this.attributes = htmlAttributes;

        //Style Properties such as Width & Height
        this.style = cssStyles;

        //InnerHTML Content of the HTML Div Element
        this.innerHTML = innerHTML;

        //Miscellaneous Properties
        this.extras =  extraAttributes;

        //Instance Method to Build HTML Element from JS Object
        this.build = function (returnHTML = true, buildHTML = true)
        {

            //Create HTML Element with correct tag and Implant into Carrier Variable
            let elementHTML = document.createElement(this.tag);

            //Set HTML Element's InnerHTML content
            elementHTML.innerHTML = this.innerHTML;

            //Attach Attributes to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
            for (let attribute in this.attributes){

                //Set elementHTML Attribute
                elementHTML.setAttribute(
                    //Name of Attribute to Set
                    attribute,
                    //Value of Attribute to Set
                    this.attributes[attribute]);

            } //End of forIn Loop for Attributes

            //Attach Style Properties to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
            for (let property in this.style){

                //Log the Initial Object Properties
                //console.log(property,this.style[property]);

                //Can use the Javascript Object as an Array functionality
                //Remember a named function is just a function bound to a name/var

                elementHTML['style'][property.toString()] = this.style[property];

            } //End of forIn Loop for Style Properties

            //If the Method Argument requires Building the HTML Object
            //Set the Attribute of the HTMLasJS Object to Include the HTML Object
            if (buildHTML) { this.html = elementHTML;}

            //If the Method Argument requires Returning the HTML Object
            //Return the Completed HTML Object
            if (returnHTML) {return elementHTML;}


        } //End of method build()

        //Method to Return the Document HTML Entity that Corresponds to this JS Object Entity
        this.get = function() {
            return document.getElementById(this.attributes.id);
        }//End of get Method

        //Scale the JS Object Size Attributes and Update the HTML
        this.scale = function(scalingFactor,scaleWidth = true,scaleHeight = true,existingObj = true)
        {
            //Create an Array of Numeric Style Properties to Scale
            let styles = [];

            //If Width Scaling is Enabled, Scale the Width
            if (scaleWidth) { styles.push('width') }
            //If Height Scaling is Enabled, Scale the Height
            if (scaleHeight) { styles.push('height') }

            //Increment through Style Properties and Apply Respective Methods to Sale
            for (let i = 0; i < styles.length; i++){
                //Legacy: Logs of Conversion Steps
                //Log the Original Object
                //console.log('JS Object', elementObj);
                //Log the Style Object of the elementObj
                //console.log('JS Object: Style', elementObj['style']);
                //Log the Width of the Style Object of the elementObj
                //console.log('JS Object: Style: Width', elementObj['style']['width']);

                //Log the i value
                //console.log(styles[i]);

                //Convert the Property to a String
                let strProperty = styles[i].toString();

                let styleProperty = this['style'][strProperty];
                //Log the Original Representation
                //console.log('Original Value',styles[i],styleProperty);

                //Parse the Unit into an Integer
                styleProperty = this.constructor.decodeUnit(styleProperty);
                //Log the Numeric Representation
                //console.log('Numeric ',styles[i],styleProperty);

                //Scale the Value by the Scaling Factor
                styleProperty *= scalingFactor;
                //Log the Scaled Numeric Representation
                //console.log('Scaled Numeric ',styles[i],styleProperty);

                //Encode the Value and Store into JS Obj
                this['style'][strProperty] = this.constructor.encodeUnit(styleProperty);
                //Log the Encoded Representation
                //console.log('Encoded ',styles[i],elementObj['style'][strProperty]);

                //Overwrite the existing HTML Document entity with the new JS Object Info if the existingObj Arg is True
                if (existingObj) {
                    //Fetch the Actual HTML Element
                    let elementHTML = this.get();

                    //Take JS Obj Property and Assign to actual HTML Element
                    elementHTML['style'][strProperty] = this['style'][strProperty];
                    //Log the HTML Representation
                    //console.log('HTML CSS ',styles[i],elementObj['style'][strProperty]);
                }//End of If Statement to Manage Existing HTML Object

                //Update the Actual HTML Object encoded into the JS Object
                this.build(false,true);

            } //End of for Loop Function

        } //End of function scale()


        //Method to Change the Cursor upon Engaging with an Interactive Element
        this.setInteractive = function () {
            //Create an Event Handler that changes the Cursor to a Pointer on Hovering over the Button
            this.get().addEventListener('mouseover',function () {
                HTMLasJS.docBody.style.cursor = 'pointer';
            })//End of mouseover handler

            //Create an Event Handler that returns the Cursor to default on hovering out of the Button
            this.get().addEventListener('mouseout',function () {
                HTMLasJS.docBody.style.cursor = 'auto';
            })//End of mouseout handler
        }//End of Method to Set the Element as Interactive

        // Changes the Background Color of the Provided JS Element Obj to Provided Color and then Updates HTML Object
        this.setColor = function (color,existingObj = true)
        {

            //Update the JS Object Instance with the New Style Property
            this.style.backgroundColor = color.toString();

            //Update the Actual HTML Object encoded into the JS Object
            this.build(false,true);

            //Overwrite the existing HTML Document entity with the new JS Object Info if the existingObj Arg is True
            if (existingObj) {
                //Set the style property of the existing HTML Obj to reflect updated JS Object
                this.get().style.backgroundColor = this.style.backgroundColor;
            }

        } //End of 'setColor' Setter Method

        // Changes the Text Color of the Provided JS Element Obj to Provided Color and then Updates HTML Object
        this.setTextColor = function (color,existingObj = true)
        {

            //Update the JS Object Instance with the New Style Property
            this.style.color = color.toString();

            //Update the Actual HTML Object encoded into the JS Object
            this.build(false,true);

            //Overwrite the existing HTML Document entity with the new JS Object Info if the existingObj Arg is True
            if (existingObj) {
                //Set the style property of the existing HTML Obj to reflect updated JS Object
                this.get().style.color = this.style.color;
            }

        } //End of 'setTextColor' Setter Method

        // Changes the Font Weight of the Provided JS Element Obj to Provided Weight and then Updates HTML Object
        this.setFontWeight = function (fontWeight,existingObj = true)
        {

            //Update the JS Object Instance with the New Style Property
            this.style.fontWeight = fontWeight.toString();

            //Update the Actual HTML Object encoded into the JS Object
            this.build(false,true);

            //Overwrite the existing HTML Document entity with the new JS Object Info if the existingObj Arg is True
            if (existingObj) {
                //Set the style property of the existing HTML Obj to reflect updated JS Object
                this.get().style.fontWeight  = this.style.fontWeight
            }

        } //End of 'setTextColor' Setter Method

        // Sets the innerHTML of the JS Object and Updates the HTML Entity's innerHTML as Well
        this.setInnerHTML = function (newInnerHTML, existingObj = true) {

            //Set JS Obj's innerHTML Attribute to the Provided innerHTML
            this.innerHTML = newInnerHTML.toString();

            //Update the Actual HTML Object encoded into the JS Object
            this.build(false,true);

            //Overwrite the existing HTML Document entity with the new JS Object Info if the existingObj Arg is True
            if (existingObj) {
                //Set the innerHTML property of the existing HTML Obj to reflect updated JS Object
                this.get().innerHTML = this.innerHTML;
            }

        }//End of innerHTML Setter Method


    }//End of HTMLasJS Obj Constructor

//Static Properties
    static docBody = document.getElementsByTagName('body')[0];

//Static Methods

    //Function to split a property's value and its unit
    static decodeUnit (intWithUnit,unit='px'){
        //Force Unit Suffix to String
        unit.toString();

        //Split the String based on the suffix
        //Return and store the first element aka [0]
        //This should be an integer
        let intWithoutUnit = intWithUnit.split(unit)[0];

        //Trim any Extra Space on the Right
        intWithoutUnit.trimEnd();

        //Return the Integer
        return intWithoutUnit;

    }//End of Static decodeUnit Method

    //Sister Function of decodeUnit that returns the Integer with the Unit
    static encodeUnit (intWithoutUnit,unit='px'){
        //Force Unit Suffix to String
        unit.toString();

        //Force intWithoutUnit to String
        intWithoutUnit = intWithoutUnit.toString();

        //Trim any Extra Space on the Right of the String
        intWithoutUnit.trimEnd();

        //Concatenate with String Addition
        //Joins the integer (as a string) and the unit (as a string)
        //let intWithUnit = intWithoutUnit+unit;

        //Return the Integer
        //return intWithUnit;

        //Inline Return
        return intWithoutUnit+unit;

    }//End of Static encodeUnit Method

    //Static Method 'random' Chooses a Random Value Between Two Integers
    //Inclusive of Both Values
    static randomInt(minimum, maximum) {
        //Set Minimum Value and Round It Up to the Next Value
        minimum = Math.ceil(minimum);
        //Set Maximum Value and Round It Down to the next Value
        maximum = Math.floor(maximum);
        //Generates Random Value
        let baseRandom = Math.random()

        //Normalized Random (Linear Adjustment), remember final function is wrapped in Math.floor, so it's rounded down and to counteract that, must raise by 1
        //Math.round() * Math.Random isn't used here because Math.round under-represents the endpoints
            //Consider 0: to get 0, 0.00 - 0.49 is an accepted value | Consider 1: to get 1, 0.50 - 1.49 is an accepted value
        //Note, if for whatever reason, Math.ceiling is using in the final adjustment, you'd subtract by 1 here to counteract the round up
        let scaleRandom = maximum - minimum + 1

        //Adjust the Value to the Minimum
        let interceptRandom = minimum;

        //Final Random
        let randomInteger = Math.floor(baseRandom * scaleRandom + interceptRandom)

        //Return Random
        return randomInteger;

    }//End of HTMLasJS Static Method 'randomInt'*/

}//End of HTMLasJS Class

//---------------------------------------------------------
//                   Variable Declarations
//---------------------------------------------------------

//Construct a HTMLasJS Object to Represent the HTML Object in JS
let buttonObj = new HTMLasJS(
    'button',
    {
        id:"Reveal"
    },
    {
        display: 'block',
        width: 'fit-content',
        height: 'fit-content',
        margin: 'auto',
        padding: '10px',

        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: '#000000',
        color: 'white',
        textAlign: 'center'
    },
    'Revealed',
    //Unique Property of Clicks
    {clicks: 0}
);

//Log the Created Objected
console.log("HTML as JS Object",buttonObj);

//---------------------------------------------------------
//                        General JS
//---------------------------------------------------------

//Append Element as Child Node to HTML Body
//Get and bind HTML Body Element using get Elements by Tag Name
//Note this Returns an Array, so just get the first Element aka [0]
const pageBody = document.getElementsByTagName('body')[0];

//Build Child Node using build method of Obj and then Append to HTML Body
pageBody.appendChild(buttonObj.build());

//Build Event Listener for HTML Onclick
//Attach 'click' Event Listener that runs the mcDiv function
//Use an Anonymous Function for the mcDiv function
buttonObj.get().addEventListener('click', function () {
    revealer(buttonObj);
});//End of Anonymous Function inside Listener



//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------
// Signature Function of the Exercise
// Built into Event Listener
function revealer(HTMLasJSObj)
{
    //Increment existing JS Object's 'clicks' property
    HTMLasJSObj.extras.clicks ++;

    //Execute Control Structure to Check If Clicks >= 5
    if (HTMLasJSObj.extras.clicks >= 5){
        //If so, set JS Obj's innerHTML property to the amount of clicks
        HTMLasJSObj.innerHTML = 'Clicks: '+ HTMLasJSObj.extras.clicks ;
    } else {
        //Otherwise, do nothing
    }//End If Else

    //Set the innerHTML of the HTML Document Entity to match JS Obj
    HTMLasJSObj.get().innerHTML = HTMLasJSObj.innerHTML;

} //End of function