/**
 * Reverse Operations
You are given a singly-linked list that contains N integers. A subpart of the list is a contiguous set of even elements, bordered either by either end of the list or an odd element. For example, if the list is [1, 2, 8, 9, 12, 16], the subparts of the list are [2, 8] and [12, 16].
Then, for each subpart, the order of the elements is reversed. In the example, this would result in the new list, [1, 8, 2, 9, 16, 12].
The goal of this question is: given a resulting list, determine the original order of the elements.
Implementation detail:
You must use the following definition for elements in the linked list:
class Node {
    int data;
    Node next;
}
Signature
Node reverse(Node head)
Constraints
1 <= N <= 1000, where N is the size of the list
1 <= Li <= 10^9, where Li is the ith element of the list
Example
Input:
N = 6
list = [1, 2, 8, 9, 12, 16]
Output:
[1, 8, 2, 9, 16, 12]
 */
// Add any extra import statements you may need here


class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
    }
  }
  
  // Add any helper functions you may need here
  function reverseEvens(head) {
    let previous = null,
        current = head;      
    
    while (current !== null && current.data % 2 === 0) {
      let later = current.next;
      current.next = previous;
      
      previous = current;
      current = later;
    }
    
    head.next = current;
    return previous;
  }
  
  function reverse(head) {
    //
    let dummyNode = new Node(0),
        current = head,
        previous = dummyNode;
    
        dummyNode.next = head;
    
    while (current != null) {
      if (current.data % 2 === 0) {
        previous.next = reverseEvens(current);
      }
      
      previous = current;
      current = current.next;
    }
    
    return dummyNode.next;
    
  }
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  var test_case_number = 1;
  
  function printLinkedList(head) {
    var out = '[';
    while (head != null) {
      out += head.data;
      head = head.next;
      if (head != null) {
        out += ' ';
      }
    }
    out += ']';
    return out;
  }
  
  function check(expectedHead, outputHead) {
    var result = true;
    var tempExpectedHead = expectedHead;
    var tempOutputHead = outputHead;
    while (expectedHead != null && outputHead != null) {
      result &= (expectedHead.data == outputHead.data);
      expectedHead = expectedHead.next;
      outputHead = outputHead.next;
    }
    if (!(expectedHead == null && outputHead == null)) result = false;
  
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    } else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printLinkedList(tempExpectedHead);
      out += ' Your output: ';
      out += printLinkedList(tempOutputHead);
      console.log(out);
    }
    test_case_number++;
  }
  
  function createLinkedList(arr) {
    var head = null;
    var tempHead = head;
    for (var v of arr) {
      if (head == null) {
        head = new Node(v);
        tempHead = head;
      } else {
        head.next = new Node(v);
        head = head.next;
      }
    }
    return tempHead;
  }
  
  var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
  var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
  var output_1 = reverse(head_1);
  check(expected_1, output_1);
  
  var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
  var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
  var output_2 = reverse(head_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  