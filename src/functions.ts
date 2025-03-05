/**
 * Calculates the nth number in the Fibonacci sequence.
 * The Fibonacci sequence starts with 0, 1, 1, 2, 3, 5, 8, ...
 * where each number is the sum of the two preceding ones.
 * 
 * @param n - The position in the Fibonacci sequence (must be non-negative)
 * @returns The nth Fibonacci number
 * @throws Error if n is negative
 */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the index of a target element.
 * 
 * @param arr - The sorted array to search in
 * @param target - The element to search for
 * @returns The index of the target element if found, otherwise -1
 */
export function binarySearch<T>(arr: T[], target: T): number {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
