// [Genie] Add an implementation of the A* algorithm for finding shortest paths in a graph with obstacles.
// Define an interface for edges
export interface Edge {
  node: string;
  cost: number;
}

// Heuristic function (Manhattan distance)
const heuristic = (a: string, b: string): number => {
  const [xA, yA] = a.split(",").map(Number);
  const [xB, yB] = b.split(",").map(Number);
  return Math.abs(xA - xB) + Math.abs(yA - yB);
};

// Reconstructs path from start to goal
const reconstructPath = (
  cameFrom: { [key: string]: string },
  currentNode: string
): string[] => {
  const totalPath = [currentNode];
  while (currentNode in cameFrom) {
    currentNode = cameFrom[currentNode];
    totalPath.push(currentNode);
  }
  return totalPath.reverse();
};

// Get all neighbors of a node
const getNeighbours = (node: string): Edge[] => {
  const [x, y] = node.split(",").map(Number);
  const neighbours: Edge[] = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const [dx, dy] of directions) {
    const neighbourNode = `${x + dx},${y + dy}`;
    neighbours.push({ node: neighbourNode, cost: 1 });
  }

  return neighbours;
};

// Main A* function
export const aStar = (
  startNode: string,
  goalNode: string,
  obstacles?: Set<string>
): { path: string[]; stepsToGoal: number } => {
  const openSet = new Set<string>();
  openSet.add(startNode);

  const cameFrom: { [key: string]: string } = {};

  const gScore: { [key: string]: number } = {};
  gScore[startNode] = 0;

  const fScore: { [key: string]: number } = {};
  fScore[startNode] = heuristic(startNode, goalNode);

  while (openSet.size > 0) {
    let currentNode = "";
    let lowestFScore = Infinity;

    // Find node with lowest fScore
    for (const node of openSet) {
      if (fScore[node] < lowestFScore) {
        lowestFScore = fScore[node];
        currentNode = node;
      }
    }

    if (currentNode === goalNode) {
      return { path: reconstructPath(cameFrom, currentNode), stepsToGoal: gScore[currentNode] };
    }

    openSet.delete(currentNode);

    for (const { node: neighborNode, cost } of getNeighbours(currentNode)) {
      if (obstacles?.has(neighborNode)) continue;

      const tentativeGScore =
        gScore[currentNode] + cost;

      if (!(neighborNode in gScore) || tentativeGScore < gScore[neighborNode]) {
        cameFrom[neighborNode] = currentNode;
        gScore[neighborNode] = tentativeGScore;
        fScore[neighborNode] =
          tentativeGScore + heuristic(neighborNode, goalNode);

        if (!openSet.has(neighborNode)) {
          openSet.add(neighborNode);
        }
      }
    }
  }

  return { path: [], stepsToGoal: Infinity }; // No path found
};
