type Operation = "add" | "subtract" | "multiply" | "divide";

/**
 * Curried math function that performs the specified arithmetic operation on two numbers.
 * @param operation - The arithmetic operation to be performed ("add", "subtract", "multiply", "divide").
 * @returns A curried function that takes two numbers as arguments and returns the result of the operation.
 */
export function curriedMath(operation: Operation) {
 return (a: number, b: number): number => {
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      default:
        throw new Error("Unsupported operation");
    }
  };
}

/**
 * Calculates the n-th Fibonacci number using recursion.
 * @param n - The position in the Fibonacci sequence (non-negative integer).
 * @returns The n-th Fibonacci number.
 * @throws Error if n is negative.
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Implements a binary search algorithm to find the target value in a sorted array.
 * @param arr - Sorted array of numbers.
 * @param target - The target value to search for.
 * @returns The index of the target in the array, or -1 if not found.
 */
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

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 * @param arr - Array of numbers to sort.
 * @returns A new array with the elements sorted in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1]], arr[j]; // Swap elements
      }
    }
  }
  return arr;
}

/**
 * A* pathfinding algorithm implementation for finding the shortest path on a 2D grid.
 * @param grid - 2D array representing the grid (1: obstacle, 0: free path).
 * @param start - Starting point [x, y].
 * @param end - Target point [x, y].
 * @returns An array of coordinates representing the shortest path (including start and end).
 *          Returns an empty array if no valid path is found.
 */
export function aStar(
  grid: number[][],
  start: [number, number],
  end: [number, number]
): number[][] {
  // Helper function to calculate the heuristic (Manhattan distance)
  function heuristic(node: [number, number], target: [number, number]): number {
    return Math.abs(node[0] - target[0]) + Math.abs(node[1] - target[1]);
  }

  // Check if the target is reachable
  if (grid[end[0]][end[1]] === 1 || grid[start[0]][start[1]] === 1) {
    return []; // Unreachable target, return empty path
  }

  const n = grid.length;
  const m = grid[0].length;

  // Helper function to check valid neighbors
  function neighbors(x: number, y: number): [number, number][] {
    const validNeighbors: [number, number][] = [];

    // Potential movements (left, right, up, down)
    const moves: [number, number][] = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];

    for (const [dx, dy] of moves) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === 0) {
        validNeighbors.push([nx, ny]);
      }
    }

    return validNeighbors;
  }

  // Helper function to reconstruct the path
  function reconstructPath(cameFrom: Map<string, [number, number]>, current: [number, number]): number[][] {
    const path: number[][] = [current];

    while (cameFrom.has(current.toString())) {
      current = cameFrom.get(current.toString()) as [number, number];
      path.push(current);
    }

    return path.reverse();
  }

  // Priority queue data structure
  class PriorityQueue {
    private heap: number[][] = [];
    private costs: Map<string, number> = new Map();

    push(node: [number, number], cost: number): void {
      const key: string = node.toString();
      this.costs.set(key, cost);
      this.heap.push(node);
      this.bubbleUp();
    }

    pop(): [number, number] | undefined {
      const first = this.heap[0];
      const last = this.heap.pop() as [number, number];

      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.sinkDown();
      }

      this.costs.delete(first.toString());
      return first;
    }

    isEmpty(): boolean {
      return this.heap.length === 0;
    }

    bubbleUp() {
      let index: number = this.heap.length - 1;
      const element: [number, number] = this.heap[index];
      const elementCost: number = this.costs.get(element.toString()) as number;

      while (index > 0) {
        const parentIndex: number = Math.floor((index - 1) / 2);
        const parent: [number, number] = this.heap[parentIndex];
        const parentCost: number = this.costs.get(parent.toString()) as number;

        if (parentCost <= elementCost) break;

        this.heap[index] = parent;
        index = parentIndex;
      }

      this.heap[index] = element;
    }

    sinkDown() {
      const length: number = this.heap.length;
      let index: number = 0;
      const element: [number, number] = this.heap[0];
      const elementCost: number = this.costs.get(element.toString()) as number;

      while (true) {
        const leftChildIndex: number = 2 * index + 1;
        const rightChildIndex: number = 2 * index + 2;
        let leftChild: [number, number];
        let rightChild: [number, number];
        let swap: number | null = null;

        if (leftChildIndex < length) {
          leftChild = this.heap[leftChildIndex];
          const leftChildCost: number = this.costs.get(leftChild.toString()) as number;
          if (leftChildCost < elementCost) {
            swap = leftChildIndex;
          }
        }

        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          const rightChildCost: number = this.costs.get(rightChild.toString()) as number;

          if (
            (swap === null && rightChildCost < elementCost) ||
            (swap !== null && rightChildCost < (this.costs.get(this.heap[swap].toString()) as number))
          ) {
            swap = rightChildIndex;
          }
        }

        if (swap === null) break;

        this.heap[index] = this.heap[swap];
        index = swap;
      }

      this.heap[index] = element;
    }
  }

  // Priority queue for open nodes
  const openSet: PriorityQueue = new PriorityQueue();

  // G-scores (cost from start to node) and F-scores (estimated total cost)
  const gScore: Map<string, number> = new Map();
  const fScore: Map<string, number> = new Map();

  // Initially, set the start node scores
  openSet.push(start, 0);
  gScore.set(start.toString(), 0);
  fScore.set(start.toString(), heuristic(start, end));

  // Set of visited (closed) nodes
  const closedSet: Set<string> = new Set();

  // Parent map to reconstruct the path
  const cameFrom: Map<string, [number, number]> = new Map();

  while (!openSet.isEmpty()) {
    // Node with the lowest F-score
    const current: [number, number] | undefined = openSet.pop();
    if (!current) return []; // If no valid path is found

    if (current[0] === end[0] && current[1] === end[1]) {
      return reconstructPath(cameFrom, current);
    }

    closedSet.add(current.toString());

    for (const neighbor of neighbors(current[0], current[1])) {
      const neighborString: string = neighbor.toString();

      if (closedSet.has(neighborString)) continue;

      const tentativeGScore: number = (gScore.get(current.toString()) as number) + 1;

      if (!gScore.has(neighborString) || tentativeGScore < (gScore.get(neighborString) as number)) {
        cameFrom.set(neighborString, current);
        gScore.set(neighborString, tentativeGScore);
        fScore.set(neighborString, tentativeGScore + heuristic(neighbor, end));

        const inOpenSet: boolean = Array.from(openSet.heap, (item) => item.toString()).includes(neighborString);
        if (!inOpenSet) {
          openSet.push(neighbor, (fScore.get(neighborString) as number));
        }
      }
    }
  }

  return []; // If no valid path is found
}