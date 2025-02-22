export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(sortedArray: number[], target: number): number {
    let left: number = 0;
    let right: number = sortedArray.length - 1;
  
    while (left <= right) {
      const middle: number = Math.floor((left + right) / 2);
      const middleValue: number = sortedArray[middle];
  
      if (middleValue === target) {
        return middle;
      } else if (middleValue < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  
    return -1;
  }
  