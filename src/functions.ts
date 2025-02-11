export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  export function binarySearch(sortedArray: number[], target: number): number {
    let low = 0;
    let high = sortedArray.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (sortedArray[mid] < target) {
        low = mid + 1;
      } else if (sortedArray[mid] > target) {
        high = mid - 1;
      } else {
        return mid; // Return the index if the target is found.
      }
    }
  
    return -1; // Return -1 if the target is not found.
  }
  