/**
 * Swaps two elements in an array.
 * @param arr - The array containing elements to swap
 * @param i - Index of the first element
 * @param j - Index of the second element
 */
export function swap<T>(arr: T[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * Compares two values and returns a number indicating their relative order.
 * @param a - First value to compare
 * @param b - Second value to compare
 * @param comparator - Optional custom comparator function
 * @returns -1 if a < b, 0 if a === b, 1 if a > b
 */
export function compare<T>(a: T, b: T, comparator?: (a: T, b: T) => number): number {
  // Use custom comparator if provided
  if (comparator) {
    return comparator(a, b);
  }
  
  // Default comparison for primitives
  if (a === b) return 0;
  
  // Handle numeric and string comparisons
  if (typeof a === 'number' && typeof b === 'number') {
    return a < b ? -1 : 1;
  }
  
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }
  
  // Fallback for other types
  return a < b ? -1 : 1;
}
