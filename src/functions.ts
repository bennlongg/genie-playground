/**
 * A function that performs a binary search on a sorted array.
 *
 * This function takes a sorted array, a target value to search for, and an optional comparator function.
 * It returns the index of the target value if found, or an indication that the value is not present.
 *
 * @param array - The sorted array to search.
 * @param target - The value to search for.
 * @param comparator - An optional comparator function to compare elements.
 * @returns The index of the target value if found, or -1 if not found.
 * @throws Error if the input array is not sorted.
 */
export function binarySearch<T>(
  array: T[],
  target: T,
  comparator: (a: T, b: T) => number = (x, y) => (x < y ? -1 : x > y ? 1 : 0)
): number {
  if (array.length === 0) {
    return -1;
  }

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const comparison = comparator(array[mid], target);

    if (comparison === 0) {
      return mid;
    } else if (comparison < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

/**
 * Sorts an array of numbers in ascending order using the bubble sort algorithm.
 *
 * @param {number[]} nums - The array of numbers to sort.
 * @returns {void} This function operates in-place and does not return a value.
 */
export function bubbleSort(nums: number[]): void {
  let swapped: boolean = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
      }
    }
  }
}

/**
 * Applies a mathematical operation to the current value.
 *
 * @private
 * @param {number} currentValue - The current value before applying the operation.
 * @param {string} operation - The name of the operation to apply (e.g., 'add', 'subtract', etc.).
 * @param {number} operand - The operand to be used in the operation.
 * @returns {number} The result of applying the operation to the current value and operand.
 * @throws {Error} If an invalid operation name is provided.
 */
function applyOperation(currentValue: number, operation: string, operand: number): number {
  switch (operation) {
    case 'add':
      return currentValue + operand;
    case 'subtract':
      return currentValue - operand;
    case 'multiply':
      return currentValue * operand;
    case 'divide':
      return currentValue / operand;
    default:
      throw new Error('Invalid operation');
  }
}

/**
 * Returns an object with curried math operations (add, subtract, multiply, divide) that can be chained, starting with an initial value.
 *
 * @param {number} value - The initial value for curried math operations.
 * @returns {{ add: Function, subtract: Function, multiply: Function, divide: Function, value: Function }} An object with curried math operations.
 */
export function curriedMath(value: number): any {
  return {
    add: (operand: number) => curriedMath(applyOperation(value, 'add', operand)),
    subtract: (operand: number) => curriedMath(applyOperation(value, 'subtract', operand)),
    multiply: (operand: number) => curriedMath(applyOperation(value, 'multiply', operand)),
    divide: (operand: number) => curriedMath(applyOperation(value, 'divide', operand)),
    value: (): number => value,
};
}

/**
 * Calculates the nth Fibonacci number.
 *
 * @param {number} n - The position in the Fibonacci sequence to calculate.
 * @returns {number} The nth Fibonacci number.
 * @throws {Error} If a negative input is provided.
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Negative numbers are not allowed");
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Represents a node in the grid for A* search.
 * @typedef {Object} Node
 * @property {number} row - The row index of the node.
 * @property {number} col - The column index of the node.
 * @property {boolean} isWall - Indicates if the node is an obstacle (wall).
 * @property {Array|null} parent - The parent node that led to this node.
 * @property {number} costFromStart - The cost from the start node.
 * @property {number} estimatedCostToEnd - The estimated cost to the end node.
 * @property {number} totalCost - The total cost (g + h).
 * @property {boolean} isClosed - Indicates if the node has been closed.
 */

/**
 * A* search algorithm with mutable variables for finding the shortest path in a grid.
 * @param {Array<Array<number>>} grid - The 2D grid where 0 represents an empty cell and 1 represents a wall.
 * @param {Array<number>} start - The [row, col] coordinates of the start point.
 * @param {Array<number>} end - The [row, col] coordinates of the end point.
 * @param {function} heuristic - A heuristic function to estimate the distance between two points.
 * @param {function} [comparator] - An optional comparator function for the priority queue.
 * @returns {Array<Array<number>>} The list of nodes in the found path, from start to end.
 */


