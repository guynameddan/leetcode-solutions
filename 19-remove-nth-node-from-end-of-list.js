// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    // Dummy node will help us return the head of the linked list later.
    // Have 2 pointers
    let dummy = new ListNode(0, head),
        slow = dummy,
        fast = head;
    
    // The idea is have the 2 pointers n + 1 nodes away from each other.
    // Once the fast pointer reaches the end of the linked list then that
    // means the slow pointer will be at the (n - 1)th node. This is important
    // because we want to remove the nth node, i.e. create a link between
    // (n - 1)th node and (n + 1)th node.
    while (n > 0 && fast) {
        fast = fast.next;
        n--;
    }
    
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // link (n - 1)th node and (n + 1)th node
    slow.next = slow.next.next;
    
    // the head is just dummy.next from the beginnning.
    return dummy.next;
};