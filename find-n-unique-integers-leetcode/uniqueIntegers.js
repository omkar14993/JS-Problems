/*
https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

Given an integer n, return any array containing n unique integers such that they add up to 0.
Example 1:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]
*/


/*
-- 1st Approach
Iterate from i=1 ---> i<n and keep track of aggregate sum of all added integers, push the -ve sum of all integers at last index,
Therefore, the sum of all integers will equal 0.

for n =5,
output --> [1,2,3,4,-10]

for n=3
output ---> [1,2,-3]

Time: O(n)
Space: O(n)
*/

function sumZero(n) {
    let result = [];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i === n) {
            result.push(-sum);
            break;
        }
        sum += i;
        result.push(i);
    }
    return result;
};




/*
--- 2nd Approach
if n is even, return resulting array, if n is odd, we need to push 0 into resulting array.

iterate from i=1 until the length of resulting array < n and push i & -i into resulting array, since the size of resulting array should equal to n.

Time: O(n)
Space: O(n)
*/

function sumZero(n) {
    let result = [];
    let val = 1;
    if (n === 1) {
        result.push(0);
        return result;
    } else if (n % 2 !== 0) {
        result.push(0);
    }
    while (result.length < n) {
        result.push(val, -val);
        val++;
    }
    return result;
};