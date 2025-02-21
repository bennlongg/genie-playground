type Node = {
  x: number;
  y: number;
};

export function aStar(
  grid: number[][],
  heuristicFn: (a: Node, b: Node) => number,
  start: Node,
  end: Node
): null | { steps: number[][]; distance: number } {
  const heuristic = (nodeA: Node, nodeB: Node) => heuristicFn(nodeA, nodeB);

  const getNeighbors = (node: Node) => {
    const neighbors: Node[] = [];
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    for (let [dx, dy] of directions) {
      const newX = node.x + dx;
      const newY = node.y + dy;
      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length &&
        grid[newX][newY] === 0
      ) {
        neighbors.push({ x: newX, y: newY });
      }
    }
    return neighbors;
  };

  const reconstructPath = (cameFrom: Map<Node, Node>, current: Node) => {
    const steps: number[][] = [];
    let distance = 0;

    while (current.x !== start.x || current.y !== start.y) {
      const prev = cameFrom.get(current);
      if (prev) {
        distance++;
        steps.push([current.x, current.y]);
        current = prev;
      } else {
        throw new Error("Path reconstruction failed");
      }
    }
    steps.push([start.x, start.y]);
    steps.reverse();

    return { steps, distance };
  };

  const openSet: Set<Node> = new Set([start]);
  const cameFrom: Map<Node, Node> = new Map();
  const gScore: Map<Node, number> = new Map([[start, 0]]);
  const fScore: Map<Node, number> = new Map([[start, heuristic(start, end)]]);

  while (openSet.size > 0) {
    let current = Array.from(openSet).reduce((acc, node) => {
      return fScore.get(node)! < fScore.get(acc)! ? node : acc;
    });

    if (current.x === end.x && current.y === end.y) {
      return reconstructPath(cameFrom, current);
    }

    openSet.delete(current);

    for (let neighbor of getNeighbors(current)) {
      const tentative_gScore = gScore.get(current)! + 1;

      if (!gScore.has(neighbor) || tentative_gScore < gScore.get(neighbor)!) {
        cameFrom.set(neighbor, current);
        gScore.set(neighbor, tentative_gScore);
        fScore.set(neighbor, tentative_gScore + heuristic(neighbor, end));
        if (!openSet.has(neighbor)) {
          openSet.add(neighbor);
        }
      }
    }
  }
  return null;
}