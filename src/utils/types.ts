export type CellWalls = {
  top: boolean;
  right: boolean;
  bottom: boolean;
  left: boolean;
};


export class GridCell {
  rowIndex: number;
  colIndex: number;
  walls: CellWalls;
  visited: boolean;
  previous: GridCell | null;

  constructor(rowIndex: number, colIndex: number) {
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.walls = { top: true, right: true, bottom: true, left: true };
    this.visited = false;
    this.previous = null;
  }
}
