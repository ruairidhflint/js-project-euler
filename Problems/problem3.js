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

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

function largestPrimeFactor(number) {
  //check number itself is not a prime
  if (primeFinder(number)) {
    return number;
  }
  // Initiate array for factors to be pushed to
  let factors = [];
  //take square root of number, loop from 2 upwards checking if any number 
  //is divisible, if so, push it and it's counterpart to array
  for (let i = 2; i <= Math.sqrt(number) / 2; i++) {
    if (number % i === 0) {
      factors.push(i);
      factors.push(number / i);
    }
  }
  //filter through array, checking if any are primes
  const primeFactors = factors.filter(x => {
    return primeFinder(x);
  });
  //return largest value
  return primeFactors[primeFactors.length - 1];
}

console.log(largestPrimeFactor(600851475143));
