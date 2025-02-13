/**
 * Calculates nth fibonacci number.
 * @param {number} n Nth postion of fibonacci to calculate. N should not be negative number
 * @returns {number} Nth fibonacci number to calculate
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }


/**
 * Calculates index of target number in sorted list of integer using binary-search matching. If no match found returns -1, else returns matching index
 * @param {number[]} l Sorted list of integer numbers in which target number is to be found
 * @param {number} target Number to be found from sorted list l
 * @returns {number} index of target number in sorted list. If target not present returns -1
 */
export function binarySearch(l: number[], target: number): number {
    let low = 0;
    let high = l.length - 1;
    while (true) {
        if (low > high) return -1;
        let middle = Math.floor((low + high) as number / 2  as number);
        if (l[middle] < target) low = middle + 1;
        else if (l[middle] > target) high = middle - 1;
        else return middle;
    }
}