import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";

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

describe("binarySearch", () => {
  
  it("should return -1 when searching in an empty array", () => {
      expect(binarySearch([], 5)).toEqual(-1);
  });

  it("should find an element present at different positions", () => {
      const arr = [1, 2, 3, 4, 5];
      expect(binarySearch(arr, 5)).toEqual(4); // Last position
      expect(binarySearch(arr, 1)).toEqual(0); // First position
      expect(binarySearch(arr, 3)).toEqual(2); // Middle position
      expect(binarySearch(arr, 4)).toEqual(3); 
      expect(binarySearch(arr,2)).toEqual(1)
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      


    

    
  
});

it("should return -1 when element is not present in the array", () => {
    
const arr = [-10,-6,-4,-2,-0.5,-0.000001];
expect(binarySearch(arr,-0.000002))
})

it("should throw error when searching in an unsorted array", () => { 
const arr = [4,-9,-10];
expect(() => binarySearch(arr,-10)).toThrow(
"Input array must be sorted"
)
});
});