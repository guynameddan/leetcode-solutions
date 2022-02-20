/**
 * https://leetcode.com/problems/merge-nodes-in-between-zeros/
 */
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
 var mergeNodes = function(head) {
    let currNode = head,
        dummyNode = new ListNode(),
        prev = dummyNode;
    
    // dummyNode.next = head;
    
    while (currNode !== null) {
        if (currNode.val === 0 && currNode.next === null) {
            prev.next = null;
            break;
        } else if (currNode.val === 0) {
            currNode = sumNodes(currNode, prev);
        }
        
        prev = currNode;
        currNode = currNode.next;
    }
    
    return dummyNode.next;
    
};

function sumNodes(head, tail) {
    let currNode = head.next,
        prev = head,
        tempSum = 0;
        
    
    while (currNode.val !== 0) {
        tempSum += currNode.val;
        prev = currNode;
        currNode = currNode.next;
    }
    
    tail.next = prev;
    prev.val = tempSum;
    
    return prev;
    
}