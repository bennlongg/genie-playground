import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch, bubbleSort, curriedMath, isOdd, isEven, getCurrentYear, isYearOfTheTiger, isYearOfThePig, isYearOfTheDragon, isYearOfTheDog, isYearOfTheRat, isYearOfTheOx, isYearOfTheRabbit, isYearOfTheSnake, isYearOfTheHorse, isYearOfTheGoat, isYearOfTheMonkey, isYearOfTheRooster, aStarGrid } from "./functions";

describe("Fibonacci Function", () => {
  it("should return 0 for n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return 1 for n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should return 1 for n = 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  it("should return 55 for n = 10", () => {
    expect(fibonacci(10)).toBe(55);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("Binary Search Function", () => {
  it("should return the correct index when the target is found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3);
  });

  it("should return -1 when the target is not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should handle an empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it("should handle a single-element array where the target is found", () => {
    expect(binarySearch([1], 1)).toBe(0);
  });

  it("should handle a single-element array where the target is not found", () => {
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it("should handle a large array", () => {
    const largeArray = Array.from({ length: 100000 }, (_, i) => i + 1);
    expect(binarySearch(largeArray, 99999)).toBe(99998);
  });

  it("should handle duplicates in the array", () => {
    expect(binarySearch([1, 2, 2, 2, 3], 2)).toBeDefined();
  });
});

describe("Bubble Sort Function", () => {
  it("should sort an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an unsorted array", () => {
    expect(bubbleSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("should handle an array with duplicate elements", () => {
    expect(bubbleSort([4, 2, 2, 4, 3])).toEqual([2, 2, 3, 4, 4]);
  });

  it("should not modify the original array", () => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = bubbleSort(arr);
    expect(arr).toEqual([5, 4, 3, 2, 1]); // Check original array remains unchanged
    expect(arr).not.toBe(sortedArr); // Ensure a new array is returned
  });
});

describe("Curried Math Function", () => {
  it("should correctly add two numbers", () => {
    const add = curriedMath("+");
    expect(add(3, 4)).toBe(7);
  });

  it("should correctly subtract two numbers", () => {
    const subtract = curriedMath("-");
    expect(subtract(7, 4)).toBe(3);
  });

  it("should correctly multiply two numbers", () => {
    const multiply = curriedMath("*");
    expect(multiply(3, 4)).toBe(12);
  });

  it("should correctly divide two numbers", () => {
    const divide = curriedMath("/");
    expect(divide(12, 4)).toBe(3);
  });
});

describe("isOdd Function", () => {
  it("should return true for odd numbers", () => {
    expect(isOdd(3)).toBe(true);
  });

  it("should return false for even numbers", () => {
    expect(isOdd(4)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isOdd(0)).toBe(false);
  });

  it("should handle negative odd numbers", () => {
    expect(isOdd(-3)).toBe(true);
  });

  it("should handle negative even numbers", () => {
    expect(isOdd(-4)).toBe(false);
  });
});

describe("isEven Function", () => {
  it("should return true for even numbers", () => {
    expect(isEven(4)).toBe(true);
  });

  it("should return false for odd numbers", () => {
    expect(isEven(3)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isEven(0)).toBe(true);
  });

  it("should handle negative even numbers", () => {
    expect(isEven(-4)).toBe(true);
  });

  it("should handle negative odd numbers", () => {
    expect(isEven(-3)).toBe(false);
  });
});

describe("getCurrentYear Function", () => {
  it("should return the current year", () => {
    const expectedYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(expectedYear);
  });
});

describe("isYearOfTheTiger Function", () => {
  it("should return true for known Year of the Tiger", () => {
    expect(isYearOfTheTiger(2022)).toBe(true);
    expect(isYearOfTheTiger(2010)).toBe(true);
  });

  it("should return false for non-Year of the Tiger", () => {
    expect(isYearOfTheTiger(2023)).toBe(false);
    expect(isYearOfTheTiger(2021)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheTiger(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheTiger(-24)).toBe(false);
    expect(isYearOfTheTiger(-114)).toBe(true);
  });
});

describe("isYearOfThePig Function", () => {
  it("should return true for known Year of the Pig", () => {
    expect(isYearOfThePig(2019)).toBe(true);
    expect(isYearOfThePig(2007)).toBe(true);
  });

  it("should return false for non-Year of the Pig", () => {
    expect(isYearOfThePig(2020)).toBe(false);
    expect(isYearOfThePig(2023)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfThePig(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfThePig(-11)).toBe(false);
    expect(isYearOfThePig(-1)).toBe(true);
  });
});

describe("isYearOfTheDragon Function", () => {
  it("should return true for known Year of the Dragon", () => {
    expect(isYearOfTheDragon(2012)).toBe(true);
    expect(isYearOfTheDragon(2000)).toBe(true);
  });

  it("should return false for non-Year of the Dragon", () => {
    expect(isYearOfTheDragon(2013)).toBe(false);
    expect(isYearOfTheDragon(2011)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheDragon(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheDragon(-12)).toBe(false);
    expect(isYearOfTheDragon(-12)).toBe(true);
  });
});


describe("isYearOfTheDog Function", () => {
  it("should return true for known Year of the Dog", () => {
    expect(isYearOfTheDog(2018)).toBe(true);
    expect(isYearOfTheDog(2006)).toBe(true);
  });

  it("should return false for non-Year of the Dragon", () => {
    expect(isYearOfTheDog(2019)).toBe(false);
    expect(isYearOfTheDog(2020)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheDog(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheDog(-13)).toBe(false);
    expect(isYearOfTheDog(-1)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheDog(3.14)).toThrow('Invalid input, year must be an integer');
  });
});

describe("isYearOfTheRat Function", () => {
  it("should return true for known Year of the Rat", () => {
    expect(isYearOfTheRat(2020)).toBe(true);
    expect(isYearOfTheRat(2008)).toBe(true);
  });

  it("should return false for non-Year of the Rat", () => {
    expect(isYearOfTheRat(2021)).toBe(false);
    expect(isYearOfTheRat(2019)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheRat(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheRat(-3)).toBe(false);
    expect(isYearOfTheRat(-15)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheRat('invalid')).toThrow('Invalid input, year must be an integer');
  });
});

describe("isYearOfTheOx Function", () => {
  it("should return true for known Year of the Ox", () => {
    expect(isYearOfTheOx(2021)).toBe(true);
    expect(isYearOfTheOx(2009)).toBe(true);
  });

  it("should return false for non-Year of the Ox", () => {
    expect(isYearOfTheOx(2020)).toBe(false);
    expect(isYearOfTheOx(2022)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheOx(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheOx(-4)).toBe(false);
    expect(isYearOfTheOx(-16)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheOx(2.5)).toThrow('Invalid input, year must be an integer');
  });
});

describe("isYearOfTheRabbit Function", () => {
  it("should return true for known Year of the Rabbit", () => {
    expect(isYearOfTheRabbit(2023)).toBe(true);
    expect(isYearOfTheRabbit(2011)).toBe(true);
  });

  it("should return false for non-Year of the Rabbit", () => {
    expect(isYearOfTheRabbit(2024)).toBe(false);
    expect(isYearOfTheRabbit(2022)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheRabbit(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheRabbit(-10)).toBe(false);
    expect(isYearOfTheRabbit(-22)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheRabbit('year')).toThrow('Invalid input, year must be an integer');
  });
});

describe("isYearOfTheSnake Function", () => {
  it("should return true for known Year of the Snake", () => {
    expect(isYearOfTheSnake(2025)).toBe(true);
    expect(isYearOfTheSnake(2013)).toBe(true);
  });

  it("should return false for non-Year of the Snake", () => {
    expect(isYearOfTheSnake(2024)).toBe(false);
    expect(isYearOfTheSnake(2026)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheSnake(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheSnake(-6)).toBe(false);
    expect(isYearOfTheSnake(-18)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheSnake(3.5)).toThrow('Invalid input, year must be an integer');
  });
});

describe("isYearOfTheHorse Function", () => {
  it("should return true for known Year of the Horse", () => {
    expect(isYearOfTheHorse(2026)).toBe(true);
    expect(isYearOfTheHorse(2014)).toBe(true);
  });

  it("should return false for non-Year of the Horse", () => {
    expect(isYearOfTheHorse(2027)).toBe(false);
    expect(isYearOfTheHorse(2025)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheHorse(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheHorse(-5)).toBe(false);
    expect(isYearOfTheHorse(-17)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheHorse(2.5)).toThrow('Invalid input, year must be an integer');
  });
});

describe("isYearOfTheGoat Function", () => {
  it("should return true for known Year of the Goat", () => {
    expect(isYearOfTheGoat(2027)).toBe(true);
    expect(isYearOfTheGoat(2015)).toBe(true);
  });

  it("should return false for non-Year of the Goat", () => {
    expect(isYearOfTheGoat(2028)).toBe(false);
    expect(isYearOfTheGoat(2026)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheGoat(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheGoat(-5)).toBe(false);
    expect(isYearOfTheGoat(-17)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheGoat(1.9)).toThrow('Invalid input, year must be an integer');
  });
});

describe("isYearOfTheMonkey Function", () => {
  it("should return true for known Year of the Monkey", () => {
    expect(isYearOfTheMonkey(2028)).toBe(true);
    expect(isYearOfTheMonkey(2016)).toBe(true);
  });

  it("should return false for non-Year of the Monkey", () => {
    expect(isYearOfTheMonkey(2029)).toBe(false);
    expect(isYearOfTheMonkey(2027)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheMonkey(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheMonkey(-3)).toBe(false);
    expect(isYearOfTheMonkey(-15)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheMonkey(4.5)).toThrow('Invalid input, year must be an integer');
  });
});

describe("isYearOfTheRooster Function", () => {
  it("should return true for known Year of the Rooster", () => {
    expect(isYearOfTheRooster(2029)).toBe(true);
    expect(isYearOfTheRooster(2017)).toBe(true);
  });

  it("should return false for non-Year of the Rooster", () => {
    expect(isYearOfTheRooster(2030)).toBe(false);
    expect(isYearOfTheRooster(2028)).toBe(false);
  });

  it("should handle zero correctly", () => {
    expect(isYearOfTheRooster(0)).toBe(false);
  });

  it("should handle negative years", () => {
    expect(isYearOfTheRooster(-13)).toBe(false);
    expect(isYearOfTheRooster(-5)).toBe(false); 
  });

  it("should throw error on invalid input", () => {
    expect(() => isYearOfTheRooster('dog')).toThrow('Invalid input, year must be an integer');
  });
});


describe("aStarGrid Function", () => { 
  it("should find path in 2D grid", () => {
    const grid = [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0]
    ];
    const start: GridNode = [0, 0];
    const goal: GridNode = [2, 2];
    const expectedPath = aStarGrid(start, goal, grid);
    expect(expectedPath).toEqual([[2, 0], [2, 1], [2, 2]]);
  });
});