import { fibonacci, binarySearch } from "./functions";
// Prompt the user to enter a numberconst input = parseInt(prompt("Enter a position for fibonacci")!);
 
if (!isNaN(input)) {
  try {
    const fib = fibonacci(input);
    console.log(`Fibonacci number at position ${input} is ${fib}`);
  } catch (error) {
    console.error((error as Error).message);
  }
} else {
  console.error("Invalid input: Please enter a valid number.");
}

const arrayInput = prompt("Enter a sorted array of number separated by commas");
const targetInput = parseInt(prompt("Enter a target number")!);
const array = arrayInput?.split(',').map(Number)

if (!isNaN(targetInput)) {
  const bs = binarySearch(array!, targetInput);
  array && console.log(`Index of ${targetInput} in the array [${array.join(', ')}] is ${bs}`);
}else {
  console.error("Invalid input: Please enter a valid number.");
}

console.log("Script execution completed");