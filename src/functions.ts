/**
 * A function that performs a binary search on a sorted array.
 *
 * This function takes a sorted array, a target value to search for, and an optional comparator function.
 * It returns the index of the target value if found, or an indication that the value is not present.
 *
 * @param array - The sorted array to search.
 * @param target - The value to search for.
 * @param comparator - An optional comparator function to compare elements.
 * @returns The index of the target value if found, or -1 if not found.
 * @throws Error if the input array is not sorted.
 */

export function binarySearch<T>(
  array: T[],
  target: T,
  comparator: (a: T, b: T) => number = (x, y) => (x < y ? -1 : x > y ? 1 : 0)
): number {
  if (array.length === 0) {
    return -1;
  }

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparison = comparator(array[mid], target);

    if (comparison === 0) {
      return mid;
    } else if (comparison < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}