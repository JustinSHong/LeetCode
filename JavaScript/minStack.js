// Task Description
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

var MinStack = function() {
    this.storage = [];
    this.min = []; // holds smallest values of the main stack
    this.size = 0;
};

MinStack.prototype.push = function(x) {
    if (this.size == 0) {
        this.storage.push(x);
        this.min.push(x);
        this.size++;
    } else {
        if (x > this.min[this.size - 1]) {
            this.min.push(this.min[this.size - 1]);
        } else {
            this.min.push(x);
        }
        this.storage.push(x);
        this.size++;
    }
};

MinStack.prototype.pop = function() {
    this.storage.pop();
    this.min.pop();
    this.size--;
};

MinStack.prototype.top = function() {
    return this.storage[this.size - 1];
};

MinStack.prototype.getMin = function() {
    return this.min[this.size - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
