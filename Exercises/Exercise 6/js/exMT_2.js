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

//Class with Create Rock-Paper-Scissors-Guard Game Object
class RPSG {
    //Static Property with Available Options
    static options = ['Rock','Paper','Scissors','Guard'];

    //Static Property with Total Score
    static score = 0;

    //Static Property with Turns
    static turns = 0;

    //Static Property that is a 2D Object Literal with Scoring Rules
    static reference =
        //Outer Object Indexed by Player Choices
        {
            'Rock':
            //Secondary Object for Computer Choices
                {
                    //Rock v Rock = Tie
                    'Rock': 0,
                    //Rock v Paper = Player Loss
                    'Paper': -1,
                    //Rock v Scissors = Player Win
                    'Scissors': 1,
                    //If Computer is Allowed to Guard = Partial Player Win
                    'Guard': 0.5,
                }, //End of Player Choice: 'Rock'

            'Paper':
            //Secondary Object for Computer Choices
                {
                    //Paper v Rock = Player Win
                    'Rock': 1,
                    //Paper v Paper = Player Tie
                    'Paper': 0,
                    //Paper v Scissors = Player Loss
                    'Scissors': -1,
                    //If Computer is Allowed to Guard = Partial Player Win
                    'Guard': 0.5,
                }, //End of Player Choice: 'Paper'
            'Scissors':
            //Secondary Object for Computer Choices
                {
                    //Scissors v Rock = Player Loss
                    'Rock': -1,
                    //Scissors v Paper = Player Win
                    'Paper': 1,
                    //Scissors v Scissors = Player Tie
                    'Scissors': 0,
                    //If Computer is Allowed to Guard = Partial Player Win
                    'Guard': 0.5,
                }, //End of Player Choice: 'Scissors'
            'Guard':
            //Secondary Object for Computer Choices
                {
                    //Regardless of Computer Choice, Response is Always Half a Loss
                    'Rock': -0.5,
                    'Paper': -0.5,
                    'Scissors': -0.5,
                    //If Computer is Allowed to Guard = Tie
                    'Guard': 0,
                } //End of Player Choice: 'Guard'
        } //End of Object Literal 'reference' that Contains a 2D Object with Scoring

    //Static Randomization Method
    //function 'random' Chooses a Random Value Between Two Integers
    //Inclusive of Both Values
    static random(minimum, maximum) {
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
        //let random = Math.floor(baseRandom * scaleRandom + interceptRandom);

        //Return Random Integer
        //return random;

        //Inline Return
        return Math.floor(baseRandom * scaleRandom + interceptRandom);

    }//End of Random Function

    //Method to Generate Computer Choice
    static generateComputerChoice (enableComputerGuard = false) {
        //Declare randomIndex to Store Random Choice
        let randomIndex;

        //If enableComputerGuard is True, select a random option from the entire options array
        if (enableComputerGuard) {
            //Select a Random Number from 0 to the Array Length - 1
            randomIndex = this.random(0,this.options.length-1);
        }

        //Otherwise, select a random element from the Array not including the Guard Element
        else {
            //Select a Random Number from 0 to the Array Length - 2, as the Guard Element is the Last Element
            randomIndex = this.random(0,this.options.length - 2);
        }

        //Debug: Computer Choices
        /*
        console.log("Random Number:",randomIndex);
        console.log("Random Element:",this.options[randomIndex]);
        */

        //Select an Option for the Computer's Choice using the randomized index
        return this.options[randomIndex];
    }

    //Game Logic Method
    static play(playerChoice,enableComputerGuard = false,enableVerboseOutput = true) {

        //Error Handler - Ensure Player Choice is within the Options Array
        if (!this.options.includes(playerChoice)){
            //Alert the User of the Issue
            alert('Invalid Player Selection!');
            //Terminate the Function
            return;
        }

        //Generate Computer Choice
        let computerChoice = this.generateComputerChoice(enableComputerGuard);

        //Increase Number of turns
        this.turns++;

        //Conditional Comparison utilizing Class 'reference' Object
        let scoreDelta = this.reference[playerChoice][computerChoice];

        //Apply scoreDelta to Class's Score
        this.score += scoreDelta;

        //If Verbose Output is Enabled, Return an Object Literal with Properties of Player Choice, Computer Choice, Score
        if (enableVerboseOutput) {
            //Log Message of Results in Natural Language
            let msg;

            //Switch to Evaluate the Match Score Results
            switch (scoreDelta) {
                case -1:
                    msg = 'Loss =('
                    break;
                case -0.5:
                    msg = 'Partial Loss =/'
                    break;
                case 0:
                    msg = 'Tie'
                    break;
                case 0.5:
                    msg = 'Partial Win =)'
                    break;
                case 1:
                    msg = 'Win =D'
                    break;
                default:
                    //Alert User of Error
                    alert('Status of RPSG Game Unknown?');
                    console.log('Error with Result Parse');
                    break;
            }

            //Object Literal
            let results = {
                //Inner Object Literal with Player and Computer Choices
                'choice': {
                    'player': playerChoice,
                    'computer': computerChoice
                },
                'result': {
                    'turn': this.turns,
                    'change': scoreDelta,
                    'msg': msg,
                    'score': this.score
                }
            }
            //Log the Results to the Actual Console
            console.log(`Turn ${this.turns} Results:`,results);

            return results;
        }//End of Verbose Output

        //Otherwise Return New Score
        else { return this.score; }

    }//End of play() function that contains the game logic

}//End of RPSG Class


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
        flexFlow: 'row warp',
        justifyContent: 'center'
    },
    ''
);

