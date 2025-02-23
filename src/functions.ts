/**
 * Calculates the Fibonacci number at the given position.
 * @param n - The position (0-based) in the Fibonacci sequence.
 * @returns The Fibonacci number at position n.
 * @throws {Error} If n is a negative number.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * A recursive helper function to perform binary search.
 * @private
 * @param array - The array to search in.
 * @param target - The number to search for.
 * @param start - The starting index of the search range.
 * @param end - The ending index of the search range.
 * @returns The index of the target if found, or -1 if not found.
 */
function _binarySearchRecursive(array: Array<number>, target: number, start: number, end: number): number {
  // Base Condition
  if (start > end) return -1;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key target
  if (array[mid] == target) return mid;

  // If element at mid is greater than target,
  // search in left half of mid
  if (array[mid] > target) return _binarySearchRecursive(array, target, start, mid - 1);
  // If element at mid is smaller than target,
  // search in right half of mid
  return _binarySearchRecursive(array, target, mid + 1, end);
}

/**
 * Performs a binary search on the given array to find the target number.
 * @param arr - The array to search in.
 * @param target - The number to search for.
 * @returns The index of the target if found, or -1 if not found.
 */
export function binarySearch(arr: Array<number>, target: number): number {
  return _binarySearchRecursive(arr, target, 0, arr.length - 1); 
}

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * @param arr - The array to be sorted.
 * @returns The sorted array.
 */
export function bubbleSort(arr: Array<number>): Array<number> {
  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    len--;
  } while (swapped);
  return arr;
}

/**
 * Adds two numbers and returns their sum.
 * @param num1 - The first number.
 * @param num2 - The second number.
 * @returns The sum of the given numbers.
 */
export const add = (num1: number, num2: number) => {
  return num1 + num2
}

/**
 * Curried math function to perform various arithmetic operations ("add", "subtract", "multiply", "divide").
 * @param operation - The type of operation to perform as a string.
 * @returns A curried function that takes two numbers and performs the specified operation.
 */
export function curriedMath(operation: "add" | "subtract" | "multiply" | "divide") {
  return (num1: number) => (num2: number) => {
    switch (operation) {
      case "add": return num1 + num2;
      case "subtract": return num1 - num2;
      case "divide":
        if (num2 === 0) {
          throw new Error('Division by zero is not allowed.');
        }
        return num1 / num2;
      case "multiply": return num1 * num2;
    }
  };
}  
