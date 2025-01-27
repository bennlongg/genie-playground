export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

export function isodd(n: number): boolean {
    return n % 2 === 1;
}

export function iseven(n: number): boolean {
    return n % 2 === 0;
}
