/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


/* -- Thoughts 
    - Create fiobonacci array that doesn't exceed 4,000,000
    - loop through and add the sums
    - try and simplify to a single operation
*/

// create fibonacci sequence 

function fibonacci(max) {
    const fibArr = [1, 2];

    for(let i = 0; i < max; i++ ){
        if (fibArr[fibArr.length - 1] < max){
        const newNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
        fibArr.push(newNum);
        }
        else {
            break;
        }
    }

    return fibArr.filter(x => (x % 2 === 0)).reduce((total, value) => {
        return total + value;
    })
}

console.log(fibonacci(4000000));
