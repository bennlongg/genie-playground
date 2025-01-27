export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }

export const star = (str: string): string => {
    return str.split('').join('*');
}

export const aStar = (startNode: any, goalNode: any) => {
  // Initialize open and closed sets
  const openSet = [startNode];
  const closedSet = new Set();

  // Initialize gScore and fScore maps
  const gScore = new Map();
  gScore.set(startNode, 0);

  const fScore = new Map();
  fScore.set(startNode, heuristic(startNode, goalNode));

  // Initialize parent map
  const parentMap = new Map();

  while (openSet.length > 0) {
    // Get node with lowest fScore
    openSet.sort((a, b) => fScore.get(a) - fScore.get(b));
    const currentNode = openSet.shift();

    // If we reached goal node, reconstruct path
    if (currentNode === goalNode) {
      return reconstructPath(parentMap, currentNode);
    }

    // Add current node to closed set
    closedSet.add(currentNode);

    // Process neighbors
    for (const neighbor of getNeighbors(currentNode)) {
      if (closedSet.has(neighbor)) continue;

      const tentativeGScore = gScore.get(currentNode) + distance(currentNode, neighbor);

      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor);
      } else if (tentativeGScore >= gScore.get(neighbor)) {
        continue;
      }

      parentMap.set(neighbor, currentNode);
      gScore.set(neighbor, tentativeGScore);
      fScore.set(neighbor, tentativeGScore + heuristic(neighbor, goalNode));
    }
  }

  return null; // No path found
};

const heuristic = (nodeA: any, nodeB: any) => {
  // Implement your heuristic function here
};

const getNeighbors = (node: any) => {
  // Implement your neighbor retrieval logic here
};

const distance = (nodeA: any, nodeB: any) => {
  // Implement your distance calculation logic here
};

const reconstructPath = (parentMap: Map<any, any>, currentNode: any) => {
  const path = [currentNode];
  while (parentMap.has(currentNode)) {
    currentNode = parentMap.get(currentNode);
    path.unshift(currentNode);
  }
  return path;
};
