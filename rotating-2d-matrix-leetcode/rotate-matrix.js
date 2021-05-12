/*
https://leetcode.com/problems/rotate-image/

Given a 2D square matrix (rows = columns), rotate it clockwise

example:
Input:
[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

output:
[
    [7,4,1],
    [8,5,2],
    [9,6,3],
]


Solution:
-Transpose the original matrix (Flipping the values over diagonal, i.e. index 0,1 --> 1,0  index 2,0 --> 0,2).
-Reverse each row of the Transposed matrix.

Here's what the transpose of Input looks like:
[
    [1,4,7],
    [2,5,8],
    [3,6,9],
]


For Anti-clockwise rotation,
-Reverse each row first,
-Transpose the reversed matrix.
*/

const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function rotateMatrix() {
    // generate transpose of the matrix first.  
    for (let i = 0; i < matrix.length; i++)
        for (let j = i; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }

    // reverse each row
    matrix.forEach(val => val.reverse());
    return matrix;
}