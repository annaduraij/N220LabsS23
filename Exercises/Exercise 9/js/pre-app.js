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
    //Create Obj Literal for Square Div
        //Properties of 'divObj':
            //tag: 'div'
            //attributes: {id: 'squareDiv', width: '100px', height: '100px', backgroundColor: 'green'}

    //Append Element as Child Node to HTML Body
        //Get and bind HTML Body Element using
            //const pageBody = document.getElementsByTagName('body');

        //Build Child Node using buildHTML function and then Append to HTML Body
            //pageBody.appendChild(buildHTML(divObj));

    //Build Event Listener for HTML Onclick
        //Acquire Element via ID
            //let divHTML = document.getElementById(divObj.attributes.id);

        //Attach 'click' Event Listener that runs the Scale Function
            //Use an Anonymous Function for the Scale Function
            //divHTML.addEventListener('click', function () { scale (divObj); } );




//Functions
    // Build HTML Element from JS
    /* function buildHTML(elementObj)
    {
        //Create HTML Element and Implant into Carrier Variable
        let element = document.createElement(elementObj.tag);

        //Attach Attributes to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
        for (let attribute in elementObj.attributes){

            //Add a If-Else Statement to Catch a CamelCase to KebabCase situation
            if (attribute == "backgroundColor") {
                element.setAttribute(background-color,elementObj.attributes[attribute]);
            }
            //Set Element Attribute
            else {
                element.setAttribute(attribute,divObj.attributes[attribute]);
            }

        } //End of forIn Loop

        //Return the Completed HTML Object
        return element;

    } //End of function buildHTML()
    */

    // Signature Function of the Exercise
    // Scale the JS Object Size Attributes and Update the HTML
    /* function scale(elementObj)
    {
        //Split 'px' Unit from JS Object's Height and Width Attributes
            //Split String into Array of Segmented Strings
            //Retain only the first part, [0], which should contain the number
        elementObj.attributes.width = elementObj.attributes.width.split('px')[0];
        elementObj.attributes.height = elementObj.attributes.height.split('px')[0];

        //Scale existing JS Object's Height and Width by 10%
        elementObj.attributes.width *= 1.1;
        elementObj.attributes.height *= 1.1;

        //Append 'px' unit back on to the end of JS Object's Height and Width Attributes
        elementObj.attributes.width += 'px';
        elementObj.attributes.height += 'px';

        //Get the Document Element with ID
        let docElement = document.getElementById(elementObj.attributes.id);

        //Set the Document Elements' New Size Attributes
        docElement.setAttribute('width', elementObj.attributes.width);
        docElement.setAttribute('height', elementObj.attributes.width);

    } //End of function scale()
    */



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
    //Create Obj Literal for McDiv
        //Properties of 'mcDivObj':
            //tag: 'div'
            //attributes: {id: 'mcDiv', color: black, backgroundColor: 'yellow'}
            //innerHTML: ''
            //clicks: 0

    //Append Element as Child Node to HTML Body
        //Get and bind HTML Body Element using
            //const pageBody = document.getElementsByTagName('body');

        //Build Child Node using buildHTML function and then Append to HTML Body
            //pageBody.appendChild(buildHTML(mcDivObj));

    //Build Event Listener for HTML Onclick
        //Acquire Element via ID
            //let divHTML = document.getElementById(mcDivObj.attributes.id);

        //Attach 'click' Event Listener that runs the mcDiv function
            //Use an Anonymous Function for the mcDiv
            //divHTML.addEventListener('click', function () { mcDiv (mcDivObj); } );


