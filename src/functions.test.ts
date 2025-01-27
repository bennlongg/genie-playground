import { describe, it, expect } from "vitest";
import { fibonacci } from "./functions";
import { aStar } from "./functions";

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

describe("A* Pathfinding Function", () => {
  it("should find a path in a simple grid without obstacles", () => {
    const rows = 5;
    const cols = 5;
    const start: [number, number] = [0, 0];
    const end: [number, number] = [4, 4];
    const obstacles = new Set<string>();

    const result = aStar(rows, cols, start, end, obstacles);

    expect(result).toEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ]);
  });

  it("should find a path in a grid with obstacles", () => {
    const rows = 5;
    const cols = 5;
    const start: [number, number] = [0, 0];
    const end: [number, number] = [4, 4];
    const obstacles = new Set<string>(["2,2", "3,2"]);

    const result = aStar(rows, cols, start, end, obstacles);

    expect(result).toEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
    ]);
  });

  
it("should return null if no path is possible due to obstacles", () => {
const rows = 5;
const cols = 5;
const start: [number , number] = [0 ,0];
const end: [number , number] = [4 ,4];
const obstacles = new Set<string>(["1 ,0" , "1 ,1" , "1 ,2" , "1 ,3" , "1 ,4"]);

const result = aStar(rows ,cols ,start ,end ,obstacles);

expect(result).toBeNull();
});

it("should handle edge cases where start and end points are the same" ,() => {
const rows =5;
const cols=5;
const start:[number ,number]=[2 ,2];
const end:[number ,number]=[2 ,2];
const obstacles=new Set<string>();

const result=aStar(rows ,cols ,start ,end ,obstacles);

expect(result).toEqual([[2 ,2]]);
});

it("should handle large grids efficiently" ,() => {
const rows=100;
const cols=100;
const start:[number ,number]=[0 ,0];
const end:[number ,number]=[99 ,99];
const obstacles=new Set<string>();

for(let i=50;i<100;i++){
obstacles.add(`50 ,${i}`);
}

const result=aStar(rows ,cols ,start ,end ,obstacles);

expect(result).not.toBeNull();
});
});
