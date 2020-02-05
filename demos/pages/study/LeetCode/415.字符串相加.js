/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let arr1 = num1.split('').reverse();
    let arr2 = num2.split('').reverse();
    let res = [];

    let sum = 0;
    let carry = 0;
    let index = 0;
    // sum加大于零判断是为了解决如 1 + 9这种两数加完到最后一位不进位的情况；
    // sum清空后加法才算完成
    while(arr1[index] || arr2[index] || sum > 0) {
        if (arr1[index]) {
            sum += +arr1[index];
        }
        if (arr2[index]) {
            sum += +arr2[index];
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }
        res.push(sum);
        sum = carry;
        carry = 0;
        index++;
    }
    return res.reverse().join('');
};
// @lc code=end

