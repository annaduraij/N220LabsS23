//Mid-Term Examination 1

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

//Class to Create HTML Console Outputs
//Extends HTMLasJS
//Requires consoleObj to be Built into Page
class Console extends HTMLasJS {
    //Specialized Constructor
    constructor(
        htmlTag = '',
        htmlAttributes = {},
        cssStyles = {},
        innerHTML = '',
        extraAttributes = {},
    ) {

        //Call the Parent Constructor for Most of the Functionality and Pass the incoming values
        super(
            htmlTag,
            htmlAttributes,
            cssStyles,
            innerHTML,
            extraAttributes
        );

    }//End of Constructor

    //Generate the Console
    //Technically is the Container of the Console Output Objects
    //Return HTMLasJS instance to create JS object to represent the HTML Console
    static generateConsole (
        htmlTag = 'div',
        htmlAttributes = { id: 'console'},
        cssStyles = {
            width: 'fit-content',
            height: 'fit-content',
            margin: '4px 20px',
            padding: '10px',

            border: '1px solid black',
            borderRadius: '10px',
            backgroundColor: '#404040',
            color: 'white',
            textAlign: 'center'
        },
        innerHTML = 'Console:',
        extraAttributes = {},
    ){
        //Generate and Return the Console Object
        return new HTMLasJS(
            htmlTag,
            htmlAttributes,
            cssStyles,
            innerHTML,
            extraAttributes
        );
    } //End of Method to Generate Parent/Console Container

    //Store the Individual Console Entries into the Class
    static outputLog = [];

    //Generate the Console Entries
    //The Console Outputs that are then Placed into the Console Container
    //Returns HTMLasJS instance to create JS object to represent the HTML Console
    static generateConsoleEntry (
        innerHTML,
        htmlAttributes = {
            id: 'c' + this.outputLog.length,
            class: 'consoleEntry'
        },
        extraAttributes = {
            active: true
        },
        cssStyles = {
            width: 'available',
            height: 'fit-content',
            margin: '5px 0px',
            padding: '6px',

            border: '0px solid black',
            borderRadius: '5px',
            backgroundColor: '#000000',

            fontSize: '0.8em',
            color: '#70ff60',
            textAlign: 'left'
        },
        htmlTag = 'div'
    ){
        //Generate and Return the Console Object
        return new HTMLasJS(
            htmlTag,
            htmlAttributes,
            cssStyles,
            innerHTML,
            extraAttributes
        );
    } //End of Method to Generate Parent/Console Container

    //Store the Console Object Directly into the Class
    static obj = this.generateConsole();



    //Static Method to Log Information to the Console
    static log(consoleOutput) {

        //Iterate Through All Existing Console Entries
        for (let previousEntry of this.outputLog){
            //If Any are Active, Inactive Them and Set Text Color to a Duller Color
            if(previousEntry.extras.active) {
                previousEntry.setTextColor('#316b2a');
            }
        }

        //Generate the Console Entry
        let entry = this.generateConsoleEntry(consoleOutput);

        //Put the Console Entry into the Console Entry Log
        this.outputLog.push(entry);

        this.obj.get().insertBefore(
            //Build the Document Entity of the Console Element Obj
            entry.build(),

            //Place Right Before the Console's First Child Element
            //Keeps the Top of the Console Updated
            this.obj.get().firstElementChild
        );
    }







}//End of Console Class


//---------------------------------------------------------
//                   Variable Declarations
//---------------------------------------------------------

//Array of Words to Loop Through
let clouds = ["Cirro","Cumulo","Nimbo","Strato"];

//Contains the InnerHTML to Print
let cloudHTML = [];

//Get and bind HTML Body Element using get Elements by Tag Name
//Note this Returns an Array, so just get the first Element aka [0]
const pageBody = document.getElementsByTagName('body')[0];

//Create a Wrapper for the Entire Page
//Wrapper should flex the Containers into Divs
let wrapperObj = new HTMLasJS(
    'div',
    {
        id:'wrapper'
    },
    {
        display: 'flex',
        flexFlow: 'row warp',
        justifyContent: 'center'
    },
    ''
);


//---------------------------------------------------------
//                        General JS
//---------------------------------------------------------

//Build the Wrapper Obj using the build method and then Append to HTML Body
pageBody.appendChild(wrapperObj.build());

//Create the Div to Display Text
let cloudsObj = new HTMLasJS(
    'div',
    {
        id:'clouds'
    },
    {
        width: 'fit-content',
        height: 'fit-content',
        margin: '4px auto',
        padding: '10px',

        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: '#dbe7ea',
        textAlign: 'center'
    },
    iterate(clouds)
);

//Build the Clouds Div into the Wrapper Obj
wrapperObj.get().appendChild(cloudsObj.build());






//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------
//Signature Function that Generates the HTML Content to Go Into the Page
function iterate(arrayWords,repetitions=2){

    //Initialize the Return Variable
    let msgCarrier = "";

    //Outer Loop to Iterate through Words
    for (word of arrayWords){
        //Inner Loop to Do Amount of Repetitions
        for (let i=0;i<repetitions;i++){

            //Add onto
            msgCarrier += word+" ";
        }//End of Inner Loop to Do Amount of Repetitions

    }//End of Outer Loop to Iterate through Words

    //Return the Variable
    return msgCarrier;
}//End of Function Iterate
