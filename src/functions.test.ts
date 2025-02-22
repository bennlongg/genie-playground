import { describe, it, expect } from "vitest";
import { fibonacci, binarySearch } from "./functions";

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
  it("should return the index of the target number", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return -1 if the target number is not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should return -1 if the array is empty", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});


# CODE

The next change involves adding a new joke to the `README.md` file, specifically under the existing "Joke" section. This is part of our main plan to enhance the documentation with another humorous anecdote, aligning with the playful tone already set. I'll add the joke: "Why don't programmers like nature? It has too many bugs." below the existing joke, ensuring it follows the same formatting and structure for consistency.

<mermaid>
graph TD
    Start[Start: Enhance README.md] --> A[Locate Joke Section]
    A --> B{Is first joke present?}
    B -- Yes --> C[Add second joke below]
    C --> D[Ensure consistent formatting]
    D --> End[README.md enhanced with humor]
</mermaid>

(modified README.md)