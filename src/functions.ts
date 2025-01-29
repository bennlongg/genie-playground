export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function unique(arr: number[]): number[] {
    const set = new Set<number>();
    arr.forEach((num) => set.add(num));
    return Array.from(set);
}
