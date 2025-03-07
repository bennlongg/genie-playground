/**
 * Calculates the nth number in the Fibonacci sequence using recursion.
 * 
 * The Fibonacci sequence is defined as: F(n) = F(n-1) + F(n-2) where F(0) = 0 and F(1) = 1.
 * 
 * @param n - A non-negative integer representing the position in the Fibonacci sequence
 * @returns The nth number in the Fibonacci sequence
 * @throws {Error} Throws an error if n is negative
 * 
 * @example
 * fibonacci(0) // returns 0
 * fibonacci(1) // returns 1
 * fibonacci(10) // returns 55
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function bubbleSort(arr: number[]): number[] {
  // Create a copy of the array to avoid modifying the original
  const sortedArray = [...arr];
  let swapped: boolean;
  
  do {
    swapped = false;
    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        // Swap elements
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  
  return sortedArray;
}
