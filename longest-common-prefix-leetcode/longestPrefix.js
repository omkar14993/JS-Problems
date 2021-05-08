/*
https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/


// Horizontal Sacnning, compare values of all Strings in the array for each index i.

function longestCommonPrefix(strs) {
    let lcs = '';
    if (strs.length === 1) return strs[0];

    // for each string index, i = 0,1,2,3
    for (let i = 0; i < strs[0].length; i++) {
        let str = strs[0].charAt(i);
        lcs += str;

        // compare values of strings across the array for each index i.
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].charAt(i) === str) continue;
            else {
                lcs = lcs.substring(0, lcs.length - 1);
                return lcs;
            }
        }
    }
    return lcs;
};