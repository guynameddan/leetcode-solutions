// https://leetcode.com/problems/merge-k-sorted-lists/submissions/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if (!lists || lists.length === 0) return null;
        
    while (lists.length > 1) {
        let mergedLists = [];
        
        for (let i = 0; i < lists.length; i+=2) {
            let l1 = lists[i],
                l2 = null;
            
            if (i+1 < lists.length) l2 = lists[i+1];
            
            mergedLists.push(mergeList(l1, l2));
        }
        
        lists = mergedLists;
    }
    
    return lists[0];
};

function mergeList(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    
    let dummy = new ListNode(),
        tail = dummy;
            
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        
        tail = tail.next;
    }
    
    // if every node in one of the lists
    // has been traversed to but the other hasn't,
    // since the linked lists are ordered you can
    // connect the end of the new list to the whatever
    // is leftover
    if (l1) tail.next = l1;
    
    if (l2) tail.next = l2;
    
    return dummy.next;
}