

//------------------------------
//        Common Code
//------------------------------
//HTMLasJS Class
//Builds a JS Object that represents a HTML Object
//Previously Built and Shared Across All DOM Exercises
/*
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


 */




//------------------------------
//   Ex5.1 Loop But Big:
//------------------------------
/*
1- Loop, but big

Write a loop that displays in a div the numbers 1000, 2000, 3000, 4000, 5000. There should only be one line of code inside of your loop.
 */

//General JS

    //Create a JS Obj to represent a HTML Div using the HTMLasJS Class

    //Grab Body Element via getElementsByTagName[0]

    //Append the HTML Document Entity returned from the JS Object's 'build' method as lastChild of HTML Body Element

    //Iterate from 1000 to 5000 and increment 1000 on each cycle
    //for(let num = 1000; num <= 5000 ; num += 1000) {
    /*
        //Use JS Object's setInnerHTML method to set the JS's InnerHTML attribute to (existing value of innerHTML + line break + num)
    */
    //} //End of For Loop

//End JS



//------------------------------
//   Ex5.2 - Beep Bop
//------------------------------
/*
2 - Beep Bop

Write a loop that runs 25 times and writes the iterand (current iteration of the loop) out onto the page inside of a div element.

However,

When the iterand is divisible by 3, write the word "beep" instead
When the iterand is divisible by 5, write the word "bop" instead
When the iterand is divisible by 3 AND 5, write "beepbop" instead
 */

//General JS
     //Create a JS Obj to represent a HTML Div using the HTMLasJS Class

    //Grab Body Element via getElementsByTagName[0]

    //Append the HTML Document Entity returned from the JS Object's 'build' method as lastChild of HTML Body Element

    //Iterate from 1 to 25 and increment by one
    //for(let num = 1; num <= 25; num ++) {
    /*

        //Variable to Represent the entity to be appended to the page
        //Initialize variable 'value' to 'num'

        //Waterfall of If Statements to determine values divisibility by 3,5, and both 3 and 5
        //If remainder of the value divided by 3 is zero
            //Then If remainder of the value divided by 5 is zero
                //Then set value  to 'beepbop'

            //Else set value to 'beep'
        //Else if  remainder of the value divided by 5 is zero
            //Then set value to 'bop'

        //End Control Structure

        //Use JS Object's setInnerHTML method to set the JS's InnerHTML attribute to (existing value of innerHTML + line break + value)

    }// End of For Loop */

//End JS

//------------------------------
//   Ex5.3 - Runner Up
//------------------------------
/*
3 - Runner Up

Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.

Then, write the line of code that displays the runner-up times (second and third place) in two different divs.
 */

//General JS
    //Create an Array of Times
        //Const to Define Quantity of Participants
        //Declare an Empty Array to Hold Participants' Times
        //For Loop to Iterate per Participant
            //Generate a Random Time (in Seconds) from 1800 seconds to 6400 seconds
            //Convert Seconds to Hours by dividing by 3600
            //Store each value as a float into the Array

        //Call the minToMax Bubble Sort function to Sort the Array

    //Create a JS Obj to represent a HTML Div using the HTMLasJS Class

    //Grab Body Element via getElementsByTagName[0]


    //For Loop to Iterate through Sorted Array of Participant Times
        //Instantiate a HTMLasJS Object per Time with InnerHTML set to the "{Place}: {Participant Time} s"
        //Build the HTML Document Entity from the JS Object's 'build' method
        //Append the returned HTML Document Entity as the lastChild of the HTML Body Element



//End JS

//JS Functions
/*
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
}//End of Bubble Sort Function 'minToMax'
*/

/*
Bubble Sort Algorithm Test

Assume Random Array of [3,2,7,8,5]

j=0) 0 1 2 3 4
     v
     3 2 7 8 5
i=0) 3 > 2, so
     2 3 7 8 5
i=1)   3 !> 7 so
     2 3 7 8 5
i=2)     7 !> 8 so
     2 3 7 8 5
i=3)       8 > 5 so
     2 3 7 5 8

j=1) 0 1 2 3 4
       v
     2 3 7 5 8
i=1)   3 !> 7, so
     2 3 7 5 8
i=2)     7 > 5, so
     2 3 5 7 8
i=3)       7 !> 8, so
     2 3 5 7 8

j=2) 0 1 2 3 4
         v
     2 3 5 7 8
i=2)     5 !> 7, so
     2 3 5 7 8
i=3)       7 !> 8, so
     2 3 5 7 8

...

 */

//------------------------------
//   Ex5.4 - Favorray
//------------------------------
/*
4 - Favorray

Create a string array. List at least five of your favorite things in that array.

Then, write a loop that writes to a div element each of them, with the string ", is one of my favorite things." after the thing. For instance, one line in the div might say, "Pizza, is one of my favorite things."

 */

//General JS
    //Create an Array of Strings with Favorite Things

        //Call the minToMax Bubble Sort function to Sort the Array

    //Create a JS Obj to represent a HTML Div using the HTMLasJS Class

    //Grab Body Element via getElementsByTagName[0]

    //For Loop to Iterate through Array of Favorite Things
        //Instantiate a HTMLasJS Object per Time with InnerHTML set to the "{FavoriteThingString} is one of my favorite things!"
        //Build the HTML Document Entity from the JS Object's 'build' method
        //Append the returned HTML Document Entity as the lastChild of the HTML Body Element

//End JS