import React from "react";
import { GridCell } from "../utils/types";
import { totalRows, totalColumns } from "../utils/contants";
import TargetMarker from "./TargetMarker";

type Props = {
  cell: GridCell;
  index: number;
};

const Cell: React.FC<Props> = ({ cell, index }) => (
  <div
    className="w-5 h-5 box-border bg-lime-500 relative"
    style={{
      borderTop: cell.walls.top ? "2px solid black" : "none",
      borderRight: cell.walls.right ? "2px solid black" : "none",
      borderBottom: cell.walls.bottom ? "2px solid black" : "none",
      borderLeft: cell.walls.left ? "2px solid black" : "none",
    }}
  >
    {/* Display TargetMarker at the last grid of the maze */}
    {index === (totalRows * totalColumns) - 1 && <TargetMarker />}
  </div>
);

export default Cell;
