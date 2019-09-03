/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == '') {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0] &&
            haystack.substring(i, i + needle.length) == needle) {
            return i;
        }
    }
    return -1;
};

