/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143? 
*/

/* -- Thoughts -- 

-- Check if number itself is a prime number
-- How to find prime numbers? 
-- Make list of all prime numbers smaller than half of entered value?
-- Continue to divide? by increasingly small numbers?
-- Hmm?

- Sieve of Eratosthene / Trial Division
-Square roots?

*/

function primeFinder(n) {
  let isPrime = true;
  if (n > 0 && n <= 2) {
      return isPrime;
  }

  for (let i = 2; i <= Math.sqrt(n); i++){
      if (n % i === 0){
          isPrime = false;
          break;
      }
  }
  return isPrime;
}

console.log(primeFinder(39430));
