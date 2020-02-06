/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

/* -- Thoughts --

- smallest 3 digit by 3 digit number is 10000 (100 * 100)
- largest is 998001( 999 * 999)
- 988001 possible numbers in between. 
- largest palindromic number is 998899 in between those two numbers
- 

*/

let threePalindrome = [];

for (let i = 10000; i < 998002; i++) {
  if (
    i ===
    i
      .toFixed(0)
      .split('')
      .reverse()
      .join('') -
      0
  ) {
    threePalindrome.push(i);
  }
}

function checkIfDivisible(num) {
  let success = false;
  for (let i = 999; i >= 100; i--) {
    if (num % i === 0 && (num/i).toString().length === 3) {
      success = true;
      break;
    }
  }
  return success;
}

let answer;

for (let i = threePalindrome.length - 1; i >= 0; i--) {
  if (checkIfDivisible(threePalindrome[i])) {
    answer = threePalindrome[i];
    break;
  }
}

console.log(answer);
