export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

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