//Create a HTMLasJS Object for the 'choicesContainer'
//Create HTMLasJS instance to create JS object to represent the HTML
let choicesContainer = new HTMLasJS(
    'div',
    {
        id:'choices'
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

//---------------------------------------------------------
//                        General JS
//---------------------------------------------------------

//Build the Wrapper Obj using the build method and then Append to HTML Body
pageBody.appendChild(wrapperObj.build());

//Build the Console Container into the HTML page
//Append the HTMLasJS instance 'obj' inside the Console Class as the Last Child of the Page Wrapper
wrapperObj.get().appendChild(Console.obj.build());

//Attach the HTMLasJS Choices Container into the Page Wrapper as its last child
wrapperObj.get().appendChild(choicesContainer.build());

//Create and Array to Hold Player Choice UI Buttons
let choiceButtons = []

//Build Choice Elements for User Interaction
//Iterate through the Possible Options of the Rock-Paper-Scissors-Guard Class
for (let choice of RPSG.options){
    //Build the GUI Buttons as an attribute of the Window Object to Make the Objects Accessible Outside the Loop
    //Instantiate a HTMLasJS Object, per Player Choice
    window[choice] = new HTMLasJS(
        'div',
        {
            //Set ID to 'choose'+choice
            id: 'choose'+choice,
            class:'playerChoice'
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
        choice, // <- InnerHTML Content set to the Word itself
        {'choice': choice} // <- Create an Extra Value Property that Reflects the Original RPSG choice
    );

    //Build the HTML Document Entity from the JS Object's 'build' method
    //Append the returned HTML Document Entity as the lastChild of the Choice  Container Obj (can use the get() method to get the element)
    choicesContainer.get().appendChild(window[choice]['build']());

    //Place the Objects into the Player Choice UI Buttons as Well
    choiceButtons.push(window[choice]);

}//End of forOf Loop to Iterate through Rock-Paper-Scissors-Guard Options and Build HTML Object for Each

//Build Event Listeners on the Array of Player Choice Button Objects
for (let choiceObj of choiceButtons){
    //Event Listeners execute another Anonymous Function
    //Use the .get method of the HTMLasJS class and derivatives to get the associated HTML element
    choiceObj.get().addEventListener('click',function() {
        //Execute the RPSG Play Function and Bind the Results
        let game = RPSG.play(choiceObj.extras.choice)

        //Log the Message to the HTML Console Object
        Console.log(
            //Log the Player and Computer Choices to the 'Console' Obj
            `
             <div style="text-align: center; font-style: italic"> 
             Turn ${game.result.turn} 
             </div><hr>
             Player Chose: ${game.choice.player} <br> 
              Computer Chose: ${game.choice.computer} <hr>
             Outcome: ${game.result.msg} <hr>
             Score: ${game.result.score} <hr>
            `
        )
        //End of Console Log Message

        //If the outputLog's Length Exceeds the Maximum, Delete the first Element
        const logMaxLength = 2;

        //If the Console Log has more than the Stated Maximum
        while (Console.outputLog.length>(logMaxLength+1)) {
            //Remove any excess
            //Remove the JS Object Instance from the Console Output Array
            Console.outputLog.shift();
            //Remove the HTML Object from the Page
            Console.obj.get().removeChild(Console.obj.get().lastChild);
        }//End of While Loop

    }); //End of Anonymous Callback Function on User Click of the Player Choice Buttons

    //Create an Event Handler that changes the Cursor to a Pointer on Hovering over the Button
    //Method of HTMLasJS
    choiceObj.setInteractive();

}//End of Loop to Build Event Listeners for RPSG GUI





//------------------------------------------------------------
//                       JS Functions
//------------------------------------------------------------

//function 'random' Chooses a Random Value Between Two Integers
//Inclusive of Both Values
//Transferred to Class RPSG
/* function random(minimum, maximum) {
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
    let random = Math.floor(baseRandom * scaleRandom + interceptRandom)

    //Return Random
    return random;

}//End of Random Function */


