// https://leetcode.com/problems/best-sightseeing-pair/

/**
you are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.

The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.

Return the maximum score of a pair of sightseeing spots.

 

Example 1:

Input: values = [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
 */



// Brute Force solution, O(N^2);
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0;

    // O(N^2), brute force method
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            let score = values[i] + values[j] + i - j;
            maxScore = score > maxScore ? score : maxScore;
        }
    }
    return maxScore;
};




// O(N), using two pointers to keep track
var maxScoreSightseeingPair2 = function(values) {
    let maxScore = 0;
    let currentMax = values[0]

    for (let i = 1; i < values.length; i++) {
        maxScore = Math.max(maxScore, currentMax + values[i] - i);
        currentMax = Math.max(currentMax, values[i] + i);
    }
    return maxScore;
}