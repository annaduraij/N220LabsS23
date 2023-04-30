//---------------------------------------------------------
//                        JS Classes
//---------------------------------------------------------

//Class to Create JS Objects that Represent an HTML Object
class HTMLasJS {
    //Constructor
    //All Arguments can be Objects themselves
    constructor(htmlTag = '',htmlAttributes = {},cssStyles = {},innerHTML = '', htmlDataset= {},extraAttributes = {}) {

        //HTML Tag to Construct Element
        this.tag = htmlTag;

        //HTML Attributes such as ID & Class
        this.attributes = htmlAttributes;

        //HTML Dataset Attributes
        //Note, several Dataset Key: Value pairs may be stored under 'dataset'
        this.dataset = htmlDataset;

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
            //Iterate Through All HTML Attributes
            for (let attributeName in this.attributes){

                //HTML Attribute Value is the Value stored under the Attribute name of the parent attributes property
                let attributeValue = this.attributes[attributeName];

                //Set elementHTML Attribute
                elementHTML.setAttribute(attributeName, attributeValue);

            } //End of forIn Loop for Attributes

            //Attach Datasets to the HTML Div using a for...in... loop [Equivalent of forEach in Associative Arrays]
            //Iterate Through All Dataset Key-Value Pairs
            for (let datasetKey in this.dataset){

                //Dataset Value is the Value stored under the Key of the parent dataset property
                let datasetValue = this.dataset[datasetKey];

                //Set elementHTML Dataset Attribute
                elementHTML.dataset[datasetKey] = datasetValue;

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


        // Sets the Dataset Property of the JS Object and Updates the HTML Entity's Dataset as Well
        this.setDataset = function (datasetKey, datasetValue, existingObj = true) {

            //Set JS Obj's Dataset Property for the Dataset Key to the Dataset Value
            this.dataset[datasetKey] = datasetValue;

            //Update the Actual HTML Object encoded into the JS Object
            this.build(false,true);

            //Overwrite the existing HTML Document entity with the new JS Object Info if the existingObj Arg is True
            if (existingObj) {
                //Bind the Value stored inside the HTMLasJS Object's Dataset Values to the Actual HTML Element it Represents
                this.get().dataset[datasetKey] = this.dataset[datasetKey];
            }

        }//End of Dataset Setter Method

    }//End of HTMLasJS Obj Constructor

    //Static Properties
    static docBody = document.getElementsByTagName('body')[0];

    //Static Methods
    //Shifted to UtilHTML Class

}//End of HTMLasJS Class

//Class with Static HTML Utility Methods
class UtilHTML{
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

    //Static Function to Parse a String from rgb(r,g,b) or rgba(r,g,b,a) to a Color Object
    //Argument is a string color in the format of 'rgb(r,g,b)' or 'rgba(r,g,b,a)'
    static parseColor(colorStr){

        //Trim any extra spaces from the Color String
        colorStr = colorStr.trim();

        //Set the String to Lowercase
        colorStr = colorStr.toLowerCase();

        //Check if the String Contains an Alpha Value
        //Redundant, just check for a fourth array element after stripping the 'rgba(' and ')' from the string
        //let enableAlpha = (colorStr.includes('a('));

        //Should now be in the form of rgb[a](r,g,b[,a]) AKA rgb(r,g,b) or rgba(r,g,b,a)

        //Error Handler- If the colorStr is Empty or Invalid
        if(typeof colorStr !== "string" || colorStr === '') {
            //Log the Error
            console.log("Parsed Color was Invalid",colorStr);
            //Return
            return;
        }

        //Trim the 'rgba(' or 'rgb(' portion by splitting on '('
        colorStr = colorStr.split("(");
        //Grab the string after it, which should be r,g,b[,a])
        colorStr = colorStr[1];

        //Trim the ')' portion at the end by splitting on ')' and grabbing the string before it
        colorStr = colorStr.split(")");
        //Grab the string before it, which should be r,g,b[,a]
        colorStr = colorStr[0];

        //Split the string, which should be now comma separated values
        colorStr = colorStr.split(",");
        //The array should now correspond to [r,g,b,a]
        //Grab the values and store as parsed r, g, b values
        let r = Number(colorStr[0]);
        let g = Number(colorStr[1]);
        let b = Number(colorStr[2]);
        if(colorStr[3] != null)

            //Define the Color Object
            var color = {red: r, green: g, blue: b};

        //If there is a fourth value in the colorStr, that would be the alpha value
        if(colorStr[3] != null) {
            //Parse the Alpha Value
            let a = Number(colorStr[3]);
            //Define the Color Object with the Alpha Property
            color.alpha = a;
        }
        //Return the Color Object
        return color;

    }// End of parseColor function
}

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
            backgroundColor: '#000000',
            color: 'rgb(44,61,58)',
            textAlign: 'center'
        },
        innerHTML = 'Lights On by Jay A',
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
            color: '#ffffff',
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
                previousEntry.setTextColor('#505050');
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
//                        CSS
//---------------------------------------------------------

