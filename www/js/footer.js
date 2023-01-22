/*
Author: Jay Annadurai

Date: 11/15/2022
File: footer.archive
Description: Inserts the Footer of all pages
*/

//-------------------------------------
// Expandable Sections
//-------------------------------------

//Creates an Array that Has All 'innerSection' Divs
const innerSections = document.getElementsByClassName("innerSection");

//Iterate through the entire array of 'innerSection' Div Elements
for (let element = 0; element < innerSections.length; element++) {
    //Add Mouse Click Listeners
    innerSections[element].addEventListener("click", function() {
        //Add the class 'Active' to the Element on Click
        this.classList.toggle("Expanded");

        //Initialize Var to represent the innerSectionBody
        let innerSectionBody = this.nextElementSibling;

        //Toggle CSS to Display the innerSectionBody element
        if (innerSectionBody.style.display === "block") {
            innerSectionBody.style.display = "none";
        } else {
            innerSectionBody.style.display = "block";
        }
    });
}

//-------------------------------------
//Function Section for Footer
//-------------------------------------

//Prints Each Element with <p> tag
//To be used with writeFooter Array's foreach loop
function printFooterElem (element){
    //Opening Tag
    document.write("<div class=\"flexContainerCol\">\n" +
        "        <div>");
    //Content to write
    document.write(element);
    //Closing Tag
    document.write("</div>\n" +
        "    </div>");
}

//Simply puts all the footer elements together within a footer tag
function writeFooter(leftFooter, middleFooter, rightFooter) {
    //Take Input Footer Elements and put into an array
    const footerArray = [leftFooter, middleFooter, rightFooter];

    document.write(
        "<!-- Footer -->\n" +
        "<div id='footer' class=\"flexContainerRow\">"
    );
    footerArray.forEach(printFooterElem)
    document.write("</div> <!-- End of Footer -->");
}

//-------------------------------------
//Raw Input
//-------------------------------------

//Leftmost Element - Typically Class - String
const footerLeft = "";

//Middle Element - Authors - Array of Strings
const authors = [
    "Jay Annadurai",
];

//Last Element - Typically Copyright - String
const footerRight = "";


//Add appropriate spacers into the array
//const footerMiddle = insertDivider(authors);
const footerMiddle = authors.join(" | ");




//-------------------------------------
//Insert End of HTML Page
//-------------------------------------

//Main Body Content in HTML Page...

//Write the footer tag
writeFooter(footerLeft, footerMiddle, footerRight);

//Inject End of Body
document.write(
    "</div> <!-- End of Wrapper Div -->" +
    "</body>" +
    "</html>"
);











//-------------------------------------
//Ignore the below
//Turns out .join is a method >_>
//-------------------------------------

/*
//Takes Elements of an array and adds spaces to odd elements
function insertDivider(array) {
    const length = array.length;
    for (let i=0;  i < (2*length-1); i++){
        if (i === 1) {
            //Do nothing at the start
        }
        else {
            //array.splice method takes index to insert after, amount of elements to remove, elements to add
            array.splice(i-1,0," | ");
            //Increment i an extra time to account for added array element
            i++;
        }
    }
    return array;
}



*/