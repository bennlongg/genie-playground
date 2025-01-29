export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function fuzzySearch(query: string, list: string[]): string[] {
  const scores = list.map(item => ({
    item,
    score: calculateScore(query, item)
  }));

  return scores
    .sort((a, b) => b.score - a.score)
    .map(scoreObj => scoreObj.item);
}

function calculateScore(query: string, item: string): number {
  // Implement your scoring algorithm here
  // For example, you could use edit distance or other techniques
  return Math.random(); // Placeholder implementation
}
