import { fibonacci } from "./functions";
import { binarySearch } from "./functions";

/*
   * Fibonacci Function Tests
   */

describe("fibonacci", () => {
  // Positive numbers
  it("works", () => {
    expect(fibonacci(3)).toEqual(2);
  });
  // Negative numbers
  it("does not allow n < 0", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

/*
 * BinarySearch Function Tests
 */
describe("binarySearch", () => {
  /*
   * BinarySearch Empty Array Tests
   */
  describe("Empty array", () => {
    it("Receives an empty array", () => {
      expect(binarySearch([], 1)).toBe(-1);
    });
  });

  /*
   * BinarySearch Single Element Tests
   */
  describe("Single element", () => {
    // Items in list
    it("Receives an single element array and the target is the first element", () =>
      expect(binarySearch([1], 1)).toBe(0));

    // Items not in list
    it("Receives an single element array and the target is not the first element", () =>
      expect(binarySearch([1], 0)).toBe(-1));
  });

  /*
   * BinarySearch Multiple Element Tests
   */
  describe("Multiple elements", () => {
    // Items in list
    it("Receives a single array and the target is the first element ", () =>
      expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0));
    it("Receives a single array and the target is the second element", () =>
      expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1));
    it("Receives a single array and the target is the middle element", () =>
      expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2));
    it("Receives a single array and the target is the second to last element", () =>
      expect(binarySearch([1, 2, 3, 4, 5], 4)).toBe(3));
    it("Receives a single array and the target is the last element", () =>
      expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4));

    /*
     * binarySearch items not in list
     */
    it("Receives an empty array", () =>
      expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1));
  });
});