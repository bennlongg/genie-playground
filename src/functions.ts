export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Performs a binary search on a sorted array to find the index of a target value.
 * @param arr - A sorted array of numbers to search in
 * @param target - The value to search for
 * @returns The index of the target value if found, or -1 if not found
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

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * @param arr - The array of numbers to sort
 * @returns A new sorted array
 */
export function bubbleSort(arr: number[]): number[] {
    // Create a copy of the array to avoid modifying the original
    const result = [...arr];
    const n = result.length;
    
    // Bubble sort algorithm
    for (let i = 0; i < n; i++) {
        // Flag to optimize if array is already sorted
        let swapped = false;
        
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if current element is greater than next element
            if (result[j] > result[j + 1]) {
                // Swap elements
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
                swapped = true;
            }
        }
        
        // If no swapping occurred in this pass, array is sorted
        if (!swapped) break;
    }
    
    return result;
}
