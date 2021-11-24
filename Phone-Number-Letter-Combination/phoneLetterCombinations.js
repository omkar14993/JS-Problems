/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
*/


// Time O(4^N * N)
// Space O(N)
var m = new Map();
m.set('2', 'abc');
m.set('3', 'def');
m.set('4', 'ghi');
m.set('5', 'jkl');
m.set('6', 'mno');
m.set('7', 'pqrs');
m.set('8', 'tuv');
m.set('9', 'wxyz');
var result;
var letterCombinations = function(digits) {
    result = [];
    if (digits.length === 0)
        return result;

    backtrack(0, "", digits)
    return result;
};

function backtrack(index, s, digits) {
    if (s.length === digits.length) {
        result.push(s);
        return;
    }
    let values = m.get(digits.charAt(index));
    for (let i = 0; i < values.length; i++) {
        s += values.charAt(i);
        backtrack(index + 1, s, digits);
        s = s.substring(0, s.length - 1);
    }
}