import { fibonacci, binarySearch } from "./functions";

console.log("Hello Genie!");

console.log("Fibonacci numbers:");

for (let i = 1; i < 10; i++) {
  console.log(`${i} : ${fibonacci(i)}`);
}

// Sorted array of numbers
const numbers = [1, 3, 9, 19, 28, 41, 59, 67];

console.log("Numbers:", numbers);
console.log("Binary Search:");

const target = 19; // Value to find

const index = binarySearch(numbers, target);

if (index !== -1) {
  console.log(`Number ${target} found at index ${index}.`);
} else {
  console.log(`Number ${target} not found in the array.`);
}

const target2 = 21;  
const index2 = binarySearch(numbers, target2);  
if (index2 !== -1) {  
    console.log(`Number ${target2} found at index ${index2}.`);  
} else {  
    console.log(`Number ${target2} not found in the array.`);  
}  