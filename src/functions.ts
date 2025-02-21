export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  export function binarySearch(sortedArray: number[], target: number): number {
    let left = 0;
    let right = sortedArray.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArray[mid] === target) {
        return mid;
      } else if (sortedArray[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Target not found in the array
  }
  
  export function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    const sortedArr = [...arr]; // Create a copy of the input array to sort
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          // Swap adjacent elements if they are in the wrong order
          [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        }
      }
    }
  
    return sortedArr;
  }
  
  export function curriedMath(operator: "+" | "-" | "*" | "/") {
    return (a: number, b: number): number => {
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          throw new Error("Unsupported operator");
      }
    };
  }
  
  export function isOdd(num: number): boolean {
    return num % 2 !== 0;
  }
  
  export function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  
  export function getCurrentYear(): number {
    return new Date().getFullYear();
  }
  
  function isZodiacYear(year: number, remainder: number): boolean {
    if (!Number.isInteger(year)) {
      throw new Error('Invalid input, year must be an integer');
    }
    return year % 12 === remainder;
  }
  
  export function isYearOfTheTiger(year: number): boolean {
    return isZodiacYear(year, 6);
  }
  
  export function isYearOfThePig(year: number): boolean {
    return isZodiacYear(year, 11);
  }
  
  export function isYearOfTheDog(year: number): boolean {
    return isZodiacYear(year, 10);
  }
  
  export function isYearOfTheDragon(year: number): boolean {
    return isZodiacYear(year, 8);
  }
  
  export function isYearOfTheRat(year: number): boolean {
    return isZodiacYear(year, 4);
  }
  
  export function isYearOfTheOx(year: number): boolean {
    return isZodiacYear(year, 5);
  }
  
  export function isYearOfTheRabbit(year: number): boolean {
    return isZodiacYear(year, 7);
  }
  
  export function isYearOfTheSnake(year: number): boolean {
    return isZodiacYear(year, 9);
  }
  
  export function isYearOfTheHorse(year: number): boolean {
    return isZodiacYear(year, 10);
  }
  
  export function isYearOfTheGoat(year: number): boolean {
    return isZodiacYear(year, 11);
  }
  
  export function isYearOfTheMonkey(year: number): boolean {
    return isZodiacYear(year, 0);
  }
  
  export function isYearOfTheRooster(year: number): boolean {
    return isZodiacYear(year, 1);
  }
  
  // Generic A* function
  function aStarGeneric<T>(
    start: T,
    goal: T,
    neighbors: (node: T) => T[],
    cost: (current: T, neighbor: T) => number,
    heuristic: (from: T, to: T) => number
  ): T[] {
    const frontier = new window.PriorityQueue<T>([], (node: T) => 0); // To save processing time
    frontier.add(start);
    const cameFrom = new Map<T, T | null>();
    const costSoFar = new Map<T, number>();
    cameFrom.set(start, null);
    costSoFar.set(start, 0);
  
    while (frontier.length() > 0) {
      const current = frontier.dequeue()!;
  
      if (current === goal) {
        return reconstructPath(cameFrom, current);
      }
  
      for (const next of neighbors(current)) {
        const newCost = (costSoFar.get(current) || 0) + cost(current, next);
        if (!costSoFar.has(next) || newCost < (costSoFar.get(next) || 0)) {
          costSoFar.set(next, newCost);
          const priority = newCost + heuristic(next, goal);
          frontier.add(next, priority);
          cameFrom.set(next, current);
        }
      }
    }
  
    return []; // No path found
  }
  
  // Basic example
  function aStarGrid(start: GridNode, goal: GridNode, grid: number[][]): GridNode[] {
    const neighbors = (node: GridNode) => {
      const [x, y] = node;
      const possibleNeighbors: GridNode[] = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1]
      ];
  
      // Filter out-of-bounds and invalid positions
      return possibleNeighbors.filter(
        ([nx, ny]) =>
          nx >= 0 &&
          ny >= 0 &&
          nx < grid.length &&
          ny < grid[0].length &&
          grid[ny][nx] !== 1 // 1 represents an obstacle in the grid
      );
    };
  
    const cost = (_current: GridNode, _neighbor: GridNode) => 1;
  
    const heuristic = (current: GridNode, goalNode: GridNode) =>
      Math.abs(current[0] - goalNode[0]) + Math.abs(current[1] - goalNode[1]);
  
    return aStarGeneric(start, goal, neighbors, cost, heuristic);
  }