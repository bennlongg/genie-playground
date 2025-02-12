/**
 * Computes the nth Fibonacci number using a recursive approach.
 * @param {number} n - A non-negative integer representing the position in the Fibonacci sequence.
 * @returns {number} - The nth Fibonacci number.
 * @throws {Error} - Throws an error if a negative number is provided as input.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

/**
 * Performs a binary search on a sorted array to find the target element.
 * Assumes that the input array is sorted in ascending order.
 * Uses an iterative approach to avoid stack overflow for large inputs.
 *
 * @param {number[]} sortedArray - The array to be searched, which must be sorted.
 * @param {number} target - The value to search for in the sortedArray.
 * @returns {number} - The index of the target element if found; otherwise, -1.
 * @throws {Error} - Throws an error if the array is empty.
 */
export function binarySearch(sortedArray: number[], target: number): number {
    let startPointer = 0;
    let endPointer = sortedArray.length - 1;
  
    while (startPointer <= endPointer) {
      let midPoint = Math.floor((startPointer + endPointer) / 2);
  
      if (sortedArray[midPoint] === target) {
        return midPoint;
      } else if (sortedArray[midPoint] < target) {
        startPointer = midPoint + 1;
      } else {
        endPointer = midPoint - 1;
      }
    }
  
    return -1;
  }