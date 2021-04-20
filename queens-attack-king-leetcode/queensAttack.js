/*
https://leetcode.com/problems/queens-that-can-attack-the-king/

On an 8x8 chessboard, there can be multiple Black Queens and one White King.

Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.

Example 1:

Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
Explanation:  
The queen at [0,1] can attack the king cause they're in the same row. 
The queen at [1,0] can attack the king cause they're in the same column. 
The queen at [3,3] can attack the king cause they're in the same diagnal. 
The queen at [0,4] can't attack the king cause it's blocked by the queen at [0,1]. 
The queen at [4,0] can't attack the king cause it's blocked by the queen at [1,0]. 
The queen at [2,4] can't attack the king cause it's not in the same row/column/diagnal as the king.

*/

const queens = [
    [0, 1],
    [1, 0],
    [4, 0],
    [0, 4],
    [3, 3],
    [2, 4]
];
const king = [0, 0]

function queensAttacktheKing(queens, king) {
    let result = [];

    const queensMap = {};
    queens.forEach(queen => queensMap[`${queen[0]},${queen[1]}`] = 1);

    let visited = new Array(8).fill(false);

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [-1, -1],
        [-1, 1],
        [1, -1]
    ];

    let steps = 1;

    while (steps < 8) {
        directions.forEach((dir, i) => {
            if (!visited[i]) {
                let x = king[0] + (steps * dir[0]);
                let y = king[1] + (steps * dir[1]);
                if (x < 0 || y < 0 || x > 7 || y > 7) {
                    visited[i] = true;
                } else if (queensMap[`${x},${y}`]) {
                    visited[i] = true;
                    result.push([x, y]);
                }
            }
        });
        steps = steps + 1;
    }

    return result;

};

queensAttacktheKing(queens, king);




/**
 Solution:-
 - create an Object containing queen's index positions
    map = {
        1,0 : 1,
        4,3 : 1,
        2,3 : 1
    }

 - Initialize all the 8 directions in directions[] array
 
 - Initialize each visited direction to be false, visited[]

 - iterate over each of the 8 direction and find if current index is present in the map,
   if yes, make the visited index as true so that we never iterate over that direction in next steps increment.
    for example if we are iterating along direction [1,0] i.e. moving towards right of King at each iteration,
    if queen is found at [1,0] at 3rd iteration, i.e. at [3,0] we mark the visited[] index as true therefore no longer need to iterate towards right further. [4,0], [5,0], [6,0] [7,0].
 */