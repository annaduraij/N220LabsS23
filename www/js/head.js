/*
Author: Jay Annadurai

Date: 11/15/2022
File: info-css.archive
Description: Injects CSS & References into All Pages
*/

//-------------------------------------
// Function Content
//-------------------------------------


//Create a constant that contains the HTML filename
let fileName = location.href.split("/").slice(-1);
//Remove any URL parameters and arguments from the HTML filename
fileName = fileName.toString().split("?").slice(0,1).toString();

/* Function to Inject Characterset
function injectMeta(charset){
    return  "<meta charset=" + charset + ">" + "\n";
}
//Character Set
const charSet = "utf-8";
*/

//Function to inject Title
function injectTitle(page){
    return  "<title>" + page + "</title>\n";
}

//Function to inject CSS
function injectCSS(css,pathRoot){
    return  "<link href=\"" + pathRoot + "css/" + css + "\" rel=\"stylesheet\" type=\"text/css\">\n";
}

//Refresher on Objects:
//https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/
/*
//Example Page Object that contains Property Information
const page = {
    file: "index",
    name: "CAFE - Page",
    css: "general",
};
*/


//Site Prefix is attached to all Site Titles
const sitePrefix = "Jay - ";
//General CSS is the Standard CSS file
const cssGeneral = 'general.css';

//Function to Create Page Objects
function Page(pageFile, pageTitle,pathRoot) {
    //File of Page, used to match file with title
    this.file = pageFile+".html";
    //Title of HTML Page
    this.title = sitePrefix+pageTitle;
    //Path to Root of Directory, used to reroute all path requests to the Root file
    this.pathtoRoot = pathRoot;
    //Uses function series 'inject' to add HTML elements
    this.injectTitle = injectTitle(this.title);
    //Uses function series 'inject' to add HTML Meta tag
    //this.injectMeta = injectMeta(charSet);
    //Uses function series 'inject' to add HTML elements to general CSS
    this.injectCSSGeneral = injectCSS(cssGeneral,this.pathtoRoot);
    //Creates the combined page head that will be written into the HTML document <head>
    this.injectHead =
        this.injectTitle +
        this.injectCSSGeneral
}


//-------------------------------------
// Injection Content
//-------------------------------------

//Creates New Page Objects
//Home Page
const pageHome = new Page("index","Home",'../');
//Data Source & Dataset Info Page
const pageDataSrc = new Page("labs","Labs",'../');
//'About Me' Page
const pageAboutUs = new Page("me","About Me",'../');

//-------------------------------------
// Actual Injections
//-------------------------------------

//Switch Based on HTML file name
switch (fileName.toString()){

    case pageHome.file:
        document.write(
            //Injects Title, General CSS, and Page-Specific CSS
            pageHome.injectHead
        )
        break;


    case pageDataSrc.file:
        document.write(
            //Injects Title, General CSS, and Page-Specific CSS
            pageDataSrc.injectHead
        )
        break;

    case pageAboutUs.file:
        document.write(
            //Injects Title, General CSS, and Page-Specific CSS
            pageAboutUs.injectHead
        )
        break;

    default:
        //Page Error
        //Default Code

        document.write(
            //Inject Error Title
            injectTitle("Jay") +
            //Inject General CSS, always True
            injectCSS(cssGeneral)
        )
        break;
}
