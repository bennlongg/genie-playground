type AdjacencyList = {
  [key: string]: { [key in string]: number };
}

export function dijkstra(
  graph: AdjacencyList,
  source: string,
  target: string
): { distance: number; path: string[]; } | null {
  const distanceMap: { [key in string]: number } = {[source]:0};
  const predecessorMap: { [key in string]: string } = {};
  const unvisited: { [key in string]: boolean } = {};
  for (const node in graph) {
    if (node !== source) distanceMap[node] = Number.POSITIVE_INFINITY;
    unvisited[node] = true;
  }

  while (Object.keys(unvisited).length) {
    const sorted = Object.keys(unvisited).sort((a, b) => distanceMap[a] - distanceMap[b]);
    const current = sorted[0];
    delete unvisited[current];
    
    if (current === target) {
      const path: string[] = [];
      let u = target;
      
      while (u !== source) {
        path.unshift(u);
        u = predecessorMap[u];
        if (!u) return null;
      }
      path.unshift(source);
      return { path, distance: distanceMap[target] };
    }

    for (const neighbor in graph[current]) {
      const dist = distanceMap[current] + graph[current][neighbor];
      if (dist < distanceMap[neighbor]) {
        distanceMap[neighbor] = dist;
        predecessorMap[neighbor] = current;
      }
    }
  }

  return null;
}