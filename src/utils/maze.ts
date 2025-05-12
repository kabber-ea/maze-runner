import { GridCell } from "./types";
import { totalColumns, totalRows } from "./contants";

export const createGrid = (): GridCell[][] => {
  const newGrid: GridCell[][] = [];
  for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
    const row: GridCell[] = [];
    for (let colIndex = 0; colIndex < totalColumns; colIndex++) {
      row.push(new GridCell(rowIndex, colIndex));
    }
    newGrid.push(row);
  }
  return newGrid;
};

export const getUnvisitedNeighbors = (cell: GridCell, grid: GridCell[][]): GridCell[] => {
  const { rowIndex, colIndex } = cell;
  const unvisitedNeighbors: GridCell[] = [];

  const directions = [
    [rowIndex - 1, colIndex],
    [rowIndex, colIndex + 1],
    [rowIndex + 1, colIndex],
    [rowIndex, colIndex - 1],
  ];

  for (const [row, col] of directions) {
    if (row >= 0 && row < totalRows && col >= 0 && col < totalColumns && !grid[row][col].visited) {
      unvisitedNeighbors.push(grid[row][col]);
    }
  }

  return unvisitedNeighbors;
};

export const shuffleArray = (arr: GridCell[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

export const removeWalls = (cell1: GridCell, cell2: GridCell): void => {
  const dx = cell1.colIndex - cell2.colIndex;
  const dy = cell1.rowIndex - cell2.rowIndex;

  if (dx === 1) {
    cell1.walls.left = false;
    cell2.walls.right = false;
  } else if (dx === -1) {
    cell1.walls.right = false;
    cell2.walls.left = false;
  }

  if (dy === 1) {
    cell1.walls.top = false;
    cell2.walls.bottom = false;
  } else if (dy === -1) {
    cell1.walls.bottom = false;
    cell2.walls.top = false;
  }
};

export const generateMaze = (grid: GridCell[][]): void => {
  const cellStack: GridCell[] = [];
  const start = grid[0][0];
  start.visited = true;
  cellStack.push(start);

  while (cellStack.length > 0) {
    const currentCell = cellStack[cellStack.length - 1];
    const unvisitedNeighbors = getUnvisitedNeighbors(currentCell, grid);
    shuffleArray(unvisitedNeighbors);

    if (unvisitedNeighbors.length > 0) {
      const nextCell = unvisitedNeighbors[0];
      removeWalls(currentCell, nextCell);
      nextCell.visited = true;
      cellStack.push(nextCell);
    } else {
      cellStack.pop();
    }
  }
};
