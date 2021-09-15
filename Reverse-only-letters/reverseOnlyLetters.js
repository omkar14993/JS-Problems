/*

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/




// Time O(N), Space: O(N)
var reverseOnlyLetters = function(s) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let i = 0,
        j = s.length - 1;
    let result = s.split('');

    while (i < j) {
        if (chars.includes(result[i]) && chars.includes(result[j])) {
            let temp = result[i];
            result[i] = s.charAt(j);
            result[j] = temp;
            i++;
            j--;
        } else {
            if (!chars.includes(result[i]))
                i++;
            else if (!chars.includes(result[j]))
                j--;
        }
    }
    return result.join('');
}