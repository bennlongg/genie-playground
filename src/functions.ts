export function bubbleSort(arr: number[]): number[] {
  const copy = [...arr];
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < copy.length - 1; i++) {
      if (copy[i] > copy[i + 1]) {
        [copy[i], copy[i + 1]] = [copy[i + 1], copy[i]];
        swapped = true;
      }
    }
  }
  return copy;
}





/**
 * Fibonacci Sequence Generator
 * @description Generates the nth number in the Fibonacci sequence
 * @param {number} n - The position in the Fibonacci sequence to generate
 * @returns {number} The nth number in the Fibonacci sequence
 * @throws {Error} If a negative number is provided as input
 * @example
 * fibonacci(0) returns 0
 * fibonacci(1) returns 1
 * fibonacci(2) returns 1
 * fibonacci(10) returns 55
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}