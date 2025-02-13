import { fibonacci, binarySearch } from "./functions";

describe("fibonacci", () => {
  it("returns correct value for 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("returns correct value for 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("returns correct value for n > 1", () => {
    expect(fibonacci(7)).toBe(13);
  });

  it("throws error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("binarySearch", () => {
  it("returns index of element when found in the array (small array)", () => {
    expect(binarySearch([1, 3, 5], 3)).toBe(1);
  });

  it("returns -1 when target is not found (small array)", () => {
    expect(binarySearch([1, 3, 5], 4)).toBe(-1);
  });

  it("returns correct index when target is at the beginning of the array", () => {
    expect(binarySearch([3, 5, 7], 3)).toBe(0);
  });

  it("returns correct index when target is at the end of the array", () => {
    expect(binarySearch([3, 5, 7], 7)).toBe(2);
  });

  it("returns -1 for an empty array", () => {
    expect(binarySearch([], 3)).toBe(-1);
  });

  it("works correctly with arrays containing negative numbers", () => {
    expect(binarySearch([-3, -1, 2, 4, 6], -1)).toBe(1);
  });

  it("can handle arrays with a single element when the element is the target", () => {
    expect(binarySearch([42], 42)).toBe(0);
  });

  it("can handle arrays with a single element when the element is not the target", () => {
    expect(binarySearch([42], 2)).toBe(-1);
  });

  it("does not return incorrect indices for values close to but not equal to the target", () => {
    expect(binarySearch([1, 4, 8, 10], 5)).toBe(-1);
  });

  it("handles cases where the target is greater than any element in the array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 11)).toBe(-1);
  });

  it("handles cases where the target is smaller than any element in the array", () => {
    expect(binarySearch([5, 7, 9, 12], 2)).toBe(-1);
  });

  it("returns proper index when upper bound crosses over lower bound", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it("returns the correct index for the minimum value in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("returns the correct index for the maximum value in a descending ordered array", () => {
    expect(binarySearch([5, 4, 3, 2, 1], 5)).toBe(0);
  });

  it("returns the correct index for the maximum value in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("handles arrays where the target is the smallest element but still does not exist", () => {
    expect(binarySearch([10, 20, 30, 40], 5)).toBe(-1);
  });

  it("returns correct indices when the array contains multiple instances of the target value", () => {
    expect(binarySearch([1, 3, 3, 3, 5], 3)).toBe(2);
  });

  it("returns correct indices when the array contains multiple instances of the target value", () => {
    expect(binarySearch([1, 3, 3, 5, 7], 5)).toBe(3);
  });
});