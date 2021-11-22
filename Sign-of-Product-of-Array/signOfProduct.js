/*
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

 

Example 1:

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
*/


/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute Force O(N) Time,
// the product variable can cause overflow in some languages while multiplying each number from nums such that product > 100000
/*
var arraySign = function(nums) {
    let product = 1;
    
    nums.forEach(v => product = v*product);
    
    if(product > 0)
        return 1;
    else if(product < 0)
        return -1;
    else return 0;
    
};
*/

// Optimized O(N) time,
// We keep track of negative numbers in the array and after scanning the entire array if the count of -ve numbers is even, then the product of all numbers will be > 0 else product will be < 0.
// if at any point during iteration if we encounter 0, return 0.
var arraySign = function(nums) {
    let negativeCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0)
            return 0;
        if (nums[i] < 0)
            negativeCount += 1;
    }

    return negativeCount % 2 ? -1 : 1;
}