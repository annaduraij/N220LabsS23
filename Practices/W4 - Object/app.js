
/*
Exercise:

Model (in an object): a bicycle. Include properties for age (in years), and wear (as a number).

Create: A function that accepts a bicycle object. Ages it up one year, and will "destroy" the bicycle by setting its wear to a value of 100, if its age is at 5 or above.

Write: A program that uses that function to age the bicycle 10+ years.

Test: Verify your program works by using console.log(yourObjectname) and checking to see the 'wear' value is at 100 by the end of your function.

 */

//Create Bicycle Object with Properties:
//  Age in Years and Wear in % Worn
let bicycle = {
    age: 0,
    wear: 0
}

//Function to Age an Object
function age(object) {

    //Increment Object's Age property by 1
    object.age += 1;
    //Log Object's Age in the Console
    console.log("Age: ",object.age)

    //If Object's Age exceeds or matches 5 years, set wear value to 100;
    if (object.age >= 5){
        //Wear of 100 corresponds to Object being destroyed
        object.wear = 100;
        //Logs Object's Wear after modifying it
        //Moved to End of For Loop
        //console.log("Wear: ",object.wear)
    }

}

//For Loop instead of p5.js

//Const Years defines 'Years' for Program to Run
const years = 20;

//For Loop that Loops through the 'Years' until it hits the Maximum Year
//On each loop, ages the Bicycle
for(let year = 0; year < years; year++){
    age(bicycle);
}

//Logs the Bicycle on Loop Completion
console.log("Bicycle", bicycle);
