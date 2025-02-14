export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  export function binarySearch(numericallySorted: number[], el: number): number | undefined {
    let left = 0;
    let right = numericallySorted.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midEl = numericallySorted[mid];
      if (midEl === el) return mid;
      if (midEl < el) left = mid + 1;
      if (midEl > el) right = mid - 1; 
    }
    return undefined;
  }