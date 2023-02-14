//Exercise 5.3 - Runner Up

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

        // Sets the innerHTML of the JS Object and Updates the HTML Entity's innerHTML as Well
        this.setInnerHTML = function (newInnerHTML, existingObj = true) {

            //Set JS Object's innerHTML Attribute to the Provided innerHTML
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

//Create an Array of Times
//Const to Define Quantity of Participants
const runners = 12;

//Declare an Empty Array to Hold Participants' Times
let runTimes = [];
//Minimum Run Time
const minTime = 1;
//Max Run Time
const maxTime = 4;

//For Loop to Iterate per Participant
for (let i = 0; i < runners; i++){
    //Generate a Random Time (in Hours) from 1 to 4

    //Math.random() produces a float from 0 to 1
    //Standardize to Desired Range: Random Value * Range + Minimum
    //Store Value into Array
    runTimes[i] = Math.random() * (maxTime-minTime) + minTime;

}//End of For Loop to Build Randomized runTimes Array

//Get and bind HTML Body Element using get Elements by Tag Name
//Note this Returns an Array, so just get the first Element aka [0]
const pageBody = document.getElementsByTagName('body')[0];

/*
//Construct a HTMLasJS Object to Represent the HTML Object in JS
let divObj = new HTMLasJS(
    'div',
    {
        id:"divvy"
    },
    {
        width: 'fit-content',
        height: 'fit-content',
        margin: 'auto',
        padding: '10px',
        backgroundColor: '#58ff8b',
        textAlign: 'center'
    },
    'Runner Up'
);

//Log the Created Objected
console.log("HTML as JS Object",divObj);
*/
//---------------------------------------------------------
//                        General JS
//---------------------------------------------------------

//Call the minToMax Bubble Sort function to Sort the Array
runTimes = minToMax(runTimes);

//For Loop to Iterate through Sorted Array of Participant Times
for(let index = 0; index < runTimes.length; index++)
{
    //ID of the Div to Be Created
    let id = 'RunTime_'+(index+1).toString();

    //InnerHTML of the Div = "{Place}: {Participant Time in 2 Digits} h"
    //Number.toFixed is a method that sets the Number to Certain Amount of Digits
    let innerHTML = (index+1).toString()+': '+runTimes[index].toFixed(2)+' h';

    //Use it as an attribute of the Window Object to Make the Objects Accessible Outside the Loop and to Dynamically create variables

    //Instantiate a HTMLasJS Object per Time with
    window[id] = new HTMLasJS(
        'div',
        {
            id:id
        },
        {
            width: 'fit-content',
            height: 'fit-content',
            margin: 'auto',
            padding: '10px',
            backgroundColor: '#58ff8b',
            textAlign: 'center'
        },
        innerHTML
    );
    //console.log(window[id]);
    //Build the HTML Document Entity from the JS Object's 'build' method
    //Append the returned HTML Document Entity as the lastChild of the HTML Body Element
    pageBody.appendChild(window[id]['build']());

}//End of For Loop to Iterate Through the Sorted runTimes Array


//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------

//Bubble Sorts Elements within an Array from Minimum to Maximum
function minToMax (arrayToSort) {
    //True Bubble Sort
    //Iterate Through the Array and Inspect Each Index
    for (let outerIndex = 0; outerIndex < arrayToSort.length; outerIndex++) {

        //Compare Value at the Index to the Next Index, and if it isn't correct, float it to the next Index until it is correct
        for (let innerIndex = outerIndex; innerIndex < arrayToSort.length - 1; innerIndex++) {

            //Bubble Algorithm
            //Compare arrayToSort[outerIndex] to arrayToSort[outerIndex+1]
            //If the first element is greater than the next element
            if (arrayToSort[innerIndex] > arrayToSort[outerIndex + innerIndex]) {
                //Temporarily store the current/'bubble' value
                let bubble = arrayToSort[innerIndex];

                //Move the next element into the current position
                arrayToSort[innerIndex] = arrayToSort[innerIndex + 1];

                //Move the current element to the next spot
                //I.e. float the bubble to the next spot
                arrayToSort[innerIndex + 1] = bubble;
            }//End of Comparison Check

        }//End of Inner Loop to Bubble Values

    } //End of Outer Loop to Inspect Each Index

    //Return the Sorted Array
    return arrayToSort;

}//End of Bubble Sort Function 'minToMax'