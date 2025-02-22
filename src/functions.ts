export function fibonacci(n: number): number {
    /**
     * Calculates the nth Fibonacci number.
     * @param {number} n - The position in the Fibonacci sequence.
     * @returns {number} The nth Fibonacci number.
     * @throws {Error} If a negative number is provided.
     */
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(nums: number[], target: number): number {
    /**
     * Performs a binary search on a sorted array of numbers.
     * @param {number[]} nums - A sorted array of numbers.
     * @param {number} target - The number to search for.
     * @returns {number} The index of the target number, or -1 if not found.
     */
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

export function bubbleSort(arr: number[]): number[] {
    /**
     * Sorts an array of numbers in ascending order using the bubble sort algorithm.
     * @param {number[]} arr - The array of numbers to be sorted.
     * @returns {number[]} The sorted array of numbers.
     */
    for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap adjacent elements
        }
    }
    }
    return arr;
}
