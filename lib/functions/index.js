"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// If a function does not return any value then we can annotate using a special data type called void
function log(message) {
    console.log(message);
}
let addition;
addition = function (a, b) {
    return a + b;
};
