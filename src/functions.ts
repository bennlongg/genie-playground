/**
   * Calculates the nth Fibonacci number.
   * @param {number} n - The position of the Fibonacci number to calculate.
   * @returns {number} The nth Fibonacci number.
   * @throws {Error} If a negative number is provided.
   * @description
   * The function calculates the nth Fibonacci number using a recursive approach.
   * If the provided number is negative, it throws an error to indicate that negative
   * numbers are not allowed. For non-negative numbers, it computes the Fibonacci
   * number using the formula:
   * - F(0) = 0
   * - F(1) = 1
   * - F(n) = F(n-1) + F(n-2)
   * @category Mathematics
   * @example
   * fibonacci(0); // Returns 0
   * fibonacci(1); // Returns 1
   * fibonacci(6); // Returns 8
   */
export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  /**
  * Performs a binary search on a sorted array to find the index of a target element.
  * @param {Array<number>} sortedArray - The sorted array in which to search for the target element.
  * @param {number} target - The element to search for in the sorted array.
  * @returns {number} The index of the target element if found, otherwise -1.
  * @description
  * The function performs a binary search on the provided sorted array to locate the
  * index of the specified target element. It uses a divide-and-conquer approach to
  * iteratively narrow down the search space by comparing the middle element with
  * the target. If the middle element matches the target, its index is returned.
  * Otherwise, the search continues in either the left or right half of the array
  * until the target is found or the search space is exhausted.
  * @category Algorithms
  * @example
  * binarySearch([1, 3, 5, 7, 9], 5); // Returns 2
  * binarySearch([2, 4, 6, 8, 10], 7); // Returns -1
  * binarySearch([], 42); // Returns -1
  */
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
  
  /**
  * Performs bubble sort on the given array and returns a sorted copy of the array.
  * @param {Array<number>} arr - The input array to be sorted.
  * @returns {Array<number>} The sorted copy of the input array.
  * @category Algorithms
  * @example
  * bubbleSort([5, 3, 8, 2, 1]); // Returns [1, 2, 3, 5, 8]
  * bubbleSort([4, 4, 4, 2, 2, 1]); // Returns [1, 2, 2, 4, 4, 4]
  * bubbleSort([]); // Returns []
  */
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
  
   /**
   * Creates a curried function that performs arithmetic operations based on the provided operator.
   * @param {string} operator - The arithmetic operator to use ("+", "-", "*", "/").
   * @throws {Error} Throws an error if an unsupported operator is provided.
   * @returns {function(number, number): number} A curried function that performs the mathematical operation.
   * @category Mathematics
   * @example
   * const add = curriedMath("+");
   * const result = add(3, 4); // Returns 7
   */
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
  
 /**
   * Determines if a number is odd.
   * @param {number} num - The input number to check.
   * @returns {boolean} True if the number is odd, false otherwise.
   * @category Mathematics
   * @example
   * isOdd(3); // Returns true
   * isOdd(8); // Returns false
   */
  export function isOdd(num: number): boolean {
    return num % 2 !== 0;
  }
  
  /**
   * Determines if a number is even.
   * @param {number} num - The input number to check.
   * @returns {boolean} True if the number is even, false otherwise.
   * @category Mathematics
   * @example
   * isEven(4); // Returns true
   * isEven(7); // Returns false
   */
  export function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  
   /**
     * Retrieves the current year.
     * @returns {number} The current year as an integer value.
     * @description
     * This function returns the current year based on the system clock. It uses
     * the built-in JavaScript Date object to obtain the current date and extracts
     * only the year component. The returned value is an integer representing
     * the present year in a four-digit format (e.g., 2023).
     * @category Date and Time
     * @example
     * getCurrentYear(); // Returns 2023 (assuming it is currently 2023)
     */
  export function getCurrentYear(): number {
    return new Date().getFullYear();
  }
  
   /**
   * Determines if a given year belongs to a specific zodiac sign based on the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @param {number} remainder - The expected remainder value for the specified zodiac sign.
   * @returns {boolean} True if the year matches the zodiac sign, false otherwise.
   * @throws {Error} Throws an error if the `year` input is not an integer.
   * @description
   * This function determines whether a given year corresponds to a specific zodiac sign
   * according to the Chinese zodiac cycle. Each zodiac sign in the cycle is associated
   * with a specific remainder value when dividing the year by 12. For example, if the remainder
   * is 0, it corresponds to the Year of the Monkey; if the remainder is 1, it corresponds
   * to the Year of the Rooster. The function checks if the provided year produces the
   * expected remainder value and returns true if it matches, otherwise false.
   * @category Zodiac
   * @example
   * isZodiacYear(2023, 9); // Returns true for the Year of the Snake
   * isZodiacYear(2021, 5); // Returns false (not the Year of the Horse)
   */
  function isZodiacYear(year: number, remainder: number): boolean {
    if (!Number.isInteger(year)) {
      throw new Error('Invalid input, year must be an integer');
    }
    return year % 12 === remainder;
  }
  
  /**
   * Determines if a given year is the Year of the Tiger in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Tiger, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheTiger(2022); // Returns true (Year of the Tiger)
   * isYearOfTheTiger(2023); // Returns false (different zodiac sign)
   */
  export function isYearOfTheTiger(year: number): boolean {
    return isZodiacYear(year, 6);
  }
  
  /**
   * Determines if a given year is the Year of the Pig in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Pig, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfThePig(2019); // Returns true (Year of the Pig)
   * isYearOfThePig(2020); // Returns false (different zodiac sign)
   */
  export function isYearOfThePig(year: number): boolean {
    return isZodiacYear(year, 11);
  }
  
  /**
   * Determines if a given year is the Year of the Dog in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Dog, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheDog(2018); // Returns true (Year of the Dog)
   * isYearOfTheDog(2022); // Returns false (different zodiac sign)
   */
  export function isYearOfTheDog(year: number): boolean {
    return isZodiacYear(year, 10);
  }
  
  /**
   * Determines if a given year is the Year of the Dragon in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Dragon, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheDragon(2024); // Returns true (Year of the Dragon)
   * isYearOfTheDragon(2020); // Returns false (different zodiac sign)
   */
  export function isYearOfTheDragon(year: number): boolean {
    return isZodiacYear(year, 8);
  }
  
   /**
   * Determines if a given year is the Year of the Rat in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Rat, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheRat(2023); // Returns true (Year of the Rat)
   * isYearOfTheRat(2024); // Returns false (different zodiac sign)
   */
  export function isYearOfTheRat(year: number): boolean {
    return isZodiacYear(year, 4);
  }
  
  /**
   * Determines if a given year is the Year of the Ox in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Ox, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheOx(2027); // Returns true (Year of the Ox)
   * isYearOfTheOx(2022); // Returns false (different zodiac sign)
   */
  export function isYearOfTheOx(year: number): boolean {
    return isZodiacYear(year, 5);
  }
  
  /**
   * Determines if a given year is the Year of the Rabbit in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Rabbit, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheRabbit(2027); // Returns true (Year of the Rabbit)
   * isYearOfTheRabbit(2029); // Returns false (different zodiac sign)
   */
  export function isYearOfTheRabbit(year: number): boolean {
    return isZodiacYear(year, 7);
  }
  
  /**
   * Determines if a given year is the Year of the Snake in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Snake, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheSnake(2027); // Returns true (Year of the Snake)
   * isYearOfTheSnake(2025); // Returns false (different zodiac sign)
   */
  export function isYearOfTheSnake(year: number): boolean {
    return isZodiacYear(year, 9);
  }
  
  /**
   * Determines if a given year is the Year of the Horse in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Horse, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheHorse(2027); // Returns true (Year of the Horse)
   * isYearOfTheHorse(2028); // Returns false (different zodiac sign)
   */
  export function isYearOfTheHorse(year: number): boolean {
    return isZodiacYear(year, 10);
  }
  
  /**
   * Determines if a given year is the Year of the Goat in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Goat, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheGoat(2027); // Returns true (Year of the Goat)
   * isYearOfTheGoat(2025); // Returns false (different zodiac sign)
   */
  export function isYearOfTheGoat(year: number): boolean {
    return isZodiacYear(year, 11);
  }
  
  /**
   * Determines if a given year is the Year of the Monkey in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Monkey, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheMonkey(2027); // Returns true (Year of the Monkey)
   * isYearOfTheMonkey(2025); // Returns false (different zodiac sign)
   */
  export function isYearOfTheMonkey(year: number): boolean {
    return isZodiacYear(year, 0);
  }
  
  /**
   * Determines if a given year is the Year of the Rooster in the Chinese zodiac cycle.
   * @param {number} year - The input year to check.
   * @returns {boolean} True if the year is the Year of the Rooster, false otherwise.
   * @category Zodiac
   * @example
   * isYearOfTheRooster(2027); // Returns true (Year of the Rooster)
   * isYearOfTheRooster(2025); // Returns false (different zodiac sign)
   */
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
  /**
   * Applies the A* algorithm to find the path from a start node to a goal node on a 2D grid.
   * @param {GridNode} start - The starting node position in the format [x, y].
   * @param {GridNode} goal - The goal node position in the format [x, y].
   * @param {Array<Array<number>>} grid - The 2D grid representing the environment, where 0s represent open spaces and 1s represent obstacles.
   * @returns {Array<Array<number>>} An array of node positions representing the optimal path from start to goal, or an empty array if no path is found.
   * @category Pathfinding
   * @description
   * The function uses the A* algorithm to find the optimal path between the start and goal nodes on a 2D grid.
   * It uses Manhattan distance as the heuristic and supports movement in the four cardinal directions.
   * Obstacles are represented by 1s in the grid, while open spaces are represented by 0s. The function can handle various grid
   * configurations and returns an array of node coordinates forming the optimal path. If no path is found, an empty array is returned.
   * @example
   * const grid = [
   *   [0, 0, 0],
   *   [1, 1, 0],
   *   [0, 0, 0]
   * ];
   * const start: GridNode = [0, 0];
   * const goal: GridNode = [2, 2];
   * const expectedPath = aStarGrid(start, goal, grid);
   * console.log(expectedPath); // Logs the optimal path: [2, 0], [2, 1], [2, 2]
   */
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