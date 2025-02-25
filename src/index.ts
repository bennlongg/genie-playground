import { fibonacci, binarySearch, bubbleSort, curriedMath } from "./functions";

console.log("Hello Genie!");
console.log("10th Fibonacci Number:", fibonacci(10));
console.log("Binary Search Example:", binarySearch([1, 3, 5, 7, 9], 5), "- Index of 5 in the array");
console.log("Bubble Sort Example:", bubbleSort([5, 3, 8, 1, 2]), "- Sorted array");

// Create curried math functions for different operations
const add = curriedMath("add");
const subtract = curriedMath("subtract");
const multiply = curriedMath("multiply");
const divide = curriedMath("divide");

// Addition examples
console.log("\n--- Addition Examples ---");
console.log("Basic Addition:", add(2, 3), "- Result of 2 + 3");
console.log("Adding negative numbers:", add(-5, 3), "- Result of -5 + 3");
console.log("Adding zero:", add(10, 0), "- Result of 10 + 0");

// Subtraction examples
console.log("\n--- Subtraction Examples ---");
console.log("Basic Subtraction:", subtract(10, 4), "- Result of 10 - 4");
console.log("Negative result:", subtract(5, 8), "- Result of 5 - 8");
console.log("Subtracting zero:", subtract(7, 0), "- Result of 7 - 0");

// Multiplication examples
console.log("\n--- Multiplication Examples ---");
console.log("Basic Multiplication:", multiply(4, 5), "- Result of 4 × 5");
console.log("Multiplying by zero:", multiply(6, 0), "- Result of 6 × 0");
console.log("Multiplying negative numbers:", multiply(-3, -4), "- Result of -3 × -4");

// Division examples
console.log("\n--- Division Examples ---");
console.log("Basic Division:", divide(20, 4), "- Result of 20 ÷ 4");
console.log("Division with decimal result:", divide(10, 3), "- Result of 10 ÷ 3");
console.log("Dividing zero:", divide(0, 5), "- Result of 0 ÷ 5");

// Safe division example with try-catch
console.log("\n--- Error Handling Example ---");
try {
  console.log("Attempt division by zero:", divide(10, 0));
} catch (error) {
  console.log("Caught error:", error.message);
}

// Combining curried functions
console.log("\n--- Combined Operations Example ---");
const a = 5, b = 3, c = 2;
const result = multiply(add(a, b), subtract(a, c));
console.log(`Result of (${a} + ${b}) × (${a} - ${c}):`, result);
