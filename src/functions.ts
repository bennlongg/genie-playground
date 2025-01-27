export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

function heuristic(a: [number, number], b: [number, number]): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function reconstructPath(cameFrom: Map<string, [number, number]>, current: [number, number]): [number, number][] {
  const totalPath = [current];
  while (cameFrom.has(current.toString())) {
    current = cameFrom.get(current.toString())!;
    totalPath.unshift(current);
  }
  return totalPath;
}

export function aStar(
  start: [number, number],
  goal: [number, number],
  grid: number[][]
): [number, number][] {
  const openSet = new MinHeap<[number, number]>((a, b) => fScore[a.toString()]! < fScore[b.toString()]!);
  openSet.push(start);

  const cameFrom = new Map<string, [number, number]>();

  const gScore = new Map<string, number>();
  gScore.set(start.toString(), 0);

  const fScore = new Map<string, number>();
  fScore.set(start.toString(), heuristic(start, goal));

  while (!openSet.isEmpty()) {
    const current = openSet.pop()!;

    if (current[0] === goal[0] && current[1] === goal[1]) {
      return reconstructPath(cameFrom, current);
    }

    const neighbors = [
      [current[0] + 1, current[1]],
      [current[0] - 1, current[1]],
      [current[0], current[1] + 1],
      [current[0], current[1] - 1],
    ];

    for (const neighbor of neighbors) {
      if (
        neighbor[0] < 0 ||
        neighbor[0] >= grid.length ||
        neighbor[1] < 0 ||
        neighbor[1] >= grid[0].length ||
        grid[current[0]][current[1]] === Infinity
      ) {
        continue;
      }

      const tentativeGScore =
        gScore.get(current.toString())! + grid[current[0]][current[1]];

      if (
        tentativeGScore < gScore.get(neighbor.toString())! ||
        !gScore.has(neighbor.toString())
      ) {
        cameFrom.set(neighbor.toString(), current);
        gScore.set(neighbor.toString(), tentativeGScore);
        fScore.set(
          neighbor.toString(),
          tentativeGScore + heuristic(neighbor as [number, number], goal)
        );
        if (!openSet.contains(neighbor as [number, number])) {
          openSet.push(neighbor as [number, number]);
        }
      }
    }
  }

  return [];
}

class MinHeap<T> {
  private heap: T[];
  private comparator: (a: T, b: T) => boolean;

  constructor(comparator: (a: T, b: T) => boolean) {
    this.heap = [];
    this.comparator = comparator;
  }

  public push(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  public pop(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const result = this.heap.shift();
    if (this.heap.length > 0) {
      this.heap.unshift(this.heap.pop()!);
      this.bubbleDown();
    }
    return result;
  }