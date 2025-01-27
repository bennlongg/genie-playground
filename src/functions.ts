export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export const star = (str: string): string => {
  if (str.length === 0) return "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
    if (i !== str.length - 1) result += "*";
  }
  return result;
};
