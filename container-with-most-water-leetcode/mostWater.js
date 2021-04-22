/**
https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 */


var maxArea = function(height) {
    let maxArea = 0;

    // brute force method O(n^2)
    /*    for(let i=0; i<height.length; i++) {
            for(let j=i+1; j<height.length; j++) {
                let minHeight;
                height[i] >= height[j] ? minHeight = height[j] : minHeight = height[i];
                let width = j-i;
                let area = minHeight * width;
                if(area > maxArea) {
                    maxArea = area;
                }
            }
        }*/


    // Two pointer approach  O(n)
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        let minHeight = height[start] <= height[end] ? height[start] : height[end];
        let width = end - start;
        let area = minHeight * width;
        if (area > maxArea) {
            maxArea = area;
        }
        if (height[start] <= height[end]) {
            start = start + 1;
        } else end = end - 1;
    }

    return maxArea;
};