export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function factorial(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n === 0 ? 1 : n * factorial(n - 1);
}

export function minus(a: number, b: number): number {
    return a - b;
}
