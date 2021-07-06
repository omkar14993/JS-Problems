/*
https://leetcode.com/problems/move-zeroes/


Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/


/*
Solution: sliding window/pointer approach,
 - Maintain a counter variable which keeps the count of Zeroes encountered while iterating the array, 
 - If we find any non-zero number at any index, move that element to the index at which first zero was encountered, i.e. indexToMove = currentIndex - zeroCounter.


 Example- 
 Input: 1 0 4 6 0 9
  - 1 0 4 6 0 9, slidingBracket = 0, i = 0
  - 1 0 4 6 0 9, slidingBracket = 1, i = 1
  - 1 4 0 6 0 9, slidingBracket = 1, i = 2,  element at i = 2 swapped to index = 1(i - slidingBracket)
  - 1 4 6 0 0 9, slidingBracket = 1, i = 3, element at i = 3 swapped with index = 2(i - slidingBracket)
  - 1 4 6 0 0 9, slidingBracket = 2, i = 4
  - 1 4 6 9 0 0, slidingBracket = 2, i = 5, element at i = 5 swapped with index = 3(i - slidingBracket)
*/

// Time: O(N), iterating the entire array,
// Space: O(1) in-place replacement of elements, since we are not creating a new array to store results
var moveZeroes = function(nums) {
    if (nums.length === 1)
        return nums;

    let slidingBracket = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            slidingBracket++;
            continue;
        } else if (slidingBracket > 0 && nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[i - bracket];
            nums[i - bracket] = temp;
            continue;
        }
    }

    return nums;
};