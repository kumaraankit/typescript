"use strict";
// generic data type is used to interact or performthe specific type to minimise error.
class QueueOperation {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() {
        return this.data.shift();
    }
}
const queue = new QueueOperation();
queue.push(123);
queue.push(134);
console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1));
