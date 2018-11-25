// Task Description
// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let i = 0,
        j = 0,
        maxLen = 0,
        substr = "";

    while (i < len && j < len) {
        // slide the window by 1
        if (!substr.includes(s[j])) {
            substr += s[j];
            maxLen = Math.max(maxLen, substr.length);
            j++;
        } else {
            substr = "";
            i++;
            j = i;
        }
    }
    return maxLen;
};

// Test Cases
lengthOfLongestSubstring("abcabcbb"); // 3
lengthOfLongestSubstring("bbbbb"); // 1
lengthOfLongestSubstring("pwwkew"); // 3
