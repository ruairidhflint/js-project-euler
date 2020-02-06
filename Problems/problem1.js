/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

/* Thoughts - 
  .) Multiples of 5 all end in 0 or 5. 
  .) Multiples of 3 can end in any number

  Idea 1 - Loop through all numbers between 1 and 1000. If number is divisible by either 3 or 5, add it to answer. 
  */

 let answer = 0;

 for(let i = 1; i < 1000; i++){
   if(i % 5 === 0 || i % 3 === 0) {
     answer += i;
   }
 }

 console.log(answer + 1);