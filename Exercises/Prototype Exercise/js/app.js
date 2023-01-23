//Applet to cycle between the exercises

//------------------------------------------------------------
//                   JS Editable Constants
//------------------------------------------------------------

//Exercise Number
const EXERCISE = 1;
//Number of Sub Exercises
const SUB_EXERCISES = 3;
//Path to JS Folder - REQUIRED for function 'runScript'
const PATH_JS = 'js/';

//------------------------------------------------------------
//                        JS Code
//------------------------------------------------------------

//Adds a Script into the Page
addScript(getURLParam("script"));

//Builds Event Listeners for as Defined Exercises
for(let i =1; i <= SUB_EXERCISES; i++){
    //Create Name of JS File
    let ex = 'ex'+EXERCISE+'_'+i;

    //Copy DOM Element ID
    let exID = document.getElementById(ex);

    //Create Event Listeners that Append the Desired Script's filename into the URL on DOM Element Click
    exID.addEventListener("click", function (){
        appendURLParam('script',ex)
    });
}

//------------------------------------------------------------
//                        JS Functions
//------------------------------------------------------------

//Function 'addScript' appends a JS Script to the Document via Document.write
function addScript(scriptFileName){

    //Set the file extension of the Script File
    const fileExtension ='.js';

    //Write into the DOM a HTML Script Tag with the source set to the function argument
    document.write(
        "<script src="+ "\'"+
            PATH_JS +
                scriptFileName +
            fileExtension +
        "\'"+ ">\n" +
        "</script>\n"
    )

}//End of Function 'addScript'

//Function to Append Search Parameters to the URL
function appendURLParam (parameter,input){
    //Creates URL Search Params Object
    let URL = new URLSearchParams(location.search);
    //Built-in Method to Add a URL Parameter
    URL.set(parameter,input);
    //Convert the URL Search Params Object to a string and then set the URL to that
    window.location.search = URL.toString();

}//End of Function 'appendURLParam'

//Function to Gather Search Parameter Information
function getURLParam(parameter){
    //Creates URL Search Params Object
    let URL = new URLSearchParams(location.search);

    //Control Structure to Evaluate if URL actually has the Search Parameter in the First Place
        //Built-In Method to do a Boolean Check for the Desired URL Parameter
    if (URL.has(parameter)){
        //Built-in Method to Retrieve the Desired URL Parameter
        return URL.get(parameter);
    } else {
        //Log Error to Console
        console.log("Error, URL Parameter does not Exist");
    }

}//End of Function 'getURLParam'