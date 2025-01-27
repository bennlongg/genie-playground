export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export function aStar(start: string, goal: string, graph: { [key: string]: { [key: string]: number } }): string[] | null {
    const openSet = new Set([start]);
    const cameFrom: { [key: string]: string | null } = {};
    const gScore: { [key: string]: number } = { [start]: 0 };
    const fScore: { [key: string]: number } = { [start]: heuristic(start, goal) };

    while (openSet.size > 0) {
        let current = getLowestFScoreNode(openSet, fScore);
        if (current === goal) {
            return reconstructPath(cameFrom, current);
        }

        openSet.delete(current);
        for (let neighbor in graph[current]) {
            let tentativeGScore = gScore[current] + graph[current][neighbor];
            if (tentativeGScore < (gScore[neighbor] || Infinity)) {
                cameFrom[neighbor] = current;
                gScore[neighbor] = tentativeGScore;
                fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goal);
                openSet.add(neighbor);
            }
        }
    }

    return null;
}

function getLowestFScoreNode(openSet: Set<string>, fScore: { [key: string]: number }): string {
    let lowestNode = null;
    let lowestFScore = Infinity;
    for (let node of openSet) {
        if (fScore[node] < lowestFScore) {
            lowestFScore = fScore[node];
            lowestNode = node;
        }
    }
    return lowestNode!;
}

function reconstructPath(cameFrom: { [key: string]: string | null }, current: string): string[] {
    const totalPath = [current];
    while (cameFrom[current]) {
        current = cameFrom[current]!;
        totalPath.unshift(current);
    }
    return totalPath;
}

function heuristic(nodeA: string, nodeB: string): number {
    // Example heuristic function (Manhattan distance for grid-based graphs)
    const [xA, yA] = nodeA.split(',').map(Number);
    const [xB, yB] = nodeB.split(',').map(Number);
    return Math.abs(xA - xB) + Math.abs(yA - yB);
}
