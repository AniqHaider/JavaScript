/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Edge case: empty or single node linked list
    if (!head || !head.next) return true;
    
    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half of the linked list
    let prev = null;
    let current = slow.next;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    slow.next = prev;
    
    // Compare the first and second half of the linked list
    let firstHalf = head;
    let secondHalf = slow.next;
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
};
