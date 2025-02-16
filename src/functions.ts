export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
export function bubbleSort(arr: number[]): number[] {
    // Return the original array if it is empty or has only one element
    if (arr.length <= 1) {
      return arr;
    }
  
    // Create a copy of the input array to avoid modifying the original array
    const sortedArr = [...arr];
  
    let swapped: boolean;
    do {
      swapped = false;
      for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i] > sortedArr[i + 1]) {
          // Swap adjacent elements if they are in the wrong order, using destructuring
          [sortedArr[i], sortedArr[i + 1]] = [sortedArr[i + 1], sortedArr[i]];
          swapped = true; // Set the flag to indicate a swap occurred
        }
      }
    } while (swapped); // Repeat the process until no more swaps are needed
  
    return sortedArr;
  }