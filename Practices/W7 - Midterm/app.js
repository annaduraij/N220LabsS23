
/*
In small groups, work on this problem:

Write a function that:

Takes an array of numbers as an argument
Counts how many numbers in the array are above 20
Returns either
(if count is less than three): The count of those numbers
(if count is greater than three): the number -1


Then, test that function by calling it with a few arrays, and logging out the return result.
For instance, sending the array [ 1,2, 25, 21 ] will return "2". Sending the array [ 55, 66, 77, 88, 99 ] will return "-1"



Time permitting:

Figure out how you would write a loop to run the that function on all of these arrays in order:

[ [ 22, 33, 44, 55], [ 1,2,3,4 ], [ 8, 2, 4, 10 ], [ 22,22,22,22 ] ]
 */

//Function
function execusis (arrayX) {
    let count = 0;
    for (let element of arrayX) {
       if(element > 20) { count++};
    }

    if(count > 3) {
        return count-1;
    }

    if(count) {
        return count
    }

    return
}