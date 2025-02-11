import {add } from "./functions";
import {multiply} from "./functions";
import {fibonacci} from "./functions";
import {aStar} from "./functions";

describe("add", () => {
  test("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("multiply", () => {
  test("should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});


describe("Fibonacci", () => {
  test("should compute small Fibonacci numbers", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
  });

  test("should compute larger Fibonacci numbers", () => {
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(20)).toBe(6765);
  });

  test("should throw an error for negative input", () => {
    expect(() => fibonacci(-1)).toThrowError("Negative numbers are not allowed");
  });
});

describe("A* Algorithm", () => {
  test("should find the shortest path in a simple 3x3 grid", () => {
    const startNode = "0";
    const endNode = "8";
    const getNeighbors = getGridNeighbors;
    const heuristic = gridHeuristic;
    const path = aStar(startNode, endNode, getNeighbors, heuristic);
    expect(path).toEqual(["0", "1", "2", "5", "8"]); // Expected path for a 3x3 grid
  });

  test("should find the shortest path in a simple linear graph", () => {
    const startNode = "A";
    const endNode = "C";
    const getNeighbors = (node: string) => {
      switch (node) {
        case "A": return ["B"];
        case "B": return ["A", "C"];
        case "C": return ["B"];
        default: return [];
      }
    };
    const heuristic = (node: string) => {
      switch (node) {
        case "A": return 2;
        case "B": return 1;
        case "C": return 0;
        default: return Infinity;
      }
    };
    const path = aStar(startNode, endNode, getNeighbors, heuristic);
    expect(path).toEqual(["A", "B", "C"]); // Expected path for a linear graph
  });

  test("should return an empty path if the goal is unreachable", () => {
    const startNode = "X";
    const endNode = "Z";
    const getNeighbors = (node: string) => {
      switch (node) {
        case "X": return ["Y"];
        case "Y": return ["X"];
        default: return [];
      }
    };
    const heuristic = (node: string) => (node === "Z" ? 0 : 1);
    const path = aStar(startNode, endNode, getNeighbors, heuristic);
    expect(path).toEqual([]); // Expected empty path since Z is unreachable
  });
});

function getGridNeighbors(node: string): string[] {
  // Example implementation for a 2D grid graph
  const neighbors: string[] = [];
  const gridWidth = 3; // Adjust as needed
  const currentNode = parseInt(node, 10);
  const row = Math.floor(currentNode / gridWidth);
  const col = currentNode % gridWidth;

  // Left neighbor
  if (col > 0) neighbors.push((currentNode - 1).toString());
  // Right neighbor
  if (col < gridWidth - 1) neighbors.push((currentNode + 1).toString());
  // Top neighbor
  if (row > 0) neighbors.push((currentNode - gridWidth).toString());
  // Bottom neighbor
  if (row < gridWidth - 1) neighbors.push((currentNode + gridWidth).toString());

  return neighbors;
}

function gridHeuristic(node: string): number {
  // Example heuristic for a 2D grid graph (Euclidean distance)
  const currentNode = parseInt(node, 10);
  const endNode = 8; // Adjust as needed
  const gridWidth = 3; // Adjust as needed
  const currentRow = Math.floor(currentNode / gridWidth);
  const currentCol = currentNode % gridWidth;
  const endRow = Math.floor(endNode / gridWidth);
  const endCol = endNode % gridWidth;

  const dx = Math.abs(currentCol - endCol);
  const dy = Math.abs(currentRow - endRow);
  return Math.sqrt(dx * dx + dy * dy);
}
