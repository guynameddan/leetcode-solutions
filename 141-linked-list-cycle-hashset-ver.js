// https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // time complexity: O(N)
    // space complexity: O(N)
    
    let curr = head,
        visited = new Set();
    
    while (curr) {
        if (visited.has(curr)) return true;
        
        visited.add(curr);
        
        curr = curr.next;
    }
    
    return false;
};