export function exponentialMovingAverage(
  alpha: number,
  previousEMA: number,
  currentValue: number
): number {
  return alpha * currentValue + (1 - alpha) * previousEMA;
}
