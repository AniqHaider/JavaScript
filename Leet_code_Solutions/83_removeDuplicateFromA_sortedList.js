// 83. Remove Duplicates from Sorted List
// Easy

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
//  Return the linked list sorted as well.

 

// Example 1:

// input- 1 , 1, 2
// output - 1,2

let deleteDuplicates = function(head) {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
// Create the linked list
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(3);

// Call the function and log the result
console.log(deleteDuplicates(head));