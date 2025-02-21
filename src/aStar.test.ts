import { describe, it, expect } from "vitest";
import { aStar } from "./aStar";

type Node = { x: number; y: number };

const manhattanHeuristic = (a: Node, b: Node) =>
  Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

describe("A* Function", () => {
  it("should find the correct path in a simple grid", () => {
    const grid = [
      [0, 0, 0, 0],
      [1, 1, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
    ];

    const start = { x: 0, y: 0 };
    const end = { x: 3, y: 3 };
    const result = aStar(grid, manhattanHeuristic, start, end);

    expect(result).toEqual({
      steps: [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
        [2, 2],
        [1, 2],
        [0, 2],
        [0, 3],
        [1, 3],
        [2, 3],
        [3, 3],
      ],
      distance: 10,
    });
  });

  it("should find the correct path when there are obstacles", () => {
    const grid = [
      [0, 1],
      [0, 0],
    ];

    const start = { x: 0, y: 0 };
    const end = { x: 1, y: 1 };
    const result = aStar(grid, manhattanHeuristic, start, end);

    expect(result).toEqual({ steps: [
        [0, 0],
        [1, 0],
        [1, 1]
      ],
      distance: 2 });
  });

  it("should return null if no path is available", () => {
    const grid = [
      [0, 1],
      [1, 0],
    ];

    const start = { x: 0, y: 0 };
    const end = { x: 1, y: 1 };
    const result = aStar(grid, manhattanHeuristic, start, end);

    expect(result).toBeNull();
  });

  it("should return null if the start or end is an obstacle", () => {
    const grid = [
      [0, 1],
      [0, 0],
    ];

    expect(
      aStar(grid, manhattanHeuristic, { x: 0, y: 1 }, { x: 1, y: 1 })
    ).toBeNull();
    expect(
      aStar(grid, manhattanHeuristic, { x: 0, y: 0 }, { x: 0, y: 1 })
    ).toBeNull();
  });

  it("should handle larger grids", () => {
    const grid = Array(100)
      .fill(0)
      .map(() => Array(100).fill(0));

    const start = { x: 0, y: 0 };
    const end = { x: 99, y: 99 };
    const result = aStar(grid, manhattanHeuristic, start, end);

    expect(result).toEqual({
      steps: Array.from({ length: 200 }, (_, i) => [Math.floor(i / 2), i % 2]),
      distance: 198,
    });
  });
});