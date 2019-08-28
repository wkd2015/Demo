/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 10 && x > -10) {
        return x;
    }
    let arrs = x.toString().split('');
    let result = 0;
    if (arrs[0] == '-') {
        result = parseInt('-' + x.toString().slice(0).split('').reverse().join(''));
    } else {
        result = parseInt(x.toString().slice(0).split('').reverse().join(''));
    }
    if (result > 2147483647 || result < -2147483648) {
        result = 0;
    }
    return result;
};

