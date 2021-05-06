/*
https://leetcode.com/problems/jump-game-ii/

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
*/



// Greedy algorithm, 
// At each step/index, jump to the index that will take us the farthest.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let maxJumps = 0;
    let i = 0;
    if (nums.length === 1)
        return 0;
    while (i < nums.length) {
        if (nums[i] + i >= nums.length - 1) {
            maxJumps += 1;
            break;
        }
        maxJumps += 1;
        let values = getFarthestJump(i, nums);
        i = values[1] + 0;
    }
    return maxJumps;
}

// get the value at current index, and iterate from index+1 ---> nums[index] and 
// determine the index for farthest jump.
function getFarthestJump(index, nums) {
    let value = nums[index];
    let maxIndex = [0, 0];
    let i = 1;
    while (value > 0) {
        if ((index + i + nums[index + i]) > maxIndex[0]) {
            maxIndex = [index + i + nums[index + i], index + i];
        }
        i++;
        value--;
    }
    return maxIndex;
}