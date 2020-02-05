/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const ans = [];
    help(root, sum, []);
    return ans;
    function help(root, sum, path) {
        if (!root) {
            return;
        }
        path.push(root.val);
        if (!root.left && !root.right && sum - root.val === 0) {
            ans.push([...path])
        }
        help(root.left, sum - root.val, path)
        help(root.right, sum - root.val, path)
        path.pop();
    }
};
// @lc code=end