//Functions
    //Build HTML Element from JS
        /* function buildHTML(elementObj)
        {
            //Create HTML Element and Implant into Carrier Variable
            let element = document.createElement(elementObj.tag);

            //Attach Attributes to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
            for (let attribute in elementObj.attributes){

                //Add a If-Else Statement to Catch a CamelCase to KebabCase situation
                if (attribute == "backgroundColor") {
                    element.setAttribute(background-color,elementObj.attributes[attribute]);
                }
                //Set Element Attribute
                else {
                    element.setAttribute(attribute,divObj.attributes[attribute]);
                }

            } //End of forIn Loop

            //Set Element InnerHTML as dictated by Object Literal
            element.innerHTML = elementObj.innerHTML;

            //Return the Completed HTML Object
            return element;

        } //End of function buildHTML()
        */


    // Signature Function of the Exercise
    // Insert 'mc' into InnerHTML when executed, and once executed 3 times, switch to 'divdivdiv'
    // Built into Event Listener
        /* function mcDiv(elementObj)
        {
            //Increment existing JS Object's 'clicks' property
            elementObj.clicks ++;

            //Execute Control Structure to Check If Clicks >= 3
            if (elementObj.clicks >= 3){
                //If so, set JS Obj's innerHTML property to 'divdivdiv'
                elementObj.innerHTML = 'divdivdiv';
            } else {
                //Otherwise, append ' mc' onto existing JS Object's innerHTML
                elementObj.innerHTML += ' mc';
            }//End If Else

            //Get the HTML Document Element with ID matching JS Object's ID
            let elementHTML = document.getElementById(elementObj.attributes.id);

            //Set the innerHTML of the HTML Document to match JS Obj
            elementHTML.innerHTML = elementObj.innerHTML;

        } //End of function 'mcDiv'
        */


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

//General JS

//General JS
    //Create Obj Literal for Square Div
        //Properties of 'divObj':
            //tag: 'div'
            //attributes: {id: 'squareDiv', width: '100px', height: '100px', backgroundColor: 'blue'}

    //Append Element as Child Node to HTML Body
        //Get and bind HTML Body Element using
            //const pageBody = document.getElementsByTagName('body');

        //Build Child Node using buildHTML function and then Append to HTML Body
            //pageBody.appendChild(buildHTML(divObj));

    //Build Event Listener for HTML Onclick
        //Acquire Element via ID
            //let divHTML = document.getElementById(divObj.attributes.id);

    //Event Listeners and Functions such that the Div is Black during onMouseOver and Blue during onMouseOut
        //Attach 'onmouseover' Event Listener that runs the changeColor Function
            //Use an Anonymous Function for the changeColor with Arguments of divObj,'black'
            //divHTML.addEventListener('onmouseover', function () { changeColor (divObj,'black'); } );

        //Attach 'onmouseout' Event Listener that runs the changeColor Function
            //Use an Anonymous Function for the changeColor with Arguments of divObj,'blue'
            //divHTML.addEventListener('onmouseout', function () { changeColor (divObj,'blue'); } );


//Functions
    //Build HTML Element from JS
        /* function buildHTML(elementObj)
        {
            //Create HTML Element and Implant into Carrier Variable
            let elementHTML = document.createElement(elementObj.tag);

            //Attach Attributes to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
            for (let attribute in elementObj.attributes){

                //Add a If-Else Statement to Catch a CamelCase to KebabCase situation
                if (attribute == "backgroundColor") {
                    elementHTML.setAttribute(background-color,elementObj.attributes[attribute]);
                }
                //Set Element Attribute
                else {
                    elementHTML.setAttribute(attribute,divObj.attributes[attribute]);
                }

            } //End of forIn Loop

            //Return the Completed HTML Object
            return elementHTML;

        } //End of function buildHTML()
        */


    // Signature Function of the Exercise
    // Changes the Background Color of the Provided JS Element Obj to Provided Color and then Updates HTML Object
    // Built into Event Listener
        /* function changeColor(elementObj,color)
        {
            //Set JS Obj's backgroundColor Attribute to the Provided Color
            elementObj.attributes.backgroundColor = color;

            //Get the HTML Document Element with ID matching JS Object's ID
            let elementHTML = document.getElementById(elementObj.attributes.id);

            //Set the attribute of the HTML element to reflect Updated JS Object
            elementHTML.setAttribute(background-color,elementObj.attributes.backgroundColor)

        } //End of function 'changeColor'
        */


//End JS
