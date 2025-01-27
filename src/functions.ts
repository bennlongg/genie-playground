export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function aStar(
  rows: number,
  cols: number,
  start: [number, number],
  end: [number, number],
  obstacles: Set<string>,
  heuristic = manhattanDistance
): [number, number][] | null {
  const openSet = new Set<string>();
  const cameFrom = new Map<string, string>();
  const gScore = new Map<string, number>();
  const fScore = new Map<string, number>();

  const startKey = `${start[0]},${start[1]}`;
  const endKey = `${end[0]},${end[1]}`;

  openSet.add(startKey);
  gScore.set(startKey, 0);
  fScore.set(startKey, heuristic(start, end));

  while (openSet.size > 0) {
    let currentKey = "";
    let currentFScore = Infinity;

    for (const key of openSet) {
      const score = fScore.get(key) ?? Infinity;
      if (score < currentFScore) {
        currentFScore = score;
        currentKey = key;
      }
    }

    if (currentKey === endKey) {
      return reconstructPath(cameFrom, currentKey);
    }

    openSet.delete(currentKey);

    const [currentRow, currentCol] = currentKey.split(",").map(Number);
    const neighbors: [number, number][] = [
      [currentRow + 1, currentCol],
      [currentRow - 1, currentCol],
      [currentRow, currentCol + 1],
      [currentRow, currentCol - 1],
    ];

    for (const neighbor of neighbors) {
      const neighborKey = `${neighbor[0]},${neighbor[1]}`;

      if (!isValidPoint(neighbor[0], neighbor[1], rows, cols) || obstacles.has(neighborKey)) {
        continue;
      }

      const tentativeGScore = (gScore.get(currentKey) ?? Infinity) + 1;

      if (tentativeGScore < (gScore.get(neighborKey) ?? Infinity)) {
        cameFrom.set(neighborKey, currentKey);
        gScore.set(neighborKey, tentativeGScore);
        fScore.set(neighborKey, tentativeGScore + heuristic(neighbor as [number, number], end));

        if (!openSet.has(neighborKey)) {
          openSet.add(neighborKey);
        }
      }
    }
  }

  return null;
}

function manhattanDistance(a: [number, number], b: [number, number]): number {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function reconstructPath(cameFrom: Map<string, string>, current: string): [number, number][] {
  const totalPath: [number, number][] = [];
  
  while (cameFrom.has(current)) {
    const [row, col] = current.split(",").map(Number);
    totalPath.unshift([row, col]);
    current = cameFrom.get(current)!;
  }

  return totalPath;
}

function isValidPoint(row: number, col: number, rows: number, cols: number): boolean {
  return row >= 0 && row < rows && col >= 0 && col < cols;
}

export function concatenateStrings(strings: string[]): string {
return strings.join(" ");
}
