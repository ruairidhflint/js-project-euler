/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number? */

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

let primeArr = [2, 3, 5, 6, 11, 13];
let i = 14;
while (primeArr.length !== 10001) {
  if (primeFinder(i)) {
    primeArr.push(i);
    i++
  }
  i++
}

console.log(primeArr[primeArr.length -1]);
