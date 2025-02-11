export function fibonacci(n: number): number {
    if (n < 0) throw new Error("Negative numbers are not allowed");
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
  }


export function aStar<T>(
    startNode: T,
    endNode: T,
    getNeighbors: (node: T) => T[],
    heuristic: (node: T) => number
  ): T[] {
    // Priority queue to store nodes to explore (sorted by f-score)
    const priorityQueue: { node: T; fScore: number }[] = [];
    priorityQueue.push({ node: startNode, fScore: heuristic(startNode) });
  
    // Maps to store g-scores (cost to reach each node from start) and f-scores (estimated total cost from start to goal)
    const gScoreMap = new Map<T, number>();
    const fScoreMap = new Map<T, number>();
    gScoreMap.set(startNode, 0);
    fScoreMap.set(startNode, heuristic(startNode));
  
    // Map to store the parent node to reconstruct the path
    const cameFromMap = new Map<T, T | undefined>();
    cameFromMap.set(startNode, undefined);
  
    while (priorityQueue.length > 0) {
      // Get the node with the lowest f-score from the priority queue
      priorityQueue.sort((a, b) => a.fScore - b.fScore);
      const currentNode = priorityQueue.shift()?.node!;
  
      if (currentNode === endNode) {
        // Goal found, reconstruct and return the path
        const path: T[] = [];
        let current = currentNode;
        while (current !== undefined) {
          path.unshift(current);
          current = cameFromMap.get(current)!;
        }
        return path;
      }
  
      // Explore neighbors of the current node
      const neighbors = getNeighbors(currentNode);
      for (const neighbor of neighbors) {
        const tentativeGScore =
          gScoreMap.get(currentNode)! +
          1; // Assuming uniform cost, update as needed
  
        if (
          !gScoreMap.has(neighbor) ||
          tentativeGScore < gScoreMap.get(neighbor)!
        ) {
          // Update scores and parent map if a better path is found
          cameFromMap.set(neighbor, currentNode);
          gScoreMap.set(neighbor, tentativeGScore);
          fScoreMap.set(
            neighbor,
            tentativeGScore + heuristic(neighbor)
          );
          // Add neighbor to the priority queue if not already present
          if (
            !priorityQueue.some(
              (entry) => entry.node === neighbor
            )
          ) {
            priorityQueue.push({
              node: neighbor,
              fScore: fScoreMap.get(neighbor)!,
            });
          }
        }
      }
    }
  
    // If the goal is not reachable, return an empty path
    return [];
  }