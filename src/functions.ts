export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function binarySearch<T>(arr: T[], target: T): number {
    return binarySearchRecursive(arr, target, 0, arr.length - 1);
}

function binarySearchRecursive<T>(arr: T[], target: T, start: number, end: number): number {
    if (start > end) return -1;
    
    const mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearchRecursive(arr, target, start, mid - 1);
    return binarySearchRecursive(arr, target, mid + 1, end);
}
