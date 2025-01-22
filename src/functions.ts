export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function isOdd(n: number): boolean {
    return n % 2 !== 0;
}

export function isEven(n: number): boolean {
    return n % 2 === 0;
}

