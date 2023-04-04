//------------------------------
//   Ex9.1 - It's Just Average
//------------------------------
/*
Its just average

Create an application that:

Takes in a list of comma-separated numbers from the user
Splits that list into an array of numbers
Converts the string version of the numbers into number versions
Loops through the array and sums up the values
Calculates the average of the array
Displays to the user
The average
The sum
Removes the text from the input so the user can type in new numbers
 */

//General JS
//Create HTML Text Area
//Create Adjacent Button with onclick function
//Create HTML Div below the text input

//Functions
//Parent Function to Fetch Input Value, Convert to Numeric Array, and Evaluate Sum
/* function evaluateInput (inputID,outputID) {

    //Bind HTML Input Element corresponding to inputID to a JS Variable
    //Bind the Value of the HTML Input Element to a variable
    //Set the Value of the HTML Input Element to ''

    //Bind HTML Output Div Element corresponding to outputID to a JS Variable


    //Explode HTML Input Value into an Array based on CSVs and rebind

    //Declare a variable to hold the sum of the HTML Input Array

    //Iterate through the Array of Input Values
        //Use the Number() function to parse the Value of Each Element
        //Increment the Sum by the value of the individual elements

    //Declare a variable to hold the average of the HTML input array
    //Assign it to the value of the sum
    //Divide the value by the length of the input array and rebind

    //Create a Message Var to Hold a Template Literal with the Sum of the Numbers and the Average of the Numbers

    //Update the content of the HTML Output Div with the Message Content

} //End of function 'evaluateInput' */

//End JS

//------------------------------
//  Ex9.2 - Bad Word Catcher
//------------------------------
/*
Bad word catcher with loops

For the purposes of this exercise, bad words are: clear, water, tires.

Create an application that:

Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string


For example, if the user input "clear water is clear", there are 3 bad words in the string.
 */
//General JS
//Create HTML Text Area
//Create Adjacent Button with onclick function
//Create HTML Div below the text input

//Declare a constant array with the bad words, both capitalized and uncapitalized

//Functions
//Parent Function to Fetch Input Value, Convert to Numeric Array, and Evaluate Sum
/* function evaluateInput (inputID,outputID,Array of Bad Words) {

    //Bind HTML Input Element corresponding to inputID to a JS Variable
    //Bind the Value of the HTML Input Element to a variable
    //Set the Value of the HTML Input Element to ''

    //Bind HTML Output Div Element corresponding to outputID to a JS Variable

    //Explode HTML Input Value into an Array based on Spaces

    //Declare an incremental variable to hold the sum of the HTML Input Array
    //Declare an array to hold any found Bad words

    //Iterate through the Array of Input Values
        //Iterate through the Array of Bad Words
            //If Input Value == A Bad Word
                //Then add it to the array of Bad Words
                //Increment the Counter Variable

    //Declare Message Var to Hold a Template Literal with the Message
    //If (BadWords>0) set a template literal confirming bad words were found with the count and array of bad words
    //Else set a template literal confirming no bad words were found

    //Update the content of the HTML Output Div with the Message Content

} //End of function 'evaluateInput' */
//End JS


//------------------------------
//Ex9.3 - Array Bad word catcher
//------------------------------
/*
Bad word catcher with array methods
Recreate the below exercise, but using the array.find and array.includes methods.

For the purposes of this exercise, bad words are: clear, water, tires.

Create an application that:

Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string


For example, if the user input "clear water is clear", there are 3 bad words in the string.


 */

///General JS
//Create HTML Text Area
//Create Adjacent Button with onclick function
//Create HTML Div below the text input

//Declare a constant array with the bad words, both capitalized and uncapitalized

//Functions
//Parent Function to Fetch Input Value, Convert to Numeric Array, and Evaluate Sum
/* function evaluateInput (inputID,outputID,Array of Bad Words) {

    //Bind HTML Input Element corresponding to inputID to a JS Variable
    //Bind the Value of the HTML Input Element to a variable
    //Set the Value of the HTML Input Element to ''

    //Bind HTML Output Div Element corresponding to outputID to a JS Variable

    //Explode HTML Input Value into an Array based on Spaces

    //Declare an incremental variable to hold the sum of the HTML Input Array
    //Declare an array to hold any found Bad words


    //Iterate through the Array of Bad Words
        //If InputValuesArray.includes(BadWords.find)
            //Then add it to the array of Bad Words
            //Increment the Counter Variable

    //Declare Message Var to Hold a Template Literal with the Message
    //If (BadWords>0) set a template literal confirming bad words were found with the count and array of bad words
    //Else set a template literal confirming no bad words were found

    //Update the content of the HTML Output Div with the Message Content

 */
//End JS


//------------------------------
//Ex9.3 - Make Divs
//------------------------------
/*
Make Divs

Given the array

let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];

Write a loop that creates three divs based on the data in the array. You should only have one document.createElement in your code.

 */

///General JS
    //Bind HTML Body as a Variable
    //Define an Array with the Object Literals
    //Iterate through the Array of Object Literals
    //Use HTMLasJS class's .build method to create the elements as children of the HTML Body