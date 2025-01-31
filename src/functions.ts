export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

export function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
      let swapped = false;
      
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
              swapped = true;
          }
      }
      
      // If no two elements were swapped by inner loop, then break
      if (!swapped) break;
  }
  
  return arr;
}

export { fibonacci, binarySearch, bubbleSort };

// Types for grid-based A* pathfinding
type Position = [number, number];
type Grid = boolean[][];

// Helper class for priority queue
class PriorityQueue<T> {
  private heap: { item: T; priority: number }[];

  constructor() {
      this.heap = [];
  }

  push(item: T, priority: number): void {
      this.heap.push({ item, priority });
      this.heap.sort((a, b) => b.priority - a.priority); // Will keep smallest priority at end
  }

  pop(): T | undefined {
      const poppedItem = this.heap.pop();
      return poppedItem ? poppedItem.item : undefined;
  }

  isEmpty(): boolean {
      return this.heap.length === 0;
  }
}

// Default heuristic: Manhattan distance
const manhattanDistance = ([x1, y1]: Position, [x2, y2]: Position): number =>
Math.abs(x2 - x1) + Math.abs(y2 - y1);

// Default neighbor function
const getNeighborsDefault = ([x, y]: Position): Position[] => [
[x + 1, y],
[x - 1, y],
[x, y + 1],
[x, y - 1],
];

// A* Algorithm implementation
export const aStar = (
grid: Grid,
start: Position,
goal: Position,
{
heuristic = manhattanDistance,
getNeighbors = getNeighborsDefault,
}: { heuristic?: typeof manhattanDistance; getNeighbors?: typeof getNeighborsDefault } = {}
): Position[] | null => {
// Priority queue with initial start position having priority of zero
const openSet = new PriorityQueue<Position>();
openSet.push(start, heuristic(start, goal));

// Maps to store costs from start to each position and estimated total costs
const gScore: Map<string, number> = new Map();
gScore.set(start.toString(), 0);

const fScore: Map<string, number> = new Map();
fScore.set(start.toString(), heuristic(start, goal));

// Map to reconstruct path from goal position back to start
const cameFrom: Map<string, Position> = new Map();

while (!openSet.isEmpty()) {
// Get current position with lowest estimated cost
const current = openSet.pop();
if (!current) break;

if (current[0] === goal[0] && current[1] === goal[1]) {
// Reconstruct path when goal reached
const path: Position[] = [];
let tempCurrent: Position | undefined =
current;
while (tempCurrent !== undefined) {
path.unshift(tempCurrent);
tempCurrent =
cameFrom.get(tempCurrent.toString());
}
return path;
}

// Explore neighbors of current position
for (const neighbor of getNeighbors(current)) {
// Check bounds and skip invalid positions
if (
neighbor[0] < 0 ||
neighbor[0] >= grid.length ||
neighbor[1] < 0 ||
neighbor[1] >= grid[0].length ||
!grid[neighbor[0]][neighbor[1]]
)
continue;

const tentativeGScore =
(gScore.get(current.toString()) || Infinity) + // Prevent undefined scores causing NaN
heuristic(current,
neighbor);
if (
tentativeGScore <
(gScore.get(neighbor.toString()) || Infinity)
) {
// Update cost estimates if better path found
cameFrom.set(neighbor.toString(), current);
gScore.set(neighbor.toString(), tentativeGScore);
fScore.set(
neighbor.toString(),
tentativeGScore +
heuristic(neighbor,
goal)
);

openSet.push(neighbor,
fScore.get(neighbor.toString()) ||
Infinity);// Re-add neighbor with updated priority estimate
}
}
}

// Return null if no valid path found from start to goal
return null;
};
