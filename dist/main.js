"use strict";
function addNumbers(a, b) {
    return (a + b);
}
const sum = addNumbers(5, 10);
console.log(sum);
function identity(arg) {
    return arg;
}
const stringIdentity = identity("Hello, Generics!");
console.log(stringIdentity);
const numberIdentity = identity(21);
console.log(numberIdentity);
