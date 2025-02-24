/**
 * Calculates the nth Fibonacci number.
 *
 * @param {number} n - The index in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 * @throws Will throw an error if the input is a negative number.
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the index of the target value.
 *
 * @param {number[]} arr - A sorted array of numbers.
 * @param {number} target - The target number to search for.
 * @returns {number} The index of the target if found, or -1 if not present in the array.
 */
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];

        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
