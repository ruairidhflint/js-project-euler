/*The sum of the squares of the first ten natural numbers is,

12+22+...+102=385
The square of the sum of the first ten natural numbers is,

(1+2+...+10)2=552=3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

// Create an array from 0 - 99,
// map over adding 1 to make array 1-100 and also squaring each number in the process
//reduce to a final number
const sumOfSquares = Array.from(Array(100).keys())
  .map(x => Math.pow(x + 1, 2))
  .reduce((x, y) => x + y);

// Create an array from 0 - 99,
// map over adding 1 to make array 1-100 
//reduce to a final number
//square everything
const squareOfSum = Math.pow(
  Array.from(Array(100).keys())
    .map(x => x + 1)
    .reduce((x, y) => x + y),
  2,
);

const answer = squareOfSum - sumOfSquares

console.log(answer);
