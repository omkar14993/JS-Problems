/*
Given a number  Find its Prime Factorization:

A Prime number is only divisible by 1 and itself, i.e. 2,3,5,7,11..........

Example: 
Input       Output
14          2*2*2*3
5           5
14          2*7


calculating Prime Factorization of a number:
Start with the lowest Prime i.e. 2 and keep diving the input until the remainder === 0 and Quotient === 1;

24 % 2  Remainder 0     Quotient 12
12 % 2  Remainder 0     Quotient 6
 6 % 2  Remainder 0     Quotient 3
 3 % 2  Remainder !=0, increment the divisor by 1 and check if it's a prime number, ------> XXXXXXXXXXXXX we don't count the divisor of this step in the result since reminder !=0.
 3 % 3  Remainder = 0   Quotient 1

Output: 2 2 2 3
*/


function primeFactor(n) {
    let value = n;
    let result = [];
    let prime = 2;

    while (n > 1) {
        if (n % prime === 0) {
            result.push(prime);
            n = n / prime;
        } else {
            for (let i = prime + 1; i <= value; i++) {
                if (i === value)
                    return value;
                if (isPrime(i)) {
                    prime = i;
                    break;
                }
            }
        }
    }
    return result;
}

function isPrime(v) {
    for (let j = 2; j < v; j++) {
        if (v % j === 0) return false;
    }
    return true;
}