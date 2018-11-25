// Task Description
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807

// singly-linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // holds output
    let p = l1,
        q = l2,
        curr = dummyHead;
    let carry = 0; // holds remainder of the sum of each digit pair
    // iterate over the lists
    while (p != null || q != null) {
        // assign x and y values to hold values of p and q nodes
        let x = p != null ? p.val : null;
        let y = q != null ? q.val : null;
        // calculate the sum
        let sum = x + y + carry;
        // advance carry
        carry = Math.floor(sum / 10); // must be 0 or 1
        // advance current to hold sum without the carry
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        // advance p and q as needed
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        // if the last sum exceeds 10 then save the carry as a new digit
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};

// Test Cases
addTwoNumbers([2, 4, 3], [5, 6, 4]); // [7, 0, 8]
