
/*

Write a loop that prints to the console the numbers 1 to 10, counting forward
- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ], write a loop that generates the string "Indiana! Yeah! University! Yeah! Purdue! Yeah! Indianapolis! Yeah!". Log the string out to the console.
- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ], write a loop that capitalizes the words in the array using the .toUpperCase() string method. Log the modified array out to the console.
- Write a loop that prints to the console the numbers 10 to 1, counting backwards

- Write a loop that prints to the console the first 20 numbers of the Fibonacci sequence ( starting at zero, the next number in the sequence is the sum of the previous two numbers: 0, 1, 1, 2, 3, 5, 8, 13.... and so on

- Given the array: let words = [ "Indiana", "University", "Purdue", "University", "Indianapolis" ], write a loop that reverses the array. Log the reversed array out to the console.

 */

//Forward Loop from 1 -> 10
console.log('1 --> 10')
for (let i = 1; i <= 10; i ++){
    //Log the Individual Number
    console.log(i);
}


//University Chant with Intermediate Words
let words = ["Indiana", "University", "Purdue", "University", "Indianapolis"];
let wordStr = '';
//Pass each University as a Word into a forEach loop
words.forEach( function (word) {
    //Increment onto the wordStr variable
    //Template Literal Parses the Variable
    wordStr += ` ${word}! Yeah!`
})
//Log the white-space trimmed String
console.log('University Chant: ',wordStr.trim());

//Array Loop
//Declare an Array to Contain Values
let wordArray = [];
words.forEach( function (word) {
    //Capitalize Each Word and then Push onto the Array
    wordArray.push(word.toUpperCase());
})
//Log the Final Array Object
console.log('University Capitalized: ', wordArray);

//Reverse Loop from 10 -> 1
console.log('10 --> 1')
for (let j = 10; j >= 1; j --){
    //Log the Value
    console.log(j);
}

//Fibonacci Sequence Printer
console.log('Fibonacci Sequence');
//Store the Previous Sum Outside the Loop
let fiboSeq = 0;
for (let f = 1; f <= 20; f ++){
    //Log the Value
    console.log(`${f}: ${fiboSeq}`);
    fiboSeq = f + fiboSeq;
}
