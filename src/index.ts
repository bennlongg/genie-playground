import { fibonacci, binarySearch, bubbleSort, curriedMath } from './functions';

// Example usage of existing functions
console.log('Fibonacci of 10:', fibonacci(10));
console.log('Binary search for 3 in [1, 2, 3, 4, 5]:', binarySearch([1, 2, 3, 4, 5], 3));
console.log('Bubble sort [5, 3, 8, 4, 2]:', bubbleSort([5, 3, 8, 4, 2]));

// Examples of curriedMath function
console.log('\n--- Curried Math Function Examples ---');

// Create specific operation functions using curriedMath
const add = curriedMath('+');
const subtract = curriedMath('-');
const multiply = curriedMath('*');
const divide = curriedMath('/');

// Basic usage
console.log('5 + 3 =', add(5, 3));
console.log('10 - 4 =', subtract(10, 4));
console.log('2 * 7 =', multiply(2, 7));
console.log('20 / 5 =', divide(20, 5));

// Currying examples
const addFive = add(5);
console.log('addFive(10) =', addFive(10));
console.log('addFive(15) =', addFive(15));

const multiplyByTwo = multiply(2);
console.log('multiplyByTwo(8) =', multiplyByTwo(8));
console.log('multiplyByTwo(10) =', multiplyByTwo(10));

// Chaining operations
console.log('((5 + 3) * 2) / 4 =', divide(multiply(add(5, 3), 2), 4));

// Invalid operation example
const invalidOp = curriedMath('invalid');
console.log('Invalid operation result:', invalidOp(5, 3));
