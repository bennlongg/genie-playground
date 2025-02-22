import { PriorityQueue } from "d3-collection";
import { Set } from "d3-array";

/**
 * Calculates the Euclidean distance between two nodes as the heuristic.
 * @param a The starting node.
 * @param b The ending node.
 * @returns The heuristic distance between nodes a and b.
 */
function heuristicDistance<T>(a: T, b: T): number {
    // Implementation assumes nodes have x and y properties
    const dx = (a as any).x - (b as any).x;
    const dy = (a as any).y - (b as any).y;
    return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Implements the A* pathfinding algorithm to find the shortest path between two nodes in a graph.
 * @param graph The graph structure containing nodes and their connections.
 * @param start The starting node for the path.
 * @param end The target node to find the path to.
 * @returns The shortest path from start to end as an array of nodes.
 */
export function aStar<T>(
    graph: T[],
    start: T,
    end: T,
    edgeWeights: (a: T, b: T) => number,
    neighbors: (node: T) => T[]
): T[] {
    const priorityQueue = PriorityQueue(
        graph as any,
        (node: T) => node.fScore || Infinity
    );

    const openSet = new Set<T>([start]);
    const cameFrom = new Map<T, T>();
    const gScore = new Map<T, number>();
    const fScore = new Map<T, number>();

    gScore.set(start, 0);
    fScore.set(start, heuristicDistance(start, end));

    while (!priorityQueue.empty()) {
        const current = priorityQueue.remove() as T;

        if (current === end) {
            return reconstructPath(cameFrom, current);
        }

        openSet.delete(current);

        for (const neighbor of neighbors(current)) {
            const tentativeGScore = gScore.get(current) + edgeWeights(current, neighbor);
            
            if (!gScore.has(neighbor)) {
                gScore.set(neighbor, tentativeGScore);
            } else if (tentativeGScore < gScore.get(neighbor)) {
                gScore.set(neighbor, tentativeGScore);
                cameFrom.set(neighbor, current);
                fScore.set(neighbor, tentativeGScore + heuristicDistance(neighbor, end));
                if (openSet.has(neighbor)) {
                    priorityQueue.priority(neighbor, fScore.get(neighbor));
                } else {
                    openSet.add(neighbor);
                    priorityQueue.add(neighbor);
                }
            }
        }
    }

    return [];
}

function reconstructPath<T>(cameFrom: Map<T, T>, current: T): T[] {
    const path = [current];
    while (cameFrom.has(current)) {
        current = cameFrom.get(current) as T;
        path.unshift(current);
    }
    return path;
}

export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}