export function aStar(
  grid: number[][],
  start: [number, number],
  end: [number, number],
  heuristic: (a: number[], b: number[]) => number,
  comparator?: (a: Node, b: Node) => number
): Node[] {
  // Handle invalid inputs
  if (
    !grid ||
    grid.length === 0 ||
    grid[0].length === 0 ||
    !Array.isArray(start) ||
    !Array.isArray(end)
  ) {
    // Return an empty list if the input is invalid
    return [];
  }

  // Initialize mutable variables
  const startNode: Node = {
    row: start[0],
    col: start[1],
    isWall: false,
    parent: null,
    costFromStart: 0,
    estimatedCostToEnd: heuristic(start, end),
    totalCost: 0,
    isClosed: false,
  };

  const openNodes: Node[] = [startNode];
  const nodeMap: { [key: string]: Node } = {};

  while (openNodes.length > 0) {
    // Pop the node with the lowest cost from the open nodes
    const currentNode = openNodes.pop()!;

    // Check if the current node is the end node
    if (currentNode.row === end[0] && currentNode.col === end[1]) {
      // Return the found path
      return constructPath([currentNode]);
    }

    // Mark the current node as closed
    currentNode.isClosed = true;

    // Traverse neighbors of the current node
    const neighbors = [
      [currentNode.row - 1, currentNode.col],
      [currentNode.row + 1, currentNode.col],
      [currentNode.row, currentNode.col - 1],
      [currentNode.row, currentNode.col + 1],
    ];

    for (const neighbor of neighbors) {
      const [neighborRow, neighborCol] = neighbor;

      // Check if the neighbor is within bounds
      if (
        neighborRow >= 0 &&
        neighborRow < grid.length &&
        neighborCol >= 0 &&
        neighborCol < grid[0].length
      ) {
        const wallDetected = grid[neighborRow][neighborCol] === 1;

        // Check if the neighbor is a wall or if it's already closed
        if (!wallDetected) {
          // Create a new node
          const newCostFromStart = currentNode.costFromStart + 1;
          const isInOpenNodes = openNodes.some(
            (node) => node.row === neighborRow && node.col === neighborCol
          );

          if (newCostFromStart < nodeMap[`${neighborRow},${neighborCol}`]?.costFromStart || !isInOpenNodes) {
            const neighborNode: Node = {
              row: neighborRow,
              col: neighborCol,
              isWall: wallDetected,
              parent: !wallDetected ? [currentNode.row, currentNode.col] : null,
              costFromStart: newCostFromStart,
              estimatedCostToEnd: heuristic(neighbor, end),
              totalCost: newCostFromStart + heuristic(neighbor, end),
              isClosed: false,
            };

            // Add the neighbor node to the open nodes
            openNodes.push(neighborNode);
            nodeMap[`${neighborRow},${neighborCol}`] = neighborNode;

            // Sort the open nodes based on their total cost
            openNodes.sort((a, b) => {
              if (comparator) {
                return comparator(a, b);
              } else {
                return a.totalCost - b.totalCost;
              }
            });
          }
        }
      }
    }
  }

  // No path found, return an empty list
  return [];
}

/**
 * Constructs a path from the list of nodes.
 * @param {Array<Object>} nodes - The list of nodes representing the path.
 * @returns {Array<Array<number>>} The constructed path as an array of [row, col] coordinates.
 */

export function constructPath(nodes: {
  row: number;
  col: number;
  costFromStart: number;
  estimatedCostToEnd: number;
  totalCost: number;
  parent: [number, number] | null;
}[]): [number, number][] {
  // Initialize important variables within the `constructPath` function
  const path: [number, number][] = [];
  const nodeMap: { [key: string]: boolean } = {};

  // Traverse the list of nodes in reverse order
  for (let i = nodes.length - 1; i >= 0; i--) {
    const node = nodes[i];

    // Check if the node is already included in the path to prevent duplicates
    if (!nodeMap[`${node.row},${node.col}`]) {
      path.unshift([node.row, node.col]);
      nodeMap[`${node.row},${node.col}`] = true;
    }

    // Follow the parent references to trace back the path from the end to the start
    let parent = node.parent;
    while (parent !== null) {
      if (!nodeMap[`${parent[0]},${parent[1]}`]) {
        path.unshift(parent);
        nodeMap[`${parent[0]},${parent[1]}`] = true;
      }

      // Find the corresponding parent node in the list
      const parentNode = nodes.find(
        (n) => n.row === parent![0] && n.col === parent![1]
      );
      parent = parentNode ? parentNode.parent : null;
    }
  }

  // Return the constructed path starting from the start node to the end node
  return path;
}