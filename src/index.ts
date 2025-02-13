import { fibonacci, binarySearch } from "./functions";

// Prompt the user to enter a number for the position in the Fibonacci sequenceconst input = parseInt(prompt("Enter a position for fibonacci")!);

// Check if the user input is a valid number and handle errors if necessary
if (!isNaN(input)) {
  try {
    const fib = fibonacci(input);
    console.log(`Fibonacci number at position ${input} is ${fib}`);
  } catch (error) {
    console.error((error as Error).message); // Catch and display any errors (e.g., negative input)
  }
} else {
  console.error("Invalid input: Please enter a valid number."); // Handle invalid non-numeric inputs
}

// Gather inputs for performing binary search on a sorted array
const arrayInput = prompt("Enter a sorted array of number separated by commas");
const targetInput = parseInt(prompt("Enter a target number")!);
const array = arrayInput?.split(',').map(Number); // Convert comma-separated input string into an array of numbers

// Check if the user input for target value is a valid number and perform binary search
if (!isNaN(targetInput)) {
  const bs = binarySearch(array!, targetInput); // Perform binary search on the input array for the target value
  array && console.log(`Index of ${targetInput} in the array [${array.join(', ')}] is ${bs}`); // Display the index or -1 if not found
} else {
  console.error("Invalid input: Please enter a valid number."); // Handle invalid non-numeric inputs
}

console.log("Script execution completed"); // Indicate script completion