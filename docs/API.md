# Application Documentation

## 1. Purpose: Understanding the Functionality and Outputs

This section provides an overview of the examples' functions and their outputs:

1. `fibonacci`: Calculates the nth Fibonacci number. In the given examples, it calculates and logs the 10th Fibonacci number, resulting in 55.
   - **Output**: `10th Fibonacci Number: 55`

2. `binarySearch`: Performs a binary search on a sorted array to find the index of a target element. In the example, it searches for the target value `4` in the array `[1, 2, 3, 4, 5, 6]`, resulting in an output index of `3`.
   - **Output**: `Binary Search Result Index: 3`

3. `bubbleSort`: Sorts a non-sorted array using the bubble sort algorithm. In the example, it sorts the array `[3, 1, 4, 1, 5, 9]`, resulting in a sorted array `[1, 1, 3, 4, 5, 9]`.
   - **Output**: `Bubble Sort Result: [ 1, 1, 3, 4, 5, 9 ]`

4. `curriedMath("+")`: Creates a curried addition function and then adds `2` and `3`. The result is logged.
   **Output**: `Curried Math Add Result: 5`

5. `isOdd`: Checks if a number is odd. In this example, it checks if `7`is odd. The result is true, which is then logged.
   **Output**: `Is 7 Odd?: true`

6. `isEven`: Checks if a number is even. In this example, it checks if `2` is even. The result is true, which is then logged.
   **Output**: `Is 2 Even?: true`

7. `getCurrentYear`: Retrieves the current year using the system clock. This example logs the current year of 2023.
   **Output**: `Current Year: 2023`

8. Chinese Zodiac Function Calls: Each function checks if a specific year belongs to the respective Chinese zodiac cycle (Year of the Tiger, Dog, Dragon, Pig, etc.). These examples log "true"or "false"determining whether each respective year meets the criteria for the zodiac function.
   **Outputs**:
   - `isYearOfTheTiger(2022)`: `Is 2022 Year of the Tiger?: true`
   - `isYearOfTheDog(2022)`: `Is 2022 Year of the Dog?: false`
   - `isYearOfTheDragon(2024)`: `Is 2024 Year of the Dragon?: true`
   - `isYearOfThePig(2021)`: `Is 2021 Year of the Pig?: false`
   - `isYearOfTheRat(2020)`: `Is 2020 Year of Rat?: true`
   - `isYearOfTheOx(2021)`: `Is 2021 Year of the Ox?: true`
   - `isYearOfTheSnake(2025)`: `Is 2025 Year of the Snake?: true`
   - `isYearOfTheRabbit(2023)`: `Is 2023 Year of the Rabbit?: true`
   - `isYearOfTheHorse(2027)`: `Is 2027 Year of the Horse?: false`
   - `isYearOfTheGoat(2027)`: `Is 2027 Year of the Goat?: true`
   - `isYearOfTheMonkey(2028)`: `Is 2028 Year of the Monkey?: true`
   - `isYearOfTheRooster(2029)`: `Is 2029 Year of the Rooster?: true`

## 2. `src/index.ts` Structure and File Purpose

The index file serves as the entry point for demonstrating the usage of various functions within the `src/functions.ts` module. By importing these functions, the file showcases their functionality through specific examples (e.g., Fibonacci calculation, binary search, zodiac year checking) and logs corresponding results to the console. This file provides a centralized location to test and explore the practical applications of each function in a real-world context.

## 3. Applying these Examples to Your Use Case

To adapt these examples for your use case, follow these steps:

1. Understand the Purpose: Determine which functions are relevant to your project's requirements. Analyze their purpose and outputs from the documentation above.

2. Modify Input Parameters: Customize the input parameters within `src/index.ts`for each function to match your specific needs. Ensure that you provide appropriate arguments aligned with your use case.

3. Update Function Calls: Replace any existing logic in `src/index.ts`with your desired inputs or expressions. This allows you to observe how different inputs affect the function's outputs.

4. Add New Function Calls: If needed, add additional function calls within `src/index.ts`to explore other functionalities or scenarios that are applicable to your use case.

5. Log Results or Assert Expectations: Update console.log statements with meaningful messages related to your use case so that you can observe and interpret the results effectively.

By following these steps, you can tailor each example to align with your project goals while leveraging the documented structure and functionalities already provided in `index.js`.