// How can I implement an expression to check if a value is an object?
function isObject(value) {
    return typeof value === 'object' && value !== null;
}

const obj = { name: 'Sebastián', age: 20 };
const arr = [1, 2, 3];
const str = 'Hello';

console.log(isObject(obj));  // True
console.log(isObject(arr));  // True
console.log(isObject(str));  // False
console.log(isObject(null)); // False
console.log(isObject(undefined)); // False

// It's necessary to mention that, at least in Javascript, everything is an object except primitive types