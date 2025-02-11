export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(arr: number[], target: number, compareFn: (a: number, b: number) => number = (a, b) => a - b): number {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const comparison = compareFn(arr[mid], target);
  
      if (comparison === 0) {
        return mid;
      } else if (comparison < 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
   
    return -1;
  }