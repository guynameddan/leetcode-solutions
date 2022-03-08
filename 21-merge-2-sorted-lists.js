// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // dummy is needed so we know what the head of the new list
    // is. tail will be the pointer of the new linked list.
    let dummy = new ListNode(),
        tail = dummy;
    
    // compare each and link the min to new list
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        
        tail = tail.next;
    }
    
    // if any left in either list, link the remainder to
    // result linked list
    if (list1) tail.next = list1;
    else if (list2) tail.next = list2;
    
    // dummy.next is the head of the new linked list
    return dummy.next;
};