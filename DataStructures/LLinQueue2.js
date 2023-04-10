// LINKED LIST IMPLEMENTATION IN QUEUE

// Define a Node class to represent each element in the queue
class Node {
  constructor(data) {
    this.data = data; // The data stored in the node
    this.next = null; // The next node in the queue
  }
}

// Define a Queue class that uses a linked list to implement a queue
class Queue {
  constructor() {
    this.head = null; // The first node in the queue
    this.tail = null; // The last node in the queue
    this.length = 0; // The number of elements in the queue
  }

  // Add an element to the end of the queue
  enqueue(data) {
    const newNode = new Node(data); // Create a new node with the given data
    if (!this.head) { // If the queue is empty
      this.head = newNode; // Set the head and tail to the new node
      this.tail = newNode;
    } else { // If the queue is not empty
      this.tail.next = newNode; // Set the current tail's next pointer to the new node
      this.tail = newNode; // Update the tail to be the new node
    }
    this.length++; // Increment the length of the queue
  }

  // Remove the first element from the queue and return its value
  dequeue() {
    if (!this.head) { // If the queue is empty
      return null; // Return null
    }
    const removedNode = this.head; // Save the current head to be removed
    this.head = this.head.next; // Update the head to be the next node in the queue
    removedNode.next = null; // Set the removed node's next pointer to null
    this.length--; // Decrement the length of the queue
    return removedNode.data; // Return the removed node's data
  }

  // Return the current size of the queue
  size() {
    return this.length;
  }

  // Return true if the queue is empty, false otherwise
  isEmpty() {
    return this.length === 0;
  }

  // Return the value of the first element in the queue without removing it
  peek() {
    if (!this.head) { // If the queue is empty
      return null; // Return null
    }
    return this.head.data; // Otherwise, return the data of the head node
  }

  printLinkedList() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  sum() {
    let currentNode = this.head;
    let res = 0;
    while (currentNode != null) {
      res += currentNode.data
      currentNode = currentNode.next
    }
    return res
  }
}

const myQueue = new Queue();

console.log(myQueue.isEmpty()); // true
console.log(myQueue.size()); // 0
console.log(myQueue)
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.isEmpty()); // false
console.log(myQueue.size()); // 3
console.log(myQueue.peek()); // 1

console.log(myQueue.dequeue()); // 1
console.log(myQueue.dequeue()); // 2

console.log(myQueue.isEmpty()); // false
console.log(myQueue.size()); // 1
console.log(myQueue.peek()); // 3

myQueue.enqueue(4);

console.log(myQueue.isEmpty()); // false
console.log(myQueue.size()); // 2
console.log(myQueue.peek()); // 3

console.log(myQueue.dequeue()); // 3
console.log(myQueue.dequeue()); // 4

console.log(myQueue.isEmpty()); // true
console.log(myQueue.size()); // 0
console.log(myQueue.peek()); // null

myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.enqueue(9);


console.log(myQueue.printLinkedList())

console.log(myQueue.sum())