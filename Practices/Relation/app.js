


function evaluate(setOne,setTwo){
    //The Ordered Pairs
    let pair = 1;

    //The Relationship Evaluation
    let eval = false;

    //The Sets of Ordered Pairs
    let oPairs = [];

    //Log the Sets to the Console
    console.log(`Set A: ${setOne}`);
    console.log(`Set B: ${setTwo}`);

    for (let setOneElement of setOne) {

        for (let setTwoElement of setTwo) {

            //Execute the Functional Relationship and Check if the Ordered Pairs are Related
            let eval =(setOneElement*2) == (setTwoElement*1) ;

            //If the pair satisfies the relationship condition, add it to a list of ordered pairs
            if (eval) { oPairs.push(`(${setOneElement},${setTwoElement})`)}

            //Generate the Message of the Evaluation to the Console
            let msg = `Evaluation ${pair}: (${setOneElement}, ${setTwoElement}) -> ${eval}`;

            //Log the Evaluation to the Console
            console.log(msg)

            //Increment the Pair
            pair++;

        }//End of Inner Loop to Loop through Set Two Elements
    }//End of Outer Loop to Loop through Set One Elements

    //Log to the Console the Amount of Related Ordered Pairs
    console.log(`Relation R has ${oPairs.length} ordered pairs:`)
    //Log to the Console each Related Ordered Pair
    oPairs.forEach( function (oPair) {
        console.log(oPair);
    });

}//End of Function to Evaluate Relations of Ordered Pairs

const setE = [2, 3, 5];
const setF = [4, 5, 6, 7, 8, 9, 10, 11, 12];

//Execute the Evaluation
evaluate(setE,setF);