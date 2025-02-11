export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function powerOf2(exponent: number): number {
    if (exponent < 0) throw new Error("Negative exponents are not allowed");
    return 2 ** exponent;
  }
  
  export function binarySearch(arr: number[], target: number): number {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
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
  
    return -1; // Target not found
  }
  