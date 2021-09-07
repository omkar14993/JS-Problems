/*
Leetcode 1629. Slowest Key https://leetcode.com/problems/slowest-key/

sample:
Input: releaseTimes = [9,29,49,50], keysPressed = "cbcd"
Output: "c"
Explanation: The keypresses were as follows:
Keypress for 'c' had a duration of 9 (pressed at time 0 and released at time 9).
Keypress for 'b' had a duration of 29 - 9 = 20 (pressed at time 9 right after the release of the previous character and released at time 29).
Keypress for 'c' had a duration of 49 - 29 = 20 (pressed at time 29 right after the release of the previous character and released at time 49).
Keypress for 'd' had a duration of 50 - 49 = 1 (pressed at time 49 right after the release of the previous character and released at time 50).
The longest of these was the keypress for 'b' and the second keypress for 'c', both with duration 20.
'c' is lexicographically larger than 'b', so the answer is 'c'.
*/

// Time :- O(n) since we are iterating over the releaseTimes array to find max release time.
// Space :- O(1), constant space.

var slowestKey = function(releaseTimes, keysPressed) {
    let maxChar = 0;
    let localMax = releaseTimes[0];
    let globalMax = releaseTimes[0];
    for (let i = 1; i < releaseTimes.length; i++) {
        localMax = releaseTimes[i] - releaseTimes[i - 1];
        if (localMax > globalMax) {
            maxChar = i;
            globalMax = localMax
        } else if (localMax === globalMax && keysPressed.charAt(i) > keysPressed.charAt(maxChar)) {
            maxChar = i;
        }
    }
    return keysPressed.charAt(maxChar);
};