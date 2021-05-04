/*
https://leetcode.com/problems/maximum-number-of-balloons/
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Input: text = "nlaebolko"
Output: 1

Input: text = "loonbalxballpoon"
Output: 2

*/

var maxNumberOfBalloons = function(text) {
    let result = 'balloon';
    let obj = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    for (let i = 0; i < text.length; i++) {
        if (result.includes(text.charAt(i))) {
            obj[text.charAt(i)] += 1;
        }
    }
    return Math.floor(Math.min(obj.a, obj.b, obj.l / 2, obj.o / 2, obj.n));
};