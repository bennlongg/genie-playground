export function fibonacci(n: number, returnSequence: boolean = false): number | number[] {
  if (n < 0) throw new Error("Negative numbers are not allowed");

  if (returnSequence) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }

  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
