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

import { describe, it, expect } from "vitest";
import { aStar } from "./functions";

describe("A* Algorithm", () => {
  it("should find a path between two nodes", () => {
    const graph = createGraph();
    const startNode = graph.getNode("A");
    const goalNode = graph.getNode("E");

    const path = aStar(startNode, goalNode);

    expect(path).toEqual(["A", "B", "C", "D", "E"]);
  });

  it("should return null if no path exists", () => {
    const graph = createGraph();
    const startNode = graph.getNode("A");
    const goalNode = graph.getNode("F");

    const path = aStar(startNode, goalNode);

    expect(path).toBeNull();
  });

  it("should handle large graphs efficiently", () => {
    const largeGraph = createLargeGraph();
    const startNode = largeGraph.getNode("A");
    const goalNode = largeGraph.getNode("Z");

    const startTime = Date.now();
    const path = aStar(startNode, goalNode);
    const endTime = Date.now();

    expect(path).not.toBeNull();
    expect(endTime - startTime).toBeLessThan(1000); // Ensure execution time is reasonable
  });
});

const createGraph = () => {
  // Implement your graph creation logic here
};

const createLargeGraph = () => {
  // Implement your large graph creation logic here
};
