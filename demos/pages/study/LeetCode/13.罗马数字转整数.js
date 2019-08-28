/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
var romanToInt = function(s) {
    let arr = s.split('');
    let result = 0;
    for (let index = 0; index < arr.length; index++) {
        map[arr[index]] < map[arr[index + 1]] ? result -= map[arr[index]] : result += map[arr[index]];
    }
    return result;
};

