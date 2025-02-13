export function binarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = arr[mid];
      if (guess === target) {
        return mid;
      } else if (guess < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1; // target not found
  }


export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }