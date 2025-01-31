export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function binarySearch(arr: number[], target: number): number {
  // Check if input array is sorted
  const isSorted = arr.every((val, i, arr) => !i || arr[i-1] <= val);
  if (!isSorted) {
      throw new Error("Input array must be sorted");
  }
  
  let low = 0;
  let high = arr.length - 1;
  
  while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const midVal = arr[mid];
      
      if (midVal === target) {
          return mid;
      } else if (midVal < target) {
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  
  return -1; // Target not found
}
