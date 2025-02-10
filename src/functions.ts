export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  /**
 * Perform a binary search on a sorted array of numbers.
 *
 * @param {number[]} arr - The sorted array of numbers (in ascending order) to search in.
 * @param {number} target - The number to search for in the array.
 * @returns {number} The index of the target if found; otherwise, -1.
 */
export function binarySearch(arr: number[], target: number): number {
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
  
    return -1; // Target not found
  }
  