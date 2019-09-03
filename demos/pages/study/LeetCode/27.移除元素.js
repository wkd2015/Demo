/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr = nums;
    let length = arr.length;
    let i = 0;
    while (i < length) {
        if (arr[i] == val) {
            arr.splice(i, 1);
            length = length - 1;
        } else {
            i++;
        }
    }
    return arr.length;
};

