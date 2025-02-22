import { fibonacci } from "./functions";
import { binarySearch } from "./functions";

console.log("Hello Genie!");
console.log("10th Fibonacci Number:", fibonacci(10));

// Example usage of binarySearch
const arr = [1, 2, 3, 4, 5];
const target = 3;
const result = binarySearch(arr, target);
console.log(`Index of ${target} in array [${arr}]:`, result);
