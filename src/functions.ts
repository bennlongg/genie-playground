export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  export function binarySearch(arr: number[], target: number): number {
    if (!Array.isArray(arr) || arr.length === 0) return -1; // Handle edge case for empty array
    if (!arr.every((_, i) => i === 0 || arr[i - 1] <= arr[i])) {
      throw new Error('Input array must be sorted');
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
        return -1; // Return -1 if the target value is not found
      }