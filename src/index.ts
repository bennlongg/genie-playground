import { fibonacci, binarySearch } from "./functions";

// Prompt the user to enter a numberconst input = parseInt(prompt("Enter a position for fibonacci")!);
 
if (!isNaN(input)) {
  try {
    //Compute fibonacci number at the provided position and log the result
    const fib = fibonacci(input);
    console.log(`Fibonacci number at position ${input} is ${fib}`);
  } catch (error) {
    console.error((error as Error).message);
  }
} else {
  console.error("Invalid input: Please enter a valid number.");
}

//Prompt user to input a sorted array of numbers separated by commas
//Prompt user to enter a target number
const arrayInput = prompt("Enter a sorted array of number separated by commas");
const targetInput = parseInt(prompt("Enter a target number")!);
const array = arrayInput?.split(',').map(Number)

//Compute target input for binarySearch and parse the array from provided input
//Check if the value is found or not and log the result
if (!isNaN(targetInput)) {
  const bs = binarySearch(array!, targetInput);
  array && console.log(`Index of ${targetInput} in the array [${array.join(', ')}] is ${bs}`);
  
}else {
  console.error("Invalid input: Please enter a valid number.");
}
console.log("Script execution completed");