/**
 * A collection of utility functions.
 */

/**
 * Performs a binary search on a sorted array.
 * 
 * @param arr - The sorted array to search in
 * @param target - The value to search for
 * @returns The index of the target if found, otherwise -1
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
  
  return -1;
}
