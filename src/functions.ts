/**
 * Calculates the nth number in the Fibonacci sequence.
 * In this sequence, each number is the sum of the two preceding ones.
 * 
 * @param {number} n - The position in the Fibonacci sequence (0-indexed)
 * @returns {number} The nth Fibonacci number
 * @throws {Error} If n is negative
 * 
 * @example
 * // returns 5
 * fibonacci(5);
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * The array must be sorted in ascending order for the search to work correctly.
 * 
 * @param {number[]} arr - The sorted array to search within
 * @param {number} target - The value to search for
 * @returns {number} The index of the target value if found, -1 otherwise
 * @throws {Error} If the array is not sorted in ascending order
 * 
 * @example
 * // returns 2
 * binarySearch([1, 2, 3, 4, 5], 3);
 */
export function binarySearch(arr: number[], target: number): number {
  // Check if array is sorted
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      throw new Error("Array must be sorted in ascending order for binary search");
    }
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * This implementation returns a new sorted array without modifying the original.
 * 
 * @param {number[]} arr - The array to sort
 * @returns {number[]} A new array containing the sorted elements
 * @throws {Error} If the input is not an array or contains non-number elements
 * 
 * @example
 * // returns [1, 2, 3, 4, 5]
 * bubbleSort([5, 3, 1, 4, 2]);
 */
export function bubbleSort(arr: number[]): number[] {
  // Validate input is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }

  // Validate all elements are numbers
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
      throw new Error("All elements must be numbers");
    }
  }

  // Create a copy to avoid mutating the original array
  const result = [...arr];
  
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i + 1]) {
        // Swap elements
        const temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return result;
}

/**
 * Type definition for the object returned by curriedMath,
 * which allows for method chaining of mathematical operations.
 */
type MathChain = {
  add: (value: number) => MathChain;
  subtract: (value: number) => MathChain;
  multiply: (value: number) => MathChain;
  divide: (value: number) => MathChain;
  value: () => number;
};

/**
 * Creates a curried math object that allows chaining of basic arithmetic operations.
 * Each operation returns a new object to continue the chain.
 * 
 * @param {number} initial - The starting value for calculations
 * @returns {MathChain} An object with methods for arithmetic operations and value retrieval
 * @throws {Error} If the initial value is not a number
 * 
 * @example
 * // returns 16
 * curriedMath(5).add(3).multiply(2).value();
 */
export function curriedMath(initial: number): MathChain {
  // Validate that initial is a number
  if (typeof initial !== 'number' || isNaN(initial)) {
    throw new Error("Initial value must be a number");
  }

  let result = initial;

  return {
    /**
     * Adds a value to the current result.
     * 
     * @param {number} value - The value to add
     * @returns {MathChain} A new MathChain object with the updated result
     * @throws {Error} If the value is not a number
     */
    add: (value: number): MathChain => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Value must be a number");
      }
      result += value;
      return curriedMath(result);
    },
    /**
     * Subtracts a value from the current result.
     * 
     * @param {number} value - The value to subtract
     * @returns {MathChain} A new MathChain object with the updated result
     * @throws {Error} If the value is not a number
     */
    subtract: (value: number): MathChain => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Value must be a number");
      }
      result -= value;
      return curriedMath(result);
    },
    /**
     * Multiplies the current result by a value.
     * 
     * @param {number} value - The value to multiply by
     * @returns {MathChain} A new MathChain object with the updated result
     * @throws {Error} If the value is not a number
     */
    multiply: (value: number): MathChain => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Value must be a number");
      }
      result *= value;
      return curriedMath(result);
    },
    /**
     * Divides the current result by a value.
     * 
     * @param {number} value - The value to divide by
     * @returns {MathChain} A new MathChain object with the updated result
     * @throws {Error} If the value is not a number or is zero
     */
    divide: (value: number): MathChain => {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("Value must be a number");
      }
      if (value === 0) {
        throw new Error("Cannot divide by zero");
      }
      result /= value;
      return curriedMath(result);
    },
    /**
     * Returns the current result of the calculation chain.
     * 
     * @returns {number} The current numerical result
     */
    value: (): number => {
      return result;
    }
  };
}
