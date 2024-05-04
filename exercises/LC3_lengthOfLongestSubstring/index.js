// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let Map = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) { // Added 'let' before 'i'
        let windowEnd = s[i];

        if (Map[windowEnd] >= windowStart) {
            windowStart = Map[windowEnd] + 1;
        }

        Map[windowEnd] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }
    return maxLength;
}


module.exports = lengthOfLongestSubstring;
