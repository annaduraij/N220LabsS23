//Exercise MT.1 - UI Navigator

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

//Extend HTMLasJS Class to create new Class called 'UIButton'
//https://javascript.info/class-inheritance
//Extended Class has Signature Methods, 'log', 'setHighlight', and 'unsetHighlight'
class UIButton extends HTMLasJS {

    //Specialized Constructor
    constructor(htmlTag = '',
                htmlAttributes = { },
                cssStyles = {},
                innerHTML = '',
                extraAttributes = { },
                active = false) {

        //Call the Parent Constructor for Most of the Functionality and Pass the incoming values
        super(htmlTag,
            htmlAttributes,
            cssStyles,
            innerHTML,
            extraAttributes
        );

        //Private Variable to Contain Highlight Status
        this.highlightStatus = active;

        //Method 'log' Adds the InnerHTML Value of the Current Div to a specified HTMLasJS Object
        this.log = function (consoleObj) {

            //Create a New Div and Log the InnerHTML of the UIButton inside the new div's innerHTML
            let consoleElementObj = new HTMLasJS(
                'div',
                {
                    class: 'consoleElement'
                },
                {
                    width: 'available',
                    height: 'fit-content',
                    margin: '0px',
                    padding: '6px',

                    border: '0px solid black',
                    borderRadius: '0px',
                    backgroundColor: '#000000',

                    fontSize: '0.8em',
                    color: '#2dbb00',
                    textAlign: 'left'
                },
                this.innerHTML
            );

            //Insert the Console Element Into the Console Container Object
            consoleObj.get().insertBefore(
                //Build the Document Entity of the Console Element Obj
                consoleElementObj.build(),
                //Place Right Before the Console's First Child Element
                //Keeps the Top of the Console Updated
                consoleObj.get().firstElementChild
            );


        }//End of 'log' Method


        //Method 'setHighlight' sets the Style Properties of the Object to Match Exercise Specifications
        this.setHighlight = function (highlightColor = '#60ff90', highlightWeight = 'bold') {

            //Check Highlight Status, Only Execute if Highlight Status is False
            if (!this.highlightStatus) {
                //Store the current color as a reserve color for when the highlight is unset
                this.reserveColor = this.get().style.backgroundColor;
                this.reserveWeight = this.get().style.fontWeight;

                //Use 'super' keyword to use parent class's method
                //Set the Color to a Highlight Color
                this.setColor(highlightColor.toString());

                //Set the Font Weight to a Bold
                this.setFontWeight(highlightWeight.toString());

                //Set the Highlight Status to True
                this.highlightStatus = true;

            }//End of If Statement

        }//End of 'setHighlight' Method

        //Method 'unsetHighlight' is a sister method to 'setHighlight' that unsets the Style Properties of the Object to the original Properties
        this.unsetHighlight = function () {

            //Check Highlight Status, Only Execute if Highlight Status is True
            if (this.highlightStatus) {

                //Use 'super' keyword to use parent class's method
                //Set the Color to a Highlight Color
                this.setColor(this.reserveColor.toString());

                //Set the Font Weight to a Bold
                this.setFontWeight(this.reserveWeight.toString());

                //Unset the Highlight Status to False
                this.highlightStatus = false;

            }//End of If Statement

        }//End of 'unsetHighlight' Method

    }//End of class 'UIButton' constructor

}//End of class 'UIButton' which extends HTMLasJS


//---------------------------------------------------------
//                   Variable Declarations
//---------------------------------------------------------


//Create an Array of 6 Random Words
let dictionary = [
    'Scintillation',
    'Jubilance',
    'Empyrean',
    'Evanescent',
    'Oblivion',
    'Zenith'
];

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

//Build the Wrapper Obj using the build method and then Append to HTML Body
pageBody.appendChild(wrapperObj.build());

//Create Centered Div at the Top of the Screen for the 'Console' Div
//Create HTMLasJS instance to create JS object to represent the HTML
let consoleObj = new HTMLasJS(
    'div',
    {
        id:'console'
    },
    {
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
    'Console:'
);
//Build the Console Obj using the build method and then Append to Wrapper Obj
wrapperObj.get().appendChild(consoleObj.build());

//Create Centered Div in the Middle of the Screen with the 'Dictionary' Div
//Create HTMLasJS instance to create JS object to represent the HTML
let dictionaryContainer = new HTMLasJS(
    'div',
    {
        id:'dictionary'
    },
    {
        width: 'fit-content',
        height: 'fit-content',
        margin: '4px 20px',
        padding: '20px',

        border: '1px solid black',
        borderRadius: '10px',
        backgroundColor: '#89e8a6',
        textAlign: 'center'
    },
    ''
);

//Build the Word Container / 'Dictionary' Obj using the build method and then Append to Wrapper Obj
wrapperObj.get().appendChild(dictionaryContainer.build());


//---------------------------------------------------------
//                        General JS
//---------------------------------------------------------

//Iterate through the Array of Words
//Build UIButton Objects for each word, which extend HTMLasJS functionality
//For Loop to Iterate through Sorted Array of Participant Times
for(let index = 1; index <= dictionary.length; index++)
{
    //Bind Word to a Variable
    //Note Array is 0-based
    let word = dictionary[index-1];

    //ID of the Div to Be Created
    let wordID = 'word'+(index).toString();

    //Use it as an attribute of the Window Object to Make the Objects Accessible Outside the Loop and to Dynamically create variables
    //Instantiate a UIButton Object, extended from HTMLasJS, per Word
    window[wordID] = new UIButton(
        'div',
        {
            id: wordID,
            class:'word'
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
        word // <- InnerHTML Content set to the Word itself
    );

    //Build the HTML Document Entity from the JS Object's 'build' method
    //Append the returned HTML Document Entity as the lastChild of the Dictionary Container Obj (can use the get() method to get the element)
    dictionaryContainer.get().appendChild(window[wordID]['build']());

    //Overwrite the Words in the Array with the UIButton Objects
    dictionary[index-1] = window[wordID];

}//End of For Loop to Iterate Through the Dictionary Array

//Use a forEach loop to Iterate through the Array of UIButton Objects
//Attach an Event Listener to each UIButton
//dictionary.forEach(listener);

//PROBLEM: IT THINKS THE OBJECT FROM THE ARRAY IS A STRING
dictionary.forEach(function (wordObj) {
    //Event Listeners execute another Anonymous Function
    //Use the .get method of the HTMLasJS class and derivatives to get the associated HTML element
    wordObj.get().addEventListener('click',function() {
        //On Event, Iterate Through All 'Word' UIButton Objects
        dictionary.forEach(function (otherWordObj) {
            //Unset the Highlight
            otherWordObj.unsetHighlight()
        })

        //Set the Highlight of the WordObj the Listener is Built on
        wordObj.setHighlight();

        //Log the Change to the Console Object Div
        wordObj.log(consoleObj,wordObj.innerHTML);
    })
});

//Function to Build Event Listener for the UIButton
function listener(wordObj) {

}


//---------------------------------------------------------
//                       JS Functions
//---------------------------------------------------------

