import { describe, it, expect } from "vitest";
import { dijkstra } from "./dijkstra";

describe("Dijkstra Function", () => {
  it("returns correct shortest path and distance in a simple graph", () => {
    const graph = {
      A: { B: 1, C: 4 },
      B: { A: 1, C: 2, D: 5 },
      C: { A: 4, B: 2, D: 1 },
      D: { B: 5, C: 1 },
    };

    const result = dijkstra(graph, "A", "D");
    expect(result).toEqual({ distance: 4, path: ["A", "B", "C", "D"] });
  });
  
  it("handles no path between nodes", () => {
    const graph = {
      A: { B: 1 },
      B: { A: 1 },
      C: { D: 3 },
      D: { C: 3 },
    };

    const result = dijkstra(graph, "A", "C");
    expect(result).toBeNull();
  });


  it("handles negative weights", () => {
    const graph = {
      A: { B: 1, C: 2 },
      B: { C: -1, D: 2 },
      C: { D: 1 },
      D: {}
    };

    const result = dijkstra(graph, "A", "D");
    expect(result).toEqual({ distance: 0, path: ["A", "B", "C", "D"] });
  });
  
  it("handles multiple paths and selects the shortest", () => {
    const graph = {
      A: {B: 1, C: 2, D: 4 },
      B: { A: 1, D: 2 },
      C: { A: 2, D: 2 },
      D: { A: 4, B: 2, C: 2 },
    };

    const result = dijkstra(graph, "A", "D");
    expect(result).toEqual({ distance: 3, path: ["A", "B", "D"] });
  });

  it("returns null when no route is available", () => {
    const graph = {
      A: {B: 1 },
      B: { A: 1, C: 2 },
      C: { B: 2 },
      D: { } //Node has no connections
    };

    const result = dijkstra(graph, "A", "D");
    expect(result).toBeNull();
  });
});