const css =
    "<style>\n" +
    "    body {\n" +
    "        background-color: rgb(31,31,31);\n" +
    "    }\n" +
    "    .light {\n" +
    "        cursor:pointer;\n" +
    "        background-color: rgb(255,255,255);\n" +
    "        border:solid 2px #101010;\n" +
    "        margin: 5px;\n" +
    "        border-radius: 100%;\n" +
    "        transition: transform 100ms,background-color 200ms;\n" +
    "    }\n" +
    "\n" +
    "    .light:hover {\n" +
    "        transform: scale(0.95);\n" +
    "    }\n" +
    "\n" +
    "    .light.on {\n" +
    "        background: #ffffff radial-gradient(circle farthest-corner at center center, #ffffff 0%, rgba(0,251,255,0.15) 50%, #404040 100%);\n" +
    "        box-shadow:\n" +
    "                0 0 5px 2px #fff,\n" +
    "                0 0 20px 4px #d8f7fa;\n" +
    "    }\n" +
    "\n" +
    "    .light.off{\n" +
    "        background: #0a0a0a radial-gradient(circle farthest-corner at center center, #192323 0%, rgba(20, 20, 20, 0.1));\n" +
    "    }\n" +
    "\n" +
    "</style>";

document.write(css);

//Create a HTMLasJS Object for a Difficulty Input
//Create HTMLasJS instance to create JS object to represent the HTML
let userInput = new HTMLasJS(
    'input',
    {
        id:'userInput',
        type:'number',
        placeholder: 'Size of Puzzle',
        //Event Listener on Manual Number Change
    },
    {
        display: 'block',
        width: 'fit-content',
        height: 'fit-content',
        margin: 'auto auto',
        padding: '10px',

        border: '1px solid black',
        borderRadius: '10px',
        color: '#ffffff',
        backgroundColor: '#000000',
        textAlign: 'center'
    },
    ''
);
//Build the Input onto the Page Body
document.body.appendChild(userInput.build());
//Add an Event Listener to Respond to a Number Change
userInput.get().addEventListener('change',startGame)
//Add an Event Listener to Respond to a Number Change
userInput.get().addEventListener('keyup',startGame)

//Event Listener
function startGame(event) {
    //Get a Previous Game Instance
    let oldGame = document.getElementById('lights-on');
    if(oldGame != null) {
        //Remove the Old Game
        oldGame.remove();
        //Clear the Console
        Console.outputLog = []
        Console.i = 0;
    }

    //Build a New Game Instance
    setupHTMLEnvironment(event);
}



//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------


