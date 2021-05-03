/*

https://leetcode.com/problems/prefix-and-suffix-search/
Design a special dictionary which has some words and allows you to search the words in it by a prefix and a suffix.

Implement the WordFilter class:

WordFilter(string[] words) Initializes the object with the words in the dictionary.
f(string prefix, string suffix) Returns the index of the word in the dictionary which has the prefix prefix and the suffix suffix. If there is more than one valid index, return the largest of them. If there is no such word in the dictionary, return -1


Input
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output
[null, 0]
*/



// This solution will cause TLE.

// TODO: optimal solution.

var WordFilter = function(words) {
    this.dictionary = words;
};

WordFilter.prototype.f = function(prefix, suffix) {
    let result = [-1, 0];
    for (let i = 0; i < this.dictionary.length; i++) {
        let word = this.dictionary[i];

        // calculate Prefix
        let isPre = isPrefix(word, prefix);
        let isSuf = isSuffix(word, suffix);
        console.log(isPre, isSuf, i);
        if (isPre && isSuf && i > result[1]) {
            result = [];
            result.push(i, word.length);
        }
    }
    return result[0];
};

function isPrefix(word, prefix) {
    if (prefix.length === 1)
        return prefix === word.charAt(0);
    else {
        for (let i = 0; i < prefix.length; i++) {
            let isSame = prefix.charAt(i) === word.charAt(i);
            if (!isSame)
                return false;
            else if (isSame && i === prefix.length - 1)
                return true;
            else if (isSame && i < prefix.length)
                continue;

        }
    }
}

function isSuffix(word, suffix) {
    if (suffix.length === 1)
        return suffix === word.charAt(word.length - 1);
    else {
        for (let i = suffix.length - 1, j = word.length - 1; i >= 0; i--, j--) {
            let isSame = suffix.charAt(i) === word.charAt(j);
            if (!isSame)
                return false;
            else if (isSame && i === 0)
                return true;
            else if (isSame && i >= 0)
                continue;

        }
    }
}