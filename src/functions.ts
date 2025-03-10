export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch(arr: number[], target: number): number {
    if (!Array.isArray(arr)) throw new Error("Input must be an array");
    if (arr.length === 0) throw new Error("Array cannot be empty");
    
    // Check if array is sorted
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) throw new Error("Array must be sorted in ascending order");
    }
    
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

export function bubbleSort(arr: number[]): number[] {
    if (!Array.isArray(arr)) throw new Error("Input must be an array");
    
    // Validate all elements are numbers
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') throw new Error("Array must contain only numbers");
    }
    
    // Create a copy to avoid modifying the original array
    const result = [...arr];
    
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                // Swap elements
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    
    return result;
}
