interface Coord {
  x: number;
  y: number;
}

class AStar {
  private grid: number[][];
  private rows: number;
  private cols: number;

  constructor(grid: number[][]) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
  }

  /**
   * Finds the shortest path from the start to end coordinate using the A* algorithm.
   * @param start - The starting coordinate.
   * @param end - The ending coordinate.
   * @returns An array of coordinates representing the path, or an empty array if no path is found.
   */
  public findPath(start: Coord, end: Coord): Coord[] {
    const openSet: Coord[] = [start];
    const cameFrom: Map<string, Coord | null> = new Map();
    const gScore: Map<string, number> = new Map();
    gScore.set(this.coordToString(start), 0);

    const fScore: Map<string, number> = new Map();
    fScore.set(this.coordToString(start), this.distance(start, end));

    while (openSet.length > 0) {
      const current = openSet.reduce((a, b) =>
        (fScore.get(this.coordToString(a)) || Infinity) <
        (fScore.get(this.coordToString(b)) || Infinity)
          ? a
          : b
      );

      if (current.x === end.x && current.y === end.y) {
        return this.reconstructPath(cameFrom, current);
      }

      openSet.splice(openSet.indexOf(current), 1);

      for (const neighbor of this.getNeighbors(current)) {
        const tentativeGScore =
          (gScore.get(this.coordToString(current)) || Infinity) + 1;

        if (
          tentativeGScore <
          (gScore.get(this.coordToString(neighbor)) || Infinity)
        ) {
          cameFrom.set(this.coordToString(neighbor), current);
          gScore.set(this.coordToString(neighbor), tentativeGScore);
          fScore.set(
            this.coordToString(neighbor),
            tentativeGScore + this.distance(neighbor, end)
          );

          if (!openSet.some((coord) => coord.x === neighbor.x && coord.y === neighbor.y)) {
            openSet.push(neighbor);
          }
        }
      }
    }

    return [];
  }

  /**
   * Calculates the Euclidean distance between two coordinates.
   * @param a - The first coordinate.
   * @param b - The second coordinate.
   * @returns The Euclidean distance between the two coordinates.
   */
  public distance(a: Coord, b: Coord): number {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  private getNeighbors(coord: Coord): Coord[] {
    const neighbors: Coord[] = [];
    const dirs = [
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: -1 },
      { x: 0, y: 1 },
    ];

    for (const dir of dirs) {
      const newX = coord.x + dir.x;
      const newY = coord.y + dir.y;

      if (
        newX >= 0 &&
        newX < this.rows &&
        newY >= 0 &&
        newY < this.cols &&
        this.grid[newX][newY] !== -1
      ) {
        neighbors.push({ x: newX, y: newY });
      }
    }

    return neighbors;
  }

  private reconstructPath(
    cameFrom: Map<string, Coord | null>,
    current: Coord
  ): Coord[] {
    const path = [current];
    while (cameFrom.has(this.coordToString(current))) {
      current =
        cameFrom.get(this.coordToString(current)) || { x: -1, y: -1 };
      path.unshift(current);
    }
    return path;
  }

  private coordToString(coord: Coord): string {
    return `${coord.x},${coord.y}`;
  }
}

export default AStar;
