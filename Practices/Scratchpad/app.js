//Function to Remove Vowels
function removeVowels(id = 'rawInput'){
    //Array of Vowels to Compare Against
    const vowels = ["A","E","I","O","U"]
    //Acquire Form Element Input
    let stringInput = document.getElementById(id).value;
    //Declare Variable to Hold String Output
    let stringOutput = document.getElementById(id).value;

    //For Each Loop to Iterate through the Vowels and Remove Them
    vowels.forEach( function (vowel) {
        //Remove Upper-Case Vowels
        stringOutput = stringOutput.replace(vowel.toUpperCase(),"");
        //Remove Lower-Case Vowels
        stringOutput = stringOutput.replace(vowel.toLowerCase(),"");
    });//End of forEach Loop to Iterate through Vowels

    //Update the Text Input with the New Value
    document.getElementById(id).value= stringOutput;
    //Log the Input String and Output String to the Console
    console.log(`String In: '${stringInput}' | String Out: '${stringOutput}'`);
}//End of function 'removeVowels' to Remove Vowels from a String



/*
let test = 'Sphinx of Black Quartz, Judge my Vow';

//Counter to Show
let counter = 0;
const vowels = ["A","E","I","O","U"]

function replace(id = 'rawInput'){

    let stringInput = document.getElementById(id).value;
    let stringOutput = stringInput;
    vowels.forEach( function (vowel) {
        stringOutput = stringOutput.replace(vowel.toUpperCase(),"");
        stringOutput = stringOutput.replace(vowel.toLowerCase(),"");
    });

    document.getElementById(id).value= stringOutput;

    counter++;
    console.log(`${counter}) String In: '${stringInput}' | String Out: '${stringOutput}'`);
}
*/