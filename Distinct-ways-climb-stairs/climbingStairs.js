/*
https://leetcode.com/problems/climbing-stairs/


You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/


/*
Solution 1:  Recursion
To reach nth step, the previous steps could have been n-1^th or n-2^th step.

                        fn(4)

            fn(3)                       fn(2)

    fn(2)           fn(1)

we establish base case where,
for step 2 ---> can be reached in 2 steps (1+1 or 2)
for step 1 ---> can be reached in 1 steps/

*/

var climbStairs = function(n) {
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
}


/*
Solution 2: Recursion with memoization
Time & Space: O(N)
*/

var climbStairs = function(n) {
    let memoObj = {};
    return calculateSteps(n, memoObj);
};

function calculateSteps(number, obj) {
    if (obj[number])
        return obj[number]
    if (number === 1)
        return 1;
    if (number === 2)
        return 2;
    obj[number] = calculateSteps(number - 1, obj) + calculateSteps(number - 2, obj);
    return obj[number];
}

// Another easy to read implementation
var climbStairs = function(n, memo = { 1: 1, 2: 2 }) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

/*
Solution 3: Inserting values into Array using Fibonacci sequence [Dynamic Programming]
if we construct an array where array.length = n (given input) and initialize arr[1] = 1 & arr[2] = 2 as base cases,
The step to reach i^th index in array is the sum of arr[i-1] + arr[1-2]

for example:- 
arr = 1 2 3 5 8 13 21 34
idx = 1 2 3 4 5 6  7  8

for n = 8, steps = 34
for n = 3, steps = 3
*/

// Time & Space O(N), since we are iterating until n & constructing an array of length n.
var climbStairs = function(n) {
    if (n === 1)
        return 1;
    let arr = new Array(n);
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n]
};

/*
Solution 4: use the same DP approach but do not construct a new Array to reduce space to O(1)
Time: O(N)
*/
var climbStairs = function(n) {
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    let first = 1;
    let second = 2;
    let result;
    for (let i = 3; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};