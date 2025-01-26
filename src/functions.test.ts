import { fibonacci } from "./functions";
import { binarySearch } from "./functions";

describe("fibonacci", () => {
  it("should return correct Fibonacci numbers", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
  });

  it("should throw an error for negative input", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed");
  });
});

describe("binarySearch", () => {
  it("should return correct index when target is found", () => {
    const arr = [1, 2, 3, 4, 5];
    
    expect(binarySearch(arr, 3)).toBe(2); // Middle element
    expect(binarySearch(arr, 1)).toBe(0); // First element
    expect(binarySearch(arr, 5)).toBe(4); // Last element
  });

  it("should return -1 when target is not found", () => {
    const arr = [10, 20, 30];
    
    expect(binarySearch(arr, 15)).toBe(-1); // Not present
    
});

describe("binarySearch edge cases", () => {
  
  
  
  
  
  
  
