export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return the index where target is found
      } else if (arr[mid] < target) {
        left = mid + 1; // Move search to the right half
      } else {
        right = mid - 1; // Move search to the left half
      }
    }
  
    return -1; // Target not found
  }