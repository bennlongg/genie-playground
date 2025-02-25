import { fibonacci, binarySearch, bubbleSort, curriedMath } from "./functions";

console.log("Hello Genie!");
console.log("10th Fibonacci Number:", fibonacci(10));
console.log("Binary Search Example:", binarySearch([1, 3, 5, 7, 9], 5), "- Index of 5 in the array");
console.log("Bubble Sort Example:", bubbleSort([5, 3, 8, 1, 2]), "- Sorted array");

// Create curried math functions
const add = curriedMath("add");
const multiply = curriedMath("multiply");

console.log("Curried Math - Addition Example:", add(2, 3), "- Result of 2 + 3");
console.log("Curried Math - Multiplication Example:", multiply(4, 5), "- Result of 4 × 5");