//Setup Environment Function that Builds the HTML Environment of the Page
function setupHTMLEnvironment(event,maxSize = '80',lightClass = 'light',lightOnClass = 'on',lightOffClass = 'off') {

    //Define gridDimension Based on User Input
    const gridDimension = event.target.value;

    //----------------------------------------//
    //          Grid Helper Function          //
    //----------------------------------------//

    //Helper Function to Define and Return a Square Grid Container as a HTMLasJS Obj
    function gridSquareContainer (gridDimension,maxSize,) {
        //Grab the Viewport Dimensions
        let viewport = { height: window.innerHeight, width: window.innerWidth}

        //If the Height is Greater than the Width, constrain on the Width and vice versa
        let unit = viewport.height >= viewport.width? 'vw':'vh';

        //Define the Size of Each Template Cell
        let cellSize = maxSize/gridDimension;

        //Declare a Variable to Hold Information on Amount of Template Auto Columns
        let gridTemplate = "";

        //Build the Style Attribute that Defines the Amount and Size of Rows and Columns
        //Implicitly Defines the Size of Each Light Cell that is constrained inside the COntainer
        for (let i = 1; i <= gridDimension; i++) {
            //Add an auto to represent each row & column of the Square Grid
            gridTemplate = gridTemplate + cellSize+unit+" ";
        }

        //Define the HTMLasJS Object to Represent the Grid Container
        return new HTMLasJS(
            'div',
            {
                id:'lights-grid',
            },
            {
                //Display a Square Grid with gridTemplate Columns x gridTemplate Rows
                display: 'grid',
                gridTemplateColumns: gridTemplate,
                gridTemplateRows: gridTemplate,
                margin: '0 auto'
            },
        );
    }//End of function 'gridContainer'

    //----------------------------------------//
    //          Light Helper Function         //
    //----------------------------------------//

    //Helper Function to Return a Light HTMLasJS Obj
    //Randomly Activates it or Not
    //Lights have Variable X and Y Unit Positions
    function light (x,y,cssClass = 'light') {
        return new HTMLasJS(
            'div',
            {
                id: `L(${x},${y})`,
                class: cssClass
            },
            {

            },
            '',
            //Establish the Relative Position in the Coordinate Grid
            {'x': x, 'y': y}
        );
    }//End of function 'light'

    //----------------------------------------//
    //               Build Grid               //
    //----------------------------------------//

    //Helper Function to Create the Lights of the Grid
    function gridContents (gridDimensions,lightClass){
        //Define an Empty Array to Hold the Grid Contents
        let gridContents = [];
        //Build the Vertical Rows
        for (let y = 1; y <= gridDimensions; y++) {

            //Build the Horizontal Cells
            for(let x = 1; x <= gridDimensions; x++) {

                //Build a HTMLasJS Light Object with Coordinate Dataset Attributes of (x,y) and Push into the gridContents
                gridContents.push(light(x,y,lightClass))

            }//End of Inner Horizontal Loop

        }//End of Outer Vertical Loop

        //Return the gridContents AKA the Lights
        return gridContents;

    }//End of Function to Build an Array of the Contents of the Grid

    //----------------------------------------//
    //              Grid Builder              //
    //----------------------------------------//

    //Helper Function to Attach the Lights to the Lights Container with a Random On|Off Status
    function gridBuilder (lightsHTMLasJSContainer,lightsHTMLasJSArray,lightOnClass='on',lightOffClass='off') {

        //Build the HTMLasJS Lights Container into an HTML Element
        let htmlContainer = lightsHTMLasJSContainer.build();

        //Iterate through the HTMLasJS Light Objects in the Provided Array
        for (let light of lightsHTMLasJSArray){

            //Build the Light Object into an HTML Element
            let htmlLight = light.build();

            //Randomly Assign the Light to an On/Off class using the JS Float
            //This Class will style the light as being on/off as well as apply for the game logic
            if(Math.random() < 0.2) {
                console.log('This one will be on');
                htmlLight.classList.add(lightOnClass);
            } else {
                htmlLight.classList.add(lightOffClass);
            }

            //Add the Onclick Event Listener to Each Light Element
            htmlLight.addEventListener('click',logic)

            //Append the HTML Light Element into the Array
            htmlContainer.appendChild(htmlLight);
        }//End of Light Appender

        //Return the HTML Container
        return htmlContainer;

    }//End of gridBuilder

    //----------------------------------------//
    //               Build Grid               //
    //----------------------------------------//

    //Function to Assemble the Grid Container and the Grid Elements within
    function grid(gridDimensions,maxSize,lightClass,lightOnClass,lightOffClass){

        //Build the Grid Container
        let gridContainer = gridSquareContainer(gridDimensions,maxSize);

        //Build the Light Objects
        let lights = gridContents(gridDimensions,lightClass);

        //Attach the Grid Contents to the Grid
        //Will Return a Built HTML Grid with the Contents as Children of the HTML Grid Container
        return gridBuilder(gridContainer,lights,lightOnClass,lightOffClass)

    }//End of Function to Assemble the Full Grid and Contents

    //----------------------------------------//
    //              Actual Setup              //
    //----------------------------------------//

    //Wrapper should flex the Containers into Divs
    let wrapperObj = new HTMLasJS(
        'div',
        {
            id:'lights-on',
        },
        {
            //Center the Text Inside
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '2vh'
        },
    );

    //Build the WrapperObj onto the Page
    document.body.appendChild(wrapperObj.build());

    //Build the Lights Grid onto the Wrapper
    wrapperObj.get().appendChild(grid(gridDimension,maxSize,lightClass));

    //Build the Console Container into the HTML page
    //Append the HTMLasJS instance 'obj' inside the Console Class as the Last Child of the Page Wrapper
    wrapperObj.get().appendChild(Console.obj.build());

}//End of the SetupHTMLEnvironment Function

//----------------------------------------//
//               Game Logic               //
//----------------------------------------//


