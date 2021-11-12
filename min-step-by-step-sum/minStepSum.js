/*

https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/



Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.

 
Example 1:

Input: nums = [-3,2,-3,4,2]
Output: 5
Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
                step by step sum
                startValue = 4 | startValue = 5 | nums
                  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
                  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
                  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
                  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
                  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
Example 2:

Input: nums = [1,2]
Output: 1
Explanation: Minimum start value should be positive. 

*/


/*
var minStartValue = function(nums) {
    let startValue = 1;

    while(startValue > 0) {
        let stepValue = nums[0] + startValue;
    
        for(let i=1; i<nums.length; i++) {
            if(stepValue < 1) {
                break;
            }
            
            stepValue+= nums[i];
            
            if(stepValue > 0 && i === nums.length-1)
                return startValue;
            

        }

        startValue++;
    }


    return startValue;
};
*/


// Prefix Total method.
// Intuition: The minimum startValue is the value that makes the minimum element in the STEP-BY-STEP SUMS equal to exactly 1. (i.e. startValue+minStepByStepValue = 1)

// Iterate through the array with startValue set to 0, at each step keep track on the minimum step-by-step value.
// At the end of iteration, we get the minimum step-by-step value, therefore the minimum positive startValue = 1 - minStepByStepValue

// Time Complexity O(N)
// Space O(1)
var minStartValue = function(nums) {
    let startValue = 0;
    let minValue = 0;
    for (let i = 0; i < nums.length; i++) {
        startValue += nums[i];
        minValue = Math.min(startValue, minValue);
    }
    return 1 - minValue;
}