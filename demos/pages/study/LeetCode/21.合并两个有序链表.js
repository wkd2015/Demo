/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = {
        next: null,
        val: -1
    }  //头部节点，用于挂载结果
    let cur = head; //当前节点，用于遍历生成链表
    while (l1 && l2) {
        if (l1.val > l2.val) {
            cur.next = l2;
            l2 = l2.next
        } else {
            cur.next = l1;
            l1 = l1.next;
        }
        cur = cur.next;
    }
    cur.next = l1 || l2;
    return head.next;
};

