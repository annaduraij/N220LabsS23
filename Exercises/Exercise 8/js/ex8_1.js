//Exercise 8.1 - Is Divisble By Seven

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
            margin: '10px auto',
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

    //Static Field to Hold Console Counter
    static i = 0;

    //Generate the Console Entries
    //The Console Outputs that are then Placed into the Console Container
    //Returns HTMLasJS instance to create JS object to represent the HTML Console
    static generateConsoleEntry (
        innerHTML,
        logLines = true,
        htmlAttributes = {
            id: 'c' + Console.i,
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
        //Append the innerHTML to the console counter
        if(logLines) { innerHTML = `${Console.i}: `+innerHTML;}

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

        //Increment the Static Field Counter
        Console.i++;

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

    //Static Method to Limit Size of Console
    static limitLogSize(logMaxLength = 5) {
        //If the Console Log has more than the Stated Maximum
        while (Console.outputLog.length>(logMaxLength)) {
            //Remove any excess
            //Remove the JS Object Instance from the Console Output Array
            Console.outputLog.shift();
            //Remove the HTML Object from the Page
            Console.obj.get().removeChild(Console.obj.get().lastChild);
        }//End of While Loop
    }





}//End of Console Class

//---------------------------------------------------------
//                   Variable Declarations
//---------------------------------------------------------

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
        flexFlow: 'column warp',
        justifyContent: 'center'
    },
    ''
);

//Create a HTMLasJS Object for the 'Number' Input
//Create HTMLasJS instance to create JS object to represent the HTML
let userInput = new HTMLasJS(
    'input',
    {
        id:'userInput',
        type:'number',
        placeholder: 'Number ÷ 7 ?',
        //Event Listener on Manual Number Change
        onchange:'evaluateInput(userInput,false)',

    },
    {
        width: 'fit-content',
        height: 'fit-content',
        margin: '10px 20px',
        padding: '10px',

        border: '1px solid black',
        borderRadius: '10px',
        color: '#9f0202',
        backgroundColor: '#ffffff',
        textAlign: 'center'
    },
    ''
);

//Create a HTMLasJS Object for the 'Number' Input Confirmation
//Create HTMLasJS instance to create JS object to represent the HTML
let userSubmit = new HTMLasJS(
    'div',
    {
        id:'userSubmit',
        //Event Listener for the Button
        onclick: 'evaluateInput(userInput)',
    },
    {
        width: 'fit-content',
        height: 'fit-content',
        margin: '10px 20px',
        padding: '10px',

        border: '1px solid black',
        borderRadius: '10px',
        color: '#0051cd',
        backgroundColor: '#ffffff',
        textAlign: 'center',

        cursor: 'pointer'
    },
    'Eval!'
);

//---------------------------------------------------------
//                        General JS
//---------------------------------------------------------

//Build the Wrapper Obj using the build method and then Append to HTML Body
pageBody.appendChild(wrapperObj.build());

//Attach the HTMLasJS Input into the Page Wrapper as a child element
wrapperObj.get().appendChild(userInput.build());

//Attach the HTMLasJS Submit into the Page Wrapper as a child element
wrapperObj.get().appendChild(userSubmit.build());

//Build the Console Container into the HTML page
//Append the HTMLasJS instance 'obj' inside the Console Class as the Last Child of the Page Wrapper
pageBody.appendChild(Console.obj.build());

//Build an Event Listener to Execute the Evaluation Function on key up
window.onkeyup(evaluateInput(userInput,false));

//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------


//Parent Function to Fetch Input Value and Evaluate Expression
function evaluateInput (inputObj,enableLogging=true, divisor=7) {

    //Declare a variable to hold the text evaluation of the function
    let eval = '';

    //Bind the User Form Input Value
    let userNumber = inputObj.get().value;

    //Fetch Form Input Value as the Dividend Argument and the Parent Parameter as the Divisor Argument
    //If the Boolean is true,
    if(divisible(userNumber,divisor)){
        //Update the message variable to a string affirming the number's divisibility by seven
        eval = "";
        //Set the Input Object's text color to green
        inputObj.setTextColor('#00b170');
    }
    //Else, if the Boolean is false,
    else {
        //Update the message variable to a string rejecting the number's divisibility by seven
        eval = "not";
        //Set the Input Object's text color to red
        inputObj.setTextColor('#ca1338');
    }

    //If the Function is set to log the Message...
    if(enableLogging) {
        //Declare a variable to hold the final message to the User
        let msg = `The number ${userNumber} is ${eval} cleanly divisible by ${divisor}`;
        //Update the content to the page
        Console.log(msg);
        //Update the content to the console
        console.log(msg);

        //Limit the size of the Console to 3 Messages
        Console.limitLogSize(5);
    }

} //End of function 'evaluateInput'

//Inner function to evaluate the divisibility of a number by seven
function divisible(dividend, divisor) {

    return (dividend%divisor === 0 )

} //End of function 'divisibleBySeven'


