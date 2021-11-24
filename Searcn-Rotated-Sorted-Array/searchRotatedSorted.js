/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
 */

// Find the pivot index first, and then perform binary search on specific range based on pivot index value
// TIME O(logN),
// Space O(1)
/*
var possiblePaths = [];
var search = function(nums, target) {
    
    let pivotIndex = findPivot(0,nums.length-1,nums,target);
    console.log(pivotIndex)
    
    // If pivotIndex contains target value
    if(nums[pivotIndex] === target)
        return pivotIndex;
    
    // If the array is not rotated perform binary search on entire array, i.e. pivotIndex = 0
    else if(pivotIndex === 0)
        return binarySearch(0,nums.length-1,nums,target);
    
    // First index is greater than Target, search on the right side of pivotIndex
    else if(nums[0] > target)
        return binarySearch(pivotIndex+1,nums.length-1,nums,target);
    
    // else, search on the left side of pivotIndex
    else return binarySearch(0,pivotIndex-1,nums,target);
    
};

function findPivot(left, right, nums, target) {
    while(left<= right) {
        let pivot = Math.round((right+left)/2);
        
        if(nums[pivot] > nums[pivot+1]) {
            return pivot+1;
        } else {
            if(nums[pivot] < nums[left])
                right = pivot-1;
            else left = pivot+1
        }
        
    }
    
    return 0;
}

function binarySearch(start, end, nums, target) {
    if(start > end) {
        return -1;       
    }
    
    let mid = Math.round((start+end)/2);
    
    if(nums[mid] === target) {
        return mid;
    }

    else {
        if(target > nums[mid])
            return binarySearch(mid+1,end,nums,target);
        else return binarySearch(start,mid-1,nums,target);
    }
}
*/

// One pass binary search
// TIME O(Log N)
// Space O(N)
var search = function(nums, target) {
    return binarySearch(0, nums.length - 1, nums, target);
}

function binarySearch(start, end, nums, target) {
    if (start > end)
        return -1;

    let mid = Math.round((start + end) / 2);


    if (nums[mid] === target)
        return mid;

    let [nonRotatedStart, nonRotatedEnd] = [-1, -1];
    if (nums[start] < nums[mid]) {
        if (target >= nums[start] && target <= nums[mid])
            return binarySearch(start, mid - 1, nums, target);
        else return binarySearch(mid + 1, end, nums, target);
    } else {
        if (target >= nums[mid] && target <= nums[end])
            return binarySearch(mid + 1, end, nums, target);
        else return binarySearch(start, mid - 1, nums, target);
    }

}