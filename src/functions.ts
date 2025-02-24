/**
 * Performs a binary search on a sorted array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The sorted array to search.
 * @param {T} target - The target value to search for.
 * @param {(a: T, b: T) => number} [comparator] - An optional comparator function.
 * @returns {number} The index of the target value if found, or -1 if not found.
 * @throws {Error} If the input array is not sorted.
 */
export function binarySearch<T>(
  array: T[],
  target: T,
  comparator: (a: T, b: T) => number = (x, y) => (x < y ? -1 : x > y ? 1 : 0)
): number {
  if (array.length === 0) {
    return -1;
  }

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparison = comparator(array[mid], target);

    if (comparison === 0) {
      return mid;
    } else if (comparison < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 *
 * @param {number[]} nums - The array of numbers to sort.
 * @returns {void} This function operates in-place and does not return a value.
 */
export function bubbleSort(nums: number[]): void {
  let swapped: boolean = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
  }
}

/**
 * Applies a mathematical operation to the current value.
 *
 * @private
 * @param {number} currentValue - The current value before applying the operation.
 * @param {string} operation - The name of the operation to apply (e.g., 'add', 'subtract', etc.).
 * @param {number} operand - The operand to be used in the operation.
 * @returns {number} The result of applying the operation to the current value and operand.
 * @throws {Error} If an invalid operation name is provided.
 */
function applyOperation(currentValue: number, operation: string, operand: number): number {
  switch (operation) {
    case 'add':
      return currentValue + operand;
    case 'subtract':
      return currentValue - operand;
    case 'multiply':
      return currentValue * operand;
    case 'divide':
      return currentValue / operand;
    default:
      throw new Error('Invalid operation');
  }
}

/**
 * Returns an object with curried math operations (add, subtract, multiply, divide) that can be chained, starting with an initial value.
 *
 * @param {number} value - The initial value for curried math operations.
 * @returns {{ add: Function, subtract: Function, multiply: Function, divide: Function, value: Function }} An object with curried math operations.
 */
export function curriedMath(value: number): any {
  return {
    add: (operand: number) => curriedMath(applyOperation(value, 'add', operand)),
    subtract: (operand: number) => curriedMath(applyOperation(value, 'subtract', operand)),
    multiply: (operand: number) => curriedMath(applyOperation(value, 'multiply', operand)),
    divide: (operand: number) => curriedMath(applyOperation(value, 'divide', operand)),
    value: (): number => value,
};
}

/**
 * Calculates the nth Fibonacci number.
 *
 * @param {number} n - The position in the Fibonacci sequence to calculate.
 * @returns {number} The nth Fibonacci number.
 * @throws {Error} If a negative input is provided.
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}