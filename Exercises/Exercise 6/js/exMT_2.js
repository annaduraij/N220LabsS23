//Exercise MT.2 - Rock Paper Scissors Guard

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
                console.log(property,this.style[property]);

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
        let intWithUnit = intWithoutUnit+unit;

        //Return the Integer
        return intWithUnit;
    }//End of Static encodeUnit Method

}//End of HTMLasJS Class


//---------------------------------------------------------
//                   Variable Declarations
//---------------------------------------------------------

    //Bind HTML Document Body to a Variable

    //Create a HTMLasJS Object for the 'choicesContainer'
    //Build Child Node using buildHTML function and then Append to HTML Body 'choicesContainer' as lastChild

    //Create a HTMLasJS Object for the 'console'
    //Build Child Node using buildHTML function and then Append to HTML Body 'choicesContainer' as lastChild

    //Create an Array that Represents the Possible Choices
        //[Rock,Paper,Scissors, and Guard]

    //Build Array to Hold HTMLasJS Objects for Player Choices

//Construct a HTMLasJS Object to Represent the HTML Object in JS
let divObj = new HTMLasJS(
    'div',
    {
        id:"McDiv"
    },
    {
        width: '150px',
        height: '150px',
        margin: 'auto',
        padding: '10px',
        backgroundColor: '#704f09',
        color: 'white',
    },
    'The Chicken Said: ',
    //Unique Property of Clicks
    {clicks: 0}
);

//Log the Created Objected
console.log("HTML as JS Object",divObj);

//---------------------------------------------------------
//                        General JS
//---------------------------------------------------------


    //Iterate through the Array of Player Choices
        //Build HTMLasJS Object for each
            //Set ID to 'choice'+Value
        //Bind HTMLasJS Object to the HTMLasJS Objects Array
        //Build Child Node using buildHTML function and then Append to HTMLasJS Object 'choicesContainer' as lastChild
        //Build EventListener on each HTMLasJS Object
            //On Click, set the PlayerChoice Value to the Original Word
            //Also execute function for Rock Paper Scissors Logic: rps()


//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------
//Rock-Paper-Scissors Logic Function
function rps (playerChoice) {
    //Generate Random Number from 0 to 3
    //Use Number as an Index and get Value from Array of Choices
    //Assign the Value to block-scope variable for Computer's Choice

    //Declare Block-Scope variable for ScoreDelta

    //Conditional Comparison
    //Player Choice and Computer Choice are the Same --> Tie
    if (playerChoice === computerChoice) {
        ScoreDelta = 0;
    }
    //Player Choice is 'Guard' --> Partial Loss
    else if (playerChoice === 'Guard') {
        ScoreDelta = -0.5;
    } else {
        //Player Choice: Rock
        if (playerChoice === 'Rock') {
            //Rock v Paper -> Loss
            if (computerChoice === 'Paper') {
                ScoreDelta = -1;
            }
            //Rock v Scissors -> Win
            if (computerChoice === 'Scissors') {
                ScoreDelta = 1;
            }
        }//End of Conditional Logic on Player Choosing Rock

        //Player Choice: Paper
        if (playerChoice === 'Paper') {
            //Paper v Rock -> Win
            if (computerChoice === 'Rock') {
                ScoreDelta = 1;
            }
            //Paper v Scissors -> Loss
            if (computerChoice === 'Scissors') {
                ScoreDelta = -1;
            }
        }//End of Conditional Logic on Player Choosing Paper

        //Player Choice: Scissors
        if (playerChoice === 'Scissors') {
            //Scissors v Paper -> Win
            if (computerChoice === 'Paper') {
                ScoreDelta = 1;
            }
            //Scissors v Rock -> Loss
            if (computerChoice === 'Rock') {
                ScoreDelta = -1;
            }
        }//End of Conditional Logic on Player Choosing Scissors

    }//End of Conditional Logic Branch to Determine Game Score

//Log the Player and Computer Choices to the 'Console' Obj

    //Log the Score to the 'Console' Obj
    //log(scoreDelta,consoleObj);

}//End of rps() function that contains the game logic


//log function to log a Value to HTMLasJS console Object
function log(msg,consoleObj) {

//If the Incoming Message is a Number, it's a Score Change
if (typeof msg === 'number') {
    //Add the Incoming Score Change to the Existing Score
    consoleObj.extra.score += msg;
    //Create a Msg that States the Player's Score
    msg = 'Player Score: ' + consoleObj.extra.score;
}//End of Conditional on Receiving a Num Msg

//Append Console Object's existing InnerHTML with a line break and then the incoming message
   consoleObj.setInnerHTML(consoleObj.innerHTML + '<br>' + msg);

}//End of function 'log'



