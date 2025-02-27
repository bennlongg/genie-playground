export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search to find the position of a target value within a sorted array.
 * Binary search works by repeatedly dividing the search interval in half, making it
 * significantly more efficient than linear search for large datasets.
 * 
 * @param arr - A sorted array of numbers to search in. The array must be sorted in ascending order
 *              for the binary search algorithm to work correctly.
 * @param target - The value to search for within the array
 * @returns The index of the target if found in the array, or -1 if the target is not present
 * 
 * @example
 * // returns 2
 * binarySearch([1, 3, 5, 7, 9], 5);
 * 
 * @example
 * // returns -1
 * binarySearch([1, 3, 5, 7, 9], 4);
 * 
 * @complexity Time: O(log n) - where n is the length of the array
 * @complexity Space: O(1) - constant space used regardless of input size
 */
export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
