// Task Description
// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.

var MyQueue = function() {
    this.queue = [];
    this.size = 0;
};

MyQueue.prototype.push = function(x) {
    this.queue.push(x);
    this.size++;
};

MyQueue.prototype.pop = function() {
    const removed = this.queue.shift();
    this.size--;
    return removed;
};

MyQueue.prototype.peek = function() {
    return this.queue[0];
};

MyQueue.prototype.empty = function() {
    if (this.size == 0) return true;
    else return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
