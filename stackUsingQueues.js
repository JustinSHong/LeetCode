// Task Description

// Implement the following operations of a stack using queues.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// empty() -- Return whether the stack is empty.

var MyStack = function() {
    this.stack = [];
    this.size = 0;
};

MyStack.prototype.push = function(x) {
    // push to the back
    this.stack.push(x);
    this.size++;
};

MyStack.prototype.pop = function() {
    // pop in front as in queues
    const removed = this.stack.pop();
    this.size--;
    return removed;
};

MyStack.prototype.top = function() {
    // return last element of stack
    return this.stack[this.stack.length - 1];
};

MyStack.prototype.empty = function() {
    if (this.size == 0) return true;
    else return false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
