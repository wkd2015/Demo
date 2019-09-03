/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {var stack = [];
    for (var i = 0; i < s.length; i++) {
        if(s[i] == "("){
            stack.push(")");
        }else if(s[i] == "{"){
            stack.push("}");
        }else if(s[i] == "["){
            stack.push("]");
        }else if(stack.pop() != s[i] ){
            return false;
        }
    }
    return !stack.length
};

