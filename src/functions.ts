export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(array: number[], target: number): boolean {
    let low = 0;
    let high = array.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const value = array[mid];
  
      if (value === target) {
        return true;
      } else if (value < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return false;
  }
