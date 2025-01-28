export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export const safeJsonParse = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
};
