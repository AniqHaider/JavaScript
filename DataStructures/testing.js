class MyStack {
    constructor() {
      // Initialize two empty queues as arrays
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(x) {
      // Add the new element to the end of queue1
      this.queue1.push(x);
    }
  
    pop() {
      const size = this.queue1.length;
      // Move all elements except the last one from queue1 to queue2
      for (let i = 0; i < size - 1; i++) {
        this.queue2.push(this.queue1.shift());
      }
      // Remove and return the last element from queue1, which is the top element of the stack
      const popped = this.queue1.shift();
      // Swap the references of queue1 and queue2, so that queue2 becomes empty and queue1 now contains all the remaining elements
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
      // Return the popped element
      return popped;
    }
  
    top() {
      const size = this.queue1.length;
      // Move all elements except the last one from queue1 to queue2
      for (let i = 0; i < size - 1; i++) {
        this.queue2.push(this.queue1.shift());
      }
      // Get the top element of the stack from queue1 without removing it
      const top = this.queue1[0];
      // Put the top element back in queue1
      this.queue2.push(this.queue1.shift());
      // Swap the references of queue1 and queue2, so that queue2 becomes empty and queue1 now contains all the remaining elements
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
      // Return the top element
      return top;
    }
  
    empty() {
      // Check if queue1 is empty, which means the stack is empty
      return this.queue1.length === 0;
    }
}
  
const myStack = new MyStack();

myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // should return 2
console.log(myStack.pop()); // should return 2
console.log(myStack.empty()); // should return false
console.log(myStack.pop()); // should return 1
console.log(myStack.empty()); // should return true
