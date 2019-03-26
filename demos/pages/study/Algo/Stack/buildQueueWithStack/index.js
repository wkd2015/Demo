/**
 * Initialize your data structure here.
 */
var Queue = function() {
    this.inputStack = [];
    this.outputStack = [];
    this.size = 0;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
Queue.prototype.push = function(x) {
    this.inputStack.push(x)
    this.size += 1;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
Queue.prototype.pop = function() {
    if(this.outputStack.length == 0) {
        for(var i = 0; i < this.size; i ++) {
            this.outputStack[this.size - i - 1] = this.inputStack[i];
        }
        this.size = 0;
        this.inputStack = [];
    }
    return this.outputStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
Queue.prototype.peek = function() {
    if(this.outputStack.length == 0) {
        for(var i = 0; i < this.size; i ++) {
            this.outputStack[this.size - i - 1] = this.inputStack[i];
        }
        this.size = 0;
        this.inputStack = [];
    }
    return this.outputStack[this.outputStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
Queue.prototype.empty = function() {
    return (this.outputStack.length == 0 && this.size == 0)
};
