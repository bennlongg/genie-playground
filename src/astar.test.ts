import { describe, it, expect } from "vitest";
import AStar from "./astar";

describe("AStar", () => {
  it("finds a path in a simple grid", () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const astar = new AStar(grid);
    const path = astar.findPath({ x: 0, y: 0 }, { x: 2, y: 2 });

    expect(path).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ]);
  });

  it("finds a path in a grid with obstacles", () => {
    const grid = [
      [0, -1, -1],
      [0, -1, -1],
      [0, 0, 0],
    ];
    const astar = new AStar(grid);
    const path = astar.findPath({ x: 0, y: 0 }, { x: 2, y: 2 });

    expect(path).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
    ]);
  });

  
});
