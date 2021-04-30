/* 
https://leetcode.com/problems/minimum-path-sum/
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.


Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Input: grid = [[1,2,3],[4,5,6]]
Output: 12

*/


// DP approach, remember/memoize the last result as you go.
var minpathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row === 0 && col === 0) continue;
            else if (row === 0 && col !== 0)
                grid[row][col] = grid[row][col] + grid[row][col - 1];
            else if (col === 0 && row !== 0)
                grid[row][col] = grid[row][col] + grid[row - 1][col];
            else
                grid[row][col] =
                grid[row][col] + Math.min(grid[row - 1][col], grid[row][col - 1]);
        }
    }

    return grid[m - 1][n - 1];
};



// using recursive approach starting from last index,

/*var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    
    return minValue(grid, m-1, n-1)
};

function minValue(grid, row, col) {
    if(row === 0 && col === 0) return grid[row][col];
    else if(row === 0 && col!== 0) return grid[row][col] + minValue(grid, row, col-1);
    else if(col === 0 && row !== 0) return grid[row][col] + minValue(grid, row-1, col);
    else return grid[row][col] + Math.min(minValue(grid,row-1,col), minValue(grid,row,col-1));
}

*/

//------------------------------------------------------------------------------------

/*
// using recursive approach, starting from first index
var minPathSum = function(grid) {
    return minValue(grid, 0, 0)
}

function minValue(grid, row, col) {
    if(row === grid.length-1 && col === grid[0].length-1) return grid[row][col];
    else if(row === grid.length-1 && col!== grid[0].length-1) return grid[row][col] + minValue(grid, row, col+1);
    else if(col === grid[0].length-1 && row !== grid.length-1) return grid[row][col] + minValue(grid, row+1, col);
    else return grid[row][col] + Math.min(minValue(grid, row+1, col), minValue(grid, row, col+1));
}
*/


//------------------------------------------------------------------------------------




// minpathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) ---> 7;