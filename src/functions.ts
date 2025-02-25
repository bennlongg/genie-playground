/**
 * Calculates the nth number in the Fibonacci sequence.
 * 
 * @param n - The position in the Fibonacci sequence (must be non-negative)
 * @returns The Fibonacci number at position n
 * @throws Error if n is negative
 * 
 * @example
 * fibonacci(0); // Returns 0
 * fibonacci(1); // Returns 1
 * fibonacci(10); // Returns 55
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Searches for a target value in a sorted array using the binary search algorithm.
 * 
 * @param array - A sorted array of numbers to search within
 * @param target - The value to search for in the array
 * @returns The index of the target if found, or -1 if the target is not present in the array
 * 
 * @example
 * binarySearch([1, 3, 5, 7, 9], 5); // Returns 2
 * binarySearch([1, 3, 5, 7, 9], 6); // Returns -1
 * 
 * @remarks
 * Time Complexity: O(log n) where n is the length of the array
 */
export function binarySearch(array: number[], target: number): number {
    let left = 0;
    let right = array.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
