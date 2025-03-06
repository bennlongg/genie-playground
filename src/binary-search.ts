/**
 * Binary Search Algorithm
 * 
 * Efficiently finds the position of a target value within a sorted array.
 * Time Complexity: O(log n) - where n is the length of the array
 * Space Complexity: O(1) - constant extra space
 * 
 * @param sortedArray - A sorted array of numbers to search within
 * @param target - The value to find in the array
 * @returns The index of the target if found, otherwise -1
 */
export function binarySearch(sortedArray: number[], target: number): number {
  let left = 0;
  let right = sortedArray.length - 1;
  
  while (left <= right) {
    // Calculate middle index (avoiding overflow in large arrays)
    const mid = left + Math.floor((right - left) / 2);
    
    // Check if target is present at mid
    if (sortedArray[mid] === target) {
      return mid;
    }
    
    // If target is greater, ignore left half
    if (sortedArray[mid] < target) {
      left = mid + 1;
    }
    // If target is smaller, ignore right half
    else {
      right = mid - 1;
    }
  }
  
  // Target not found
  return -1;
}

/**
 * Generic Binary Search Algorithm
 * 
 * A generic version of binary search that works with any comparable type.
 * 
 * @param sortedArray - A sorted array of elements
 * @param target - The value to find in the array
 * @param compareFn - Optional custom comparison function
 * @returns The index of the target if found, otherwise -1
 */
export function binarySearchGeneric<T>(
  sortedArray: T[],
  target: T,
  compareFn: (a: T, b: T) => number = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
): number {
  let left = 0;
  let right = sortedArray.length - 1;
  
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const comparison = compareFn(sortedArray[mid], target);
    
    // Element found
    if (comparison === 0) {
      return mid;
    }
    
    if (comparison < 0) {
      // Search in the right half
      left = mid + 1;
    } else {
      // Search in the left half
      right = mid - 1;
    }
  }
  
  return -1;
}
