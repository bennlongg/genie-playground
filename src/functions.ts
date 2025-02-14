export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function bubbleSort(arr: number[]): number[] {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
        throw new Error("Input must be a number array");
    }
    arr.forEach((_item, i) => {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    });
    return arr;
}