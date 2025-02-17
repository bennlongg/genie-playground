/**
 * Calculates the nth Fibonacci number using a recursive approach.
 * @param {number} n - The position of the Fibonacci number to calculate.
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - If n is a negative number.
 */
export function fibonacci(n: number): number {
 if (n <0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the index of a target element.
 * @param {number[]} arr - A sorted array of numbers to search.
 * @param {number} target - The target value to search for.
 * @returns {number} - The index of the target element if found, or -1 if not found.
 */
export function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;
  if (arr.length === 0) {
    return -1; // Return -1 if the input array is empty
  }
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid; // Return the index of the target element if found
    } else if (arr[mid] < target) {
      low = mid + 1; // Adjust the low pointer to search the right half of the array
    } else {
      high = mid - 1; // Adjust the high pointer to search the left half of the array
    }
  }

  return -1; // Return -1 if the target element is not found in the array
}

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * @param {number[]} arr - An array of numbers to be sorted.
 * @returns {number[]} - A new sorted array in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
  const sortedArr = [...arr]; // Create a copy of the input array to preserve immutability
  const n = sortedArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Swap adjacent elements if they are in the wrong order
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }
  return sortedArr; // Return the sorted array
}

/**
 * Creates a curried function for performing arithmetic operations with a specified operator.
 * @param {"+" | "-" | "*" | "/"} operator - The arithmetic operator to use (e.g., "+", "-", "*", "/").
 * @param {number[]} [initialArgs] - An optional initial array of arguments to start with.
 * @returns {Function} - A curried function that performs the specified arithmetic operation on supplied arguments.
 * @throws {Error} - If an unsupported operator is provided or if division by zero occurs.
 */
export const curriedMath = (
  operator: "+" | "-" | "*" | "/",
  initialArgs?: number[]
): Function => {
  const args = initialArgs || [];
  const curriedFunction = (...accumulatedArgs: number[]) => {
    const fullArray = [...args, ...accumulatedArgs];

    switch (operator) {
      case "+":
        return fullArray.reduce((a, b) => a + b, 0);
      case "-":
        return fullArray.reduce((a, b) => a - b, 0);
      case "*":
        return fullArray.reduce((a, b) => a * b);
      case "/":
        try {
          return fullArray.reduce((a, b) => a / b);
        } catch (e) {
          throw new Error("Division by zero is not allowed");
        }
      default:
        throw new Error(
          `Unsupported operator: ${operator}. Valid operators are +, -, *, and /.`
        );
    }
  };
  return curriedFunction;
};