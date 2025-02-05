export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

  export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    const sortedArr = [...arr]; // Create a copy of the array to avoid mutating the original array
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          // Swap elements if they are in the wrong order
          const temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp;
        }
      }
    }
  
    return sortedArr;
  }