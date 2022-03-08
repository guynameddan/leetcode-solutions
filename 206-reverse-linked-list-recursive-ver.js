// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // check necessary conditions
    if (!head) return null;
    
    // process data
    let newHead = head;
    
    // call recursion as needed
    if (head.next) {
        newHead = reverseList(head.next);
        head.next.next = head;
    }
    
    head.next = null;
    
    return newHead;    
};