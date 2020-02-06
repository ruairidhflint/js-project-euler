/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/


/* -- Thoughts -- 

- Start at 2520. 
- Increase in increments on 20 (as 20 is the largest divisor)
- Each number, loop through 1-19 trying to divice...as soon as there is a fail, break

*/

let answer = false;

//function to check if a number is divisible by all numbers from 1-19
function isDivisibleByAllNumbers(num) {
    let isDivisible = true;
    for(let i = 19; i > 0; i--){
        if(num%i !== 0){
            isDivisible = false;
            break;
        }
    }
    return isDivisible;
}

//while loop...starting at the last known value to match 1-10, check each number until true. 
let i = 2520
while (!answer) {
    if(isDivisibleByAllNumbers(i)){
        answer = i;
    }
    else {
        i++
    }
}

console.log(answer);