//------------------------------
//   Ex8.1 - Is Divisble By Seven:
//------------------------------
/*
Is Divisible By Seven
Create an application that with an input and a button. When the user clicks on the button, update a div on the page to tell the user if what the user typed into the input is divisible by 7 or not. Use a separate function from the onclick function to discern if it is divisible. This function should return either true if it is divisible  or false if it is not.
 */

//General JS
    //Create HTML Input of Type 'Number'
    //Create Adjacent Button with onclick function
    //Create HTML Div below the text input

//Functions
    //Parent Function to Fetch Input Value and Evaluate Expression
    /* function evaluateInput (inputID,outputID,Divisor=7) {

        //Bind HTML Input Element corresponding to inputID to a JS Variable

        //Bind HTML Output Div Element corresponding to outputID to a JS Variable

        //Declare a variable to hold a message to eventually replace the Output Div's innerHTML content

        //Fetch Value of Document Input Element

        //Bind the boolean return from function divisible(value,divisor) to evaluate divisibility of the input value by 7

        //If the Boolean is true,
            //Update the msg variable to a string affirming the number's divisibility by seven

        //Else, if the Boolean is false,
            //Update the msg variable to a string rejecting the number's divisibility by seven

        //Update the content
    } //End of function 'evaluateInput' */

    //Inner function to evaluate the divisibility of a number by seven
    /* function divisible(dividend, divisor) {

        //return (dividend%divisor === 0 )

     } //End of function 'divisibleBySeven' */
//End JS

//------------------------------
//   Ex8.2 - Make Random
//------------------------------
/*
Make Random

Create a function that generates and returns a random whole number between 0 and 10.
Write a web page to test it by having a button that, when clicked runs a function that: - Uses that function to generate a random number. - Displays that number on the screen. Your final application should have two functions - one to make the random number, and one to handle the click.

 */

//General JS
    //Button with onclick function
    //Create HTML Div adjacent to the text input to display the random number


//Functions
    //Parent Function to Fetch Input Value and Evaluate Expression
    /* function evaluate (outputID,min=0,max=10) {

        //Bind HTML Output Div Element corresponding to outputID to a JS Variable

        //Bind a variable to the result of the randomInt(min,max) function

        //Update the content of the output div to the random value

    } //End of function 'evaluateInput' */

    //Inner function to generate a random integer between two bounds
    /* function randomInt(minimum, maximum) {

        //Generate Random Float from 0 to 1

        //Rebind Minimum Value as the maximum rounded value via Math.ceil

        //Rebind Maximum Value as the minimum rounded value via Math.ceil

        //Normalize Random with Linear Adjustment Scalar (Max - Min)
        //Remember final function is wrapped in Math.floor, so it's rounded down and to counteract that, must raise by 1 (Max - Min + 1)

        //Linear Adjustment of the Random Float by Scalar*Float + Minimum

        //Round down the entire value to preserve accuracy

        //Return the Random Integer

     } //End of function 'randomInt' */

//End JS

//------------------------------
//   Ex8.3 - Cleanup
//------------------------------
/*
Make a function that takes a string, and removes every instance of "#" from the string, and returns the "cleaned up" version without the hashtags/octothorpes.

Write a web page to test the function - one button and input, and one div. When the button is pressed, take the input, use the function to remove the hashtags, and show the result string on the page.d
 */

//General JS
    //Create HTML Input of Type 'text'
    //Create Adjacent Button with onclick function
    //Create HTML Div below the text input

//Functions
    //Parent Function to Fetch Input Value and Evaluate Expression
    /* function evaluateInput (inputID,outputID,character = '#') {

        //Bind HTML Input Element corresponding to inputID to a JS Variable

        //Bind HTML Output Div Element corresponding to outputID to a JS Variable

        //Fetch Value of Document Input Element

        //Update the innerHTML content of the Output Div from function removeChar(string, character)

    } //End of function 'evaluateInput' */

    //Inner function to remove a specified character
    /* function removeChar(stringInput, charToRemove) {

        //return stringInput.replaceAll(charToRemove,"")

     } //End of function 'removeChar' */

//End JS
