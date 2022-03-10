// https://leetcode.com/problems/reorder-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    let [slow, fast] = [head, head.next];
    
    // find the middle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // reverse the second half
    // second is the start of the second half and prev will disconnect
    // the end of the first half from the start of the second.
    let second = slow.next,
        prev = slow.next = null;
    
    // use 3 pointers: prev, current, next
    // prev.next = current and current.next = next
    // remove the link between current and next
    // then set current.next = prev. prev will be equal to current and
    // current will be equal to next. This is just like LC prob 206
    while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }
    
    // merge two halves
    let first = head;
    second = prev;
    
    while (second) {
        let [temp1, temp2] = [first.next, second.next];
        first.next = second;
        second.next = temp1;
        [first, second] = [temp1, temp2];
    }
};