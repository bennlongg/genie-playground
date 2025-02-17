export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search to find the index of a target value in a sorted array of numbers.
 *
 * @param {number[]} arr - A sorted array of numbers where the search will be performed.
 * @param {number} target - The number being searched for in the array.
 * @returns {number} The index of the target value if found, or -1 if not found or the input is invalid.
 *
 * @note It is assumed that the input array is sorted. If it is not, the function may return incorrect results.
 */
export function binarySearch(arr: number[], target: number): number {
    if (!arr || arr.length == 0) {
      return -1;
    }
    let low = 0;
    let high = arr.length - 1;
    while (high >= low) {
      let mid = Math.floor((high + low) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  } 