//Game Logic Function that Processes the Game Logic and is the De Facto Callable of Each Interactable Game Element
//Accepts an Event Object as a Parameter
function logic(event) {

    //Fetch the HTML Light Element using the target property of the event
    let selectedLight = event.target;

    //Retrieve Details on the Selected Light's spatial location
    //Redefine the selectedLight as an Object Literal
    selectedLight = {
        html: selectedLight,
        x: Number(selectedLight.dataset['x']),
        y: Number(selectedLight.dataset['y'])
    }

    //Function to Select the Immediately Non-diagonally Proximal Elements
    //Returns an Array of HTML Elements that are Proximal along the x and y
    function selectProximal(x0,y0,range=1) {
        //Declare an Array to hold the Proximal HTML Elements
        const proximalElements = [];

        //For the Horizontal Range from x-range to x+range
        for(let x = x0 - range; x <= x0 + range; x++){
            //If the x coordinate matches the original x coordinate, skip the loop iteration
            if (x === x0) { continue; }

            //Fetch and Bind the HTML Element with the Selected X-Coordinate at the Y0-Coordinate
            const selectors = `[data-x="${x}"][data-y="${y0}"]`;
            //console.log(selectors);
            let element = document.querySelector(selectors);

            //Push the Element into the Array of Proximal Elements
            if(element!=null) { proximalElements.push(element); }
        }//End of X Axis-Selection

        //For the Vertical Range from y-range to y+range
        for(let y = y0 - range; y <= y0 + range; y++){
            //If the x coordinate matches the original y coordinate, skip the loop iteration
            if (y === y0) { continue; }

            //Fetch and Bind the HTML Element with the Selected Y-Coordinate at the X0-Coordinate
            const selectors = `[data-x="${x0}"][data-y="${y}"]`;
            //console.log(selectors);
            let element = document.querySelector(selectors);

            //Push the Element into the Array of Proximal Elements if it's not empty
            if(element!=null) { proximalElements.push(element); }
        }//End of Y Axis-Selection

        //Return the Proximal Elements
        return proximalElements;

    }//End of selectProximal

    //Function to Toggle a Light Element's Class from 'On' to 'Off' or Vice Versa
    function toggleClass(element,lightOnClass = 'on', lightOffClass = 'off'){
        //If the Element has the On Class
        if (element.classList.contains(lightOnClass)) {
            //Replace the On Class with the Off Class
            element.classList.replace(lightOnClass,lightOffClass);
        }
        //Else, the Element must have the Off Class
        else {
            //Otherwise, Replace the Off Class with the On Class
            element.classList.replace(lightOffClass,lightOnClass);
        }
    }//End of toggleClass

    //Retrieve the Proximal Elements to the Selected Light
    let activatedLights = selectProximal(selectedLight.x,selectedLight.y);

    console.log(activatedLights);

    //Push the selected Light itself into the Activated Lights Array
    activatedLights.push(selectedLight.html);

    //Iterate through All the Activated Lights and Toggle Them
    for(let light of activatedLights) {
        toggleClass(light);
    }

    //Function to Evaluate Game Progress
    function evaluate() {
        //Increment the Turn Count
        turns++;

        //Number of Lights that are on
        let numLightsOn = document.querySelectorAll(`.${lightClass}.${lightOnClass}`).length;
        //Number of Lights that are off
        let numLightsOff = document.querySelectorAll(`.${lightClass}.${lightOffClass}`).length;
        //Number of Lights Total
        let numLights = document.querySelectorAll(`.${lightClass}`).length;

        //Progress == Lights On/Total Lights
        let progress = numLightsOn/numLights;

        //If the Player gets to 100% Lights Turned On, Alert them of the Win!
        if(progress===1) { alert(`Congratulations! You completed the game in ${turns} turns! Refresh the Page to restart =)`) }

        //Format Progress as a Percentage
        progress = Math.round(progress*100);

        //Log the Progress to the Console
        Console.log(`${progress}% of ${numLights} Lights | ${numLightsOn} On | ${numLightsOff} Off `);
        //Limit Console Log Size to 3 Message
        Console.limitLogSize(1)
    }

    evaluate();

}//End of Game Logic Function

//----------------------------------------//
//             Final Process              //
//----------------------------------------//

//Global Constants
let turns = 0;
const lightClass = 'light';
const lightOnClass = 'on';
const lightOffClass = 'off';



//setupHTMLEnvironment(gridDimension,maxSize,lightClass,lightOnClass,lightOffClass);






