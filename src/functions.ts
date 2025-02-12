/**
 * Bubble Sort Algorithm
 * @description Sorts an array of numbers using the bubble sort algorithm
 * @param {number[]} arr - Array of numbers to sort, not mutated
 * @returns {number[]} Sorted array of numbers
 * @throws {TypeError} If arr is not an array of numbers
 * @example
 * bubbleSort([5, 2, 9, 1, 5, 6]) // [1, 2, 5, 5, 6, 9]
 * bubbleSort([]) // []
 * bubbleSort([1]) // [1]
 * bubbleSort([1, 2, 3]) // [1, 2, 3]
 * bubbleSort([3, 2, 1]) // [1, 2, 3]
 * bubbleSort([1, 2, 3, 2, 1]) // [1, 1, 2, 2, 3]
 * bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * bubbleSort([5, 2, -2, 0, -1, -3])         // [-3, -2, -1, 0, 2, 5]
 */
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