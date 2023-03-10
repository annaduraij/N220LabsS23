//Exercise 9.1 - Peak Pixels

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

            //Get the HTML Object Stored in the Object's Attributes
            let elementHTML = this.html;

            //Override the elementHTML variable with the existing HTML Document entity if the existingObj Arg is True
            if (existingObj) {
                elementHTML = this.get();
            }

            //Create an Array of Numeric Style Properties to Scale
            let styles = [];

            //If Width Scaling is Enabled, Scale the Width
            if (scaleWidth) { styles.push('width') }
            //If Height Scaling is Enabled, Scale the Height
            if (scaleHeight) { styles.push('height') }

            //Increment through Style Properties and Apply Respective Methods to Sale
            for (let i = 0; i < styles.length; i++){
                //Legacy Logs of Conversion Steps
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

                //Take JS Obj Property and Assign to actual HTML Element
                elementHTML['style'][strProperty] = this['style'][strProperty];
                //Log the HTML Representation
                //console.log('HTML CSS ',styles[i],elementObj['style'][strProperty]);

                //If there is no Existing Object
                //Update the Actual HTML Object encoded into the JS Object
                if(!existingObj) { this.html = elementHTML; }

            } //End of for Loop Function

        } //End of function scale()



        // Changes the Background Color of the Provided JS Element Obj to Provided Color and then Updates HTML Object
        this.changeColor = function (color,existingObj = true)
        {
            //Get the HTML Object Stored in the Object's Attributes
            let elementHTML = this.html;

            //Override the elementHTML variable with the existing HTML Document entity if the existingObj Arg is True
            if (existingObj) {
                elementHTML = this.get();
            }

            //Set JS Obj's backgroundColor Attribute to the Provided Color
            this.style.backgroundColor = color.toString();

            //Set the style property of the HTML element to reflect updated JS Object
            elementHTML.style.backgroundColor = this.style.backgroundColor;

            //If there is no Existing Object
            //Update the Actual HTML Object encoded into the JS Object
            if(!existingObj) { this.html = elementHTML; }

        } //End of function 'changeColor'

        // Changes the Background Color of the Provided JS Element Obj to Provided Color and then Updates HTML Object
        this.changeTextColor = function (color,existingObj = true)
        {
            //Get the HTML Object Stored in the Object's Attributes
            let elementHTML = this.html;

            //Override the elementHTML variable with the existing HTML Document entity if the existingObj Arg is True
            if (existingObj) {
                elementHTML = this.get();
            }

            //Set JS Obj's color Attribute to the Provided Color
            this.style.color = color.toString();

            //Set the style property of the HTML element to reflect updated JS Object
            elementHTML.style.color = this.style.color;

            //If there is no Existing Object
            //Update the Actual HTML Object encoded into the JS Object
            if(!existingObj) { this.html = elementHTML; }

        } //End of function 'changeColor'


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

//Construct a HTMLasJS Object to Represent the HTML Object in JS
let divObj = new HTMLasJS(
    'div',
    {
        id:"divvy"
    },
    {
        width: '100px',
        height: '100px',
        margin: 'auto',
        backgroundColor: '#58ff8b'
    }
);

//Log the Created Objected
console.log("HTML as JS Object",divObj);

//---------------------------------------------------------
//                        General JS
//---------------------------------------------------------

//Append Element as Child Node to HTML Body
    //Get and bind HTML Body Element using get Elements by Tag Name
        //Note this Returns an Array, so just get the first Element aka [0]
    const pageBody = document.getElementsByTagName('body')[0];

    //Build Child Node using build method of Obj and then Append to HTML Body
    pageBody.appendChild(divObj.build());

//Build Event Listener for HTML Onclick
    //Attach 'click' Event Listener that runs the Scale Function
    //Use an Anonymous Function for the Scale Function
    divObj.get().addEventListener('click', function () {
        divObj.scale(1.1);
    });//End of Anonymous Function inside Listener




//---------------------------------------------------------
//                       JS Functions
//---------------------------------------------------------

