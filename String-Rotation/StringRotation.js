/*
Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

Examples
leftRotations("abc") ➞ ["abc", "bca", "cab"]

rightRotations("abc") ➞ ["abc", "cab", "bca"]

leftRotations("abcdef") 
➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

rightRotations("abcdef") 
➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

*/

const str = "abc";

function leftRotation(word) {
    let result = [];
    let wordArr = word.split("");
    let maxRotations = wordArr.length - 1;
    let counter = 0;

    while (counter <= maxRotations) {
        result.push(wordArr.join(""));
        wordArr.push(wordArr.shift());
        counter++;
    }
    console.log(result);
}

function rightRotation(word) {
    let result = [];
    let wordArr = word.split("");
    let maxRotations = wordArr.length - 1;
    let counter = 0;

    while (counter <= maxRotations) {
        result.push(wordArr.join(""));
        wordArr.unshift(wordArr.pop());
        counter++;
    }
    console.log(result);
}

leftRotation(str);
rightRotation(str);