import React, { useEffect, useState } from "react";
import { totalRows, totalColumns, Directions } from "./utils/contants";
import { GridCell } from "./utils/types";
import { createGrid, generateMaze } from "./utils/maze";
import PlayerControls from "./components/PlayerControls";
import PlayerMarker from "./components/PlayerMarker";
import Cell from "./components/Cell";
import CongratsModal from "./components/CongratsModal";

const Maze: React.FC = () => {
	const [grid, setGrid] = useState<GridCell[][]>([]);
	const [playerPosition, setPlayerPosition] = useState({ rowIndex: 0, colIndex: 0 });

	useEffect(() => {
		initializeMaze();
	}, []);

	const initializeMaze = () => {
		const newGrid = createGrid();
		generateMaze(newGrid);
		setGrid(newGrid);
	};

	const handlePlayerMove = (direction: Directions) => {
		setPlayerPosition((prev) => {
			const { rowIndex, colIndex } = prev;
			const cell = grid[rowIndex][colIndex];

			switch (direction) {
				case Directions.UP:
					if (!cell.walls.top && rowIndex > 0) return { rowIndex: rowIndex - 1, colIndex };
					break;
				case Directions.DOWN:
					if (!cell.walls.bottom && rowIndex < totalRows - 1) return { rowIndex: rowIndex + 1, colIndex };
					break;
				case Directions.LEFT:
					if (!cell.walls.left && colIndex > 0) return { rowIndex, colIndex: colIndex - 1 };
					break;
				case Directions.RIGHT:
					if (!cell.walls.right && colIndex < totalColumns - 1) return { rowIndex, colIndex: colIndex + 1 };
					break;
			}

			return prev;
		});
	};

	const resetPlayer = () => {
		initializeMaze()
		setPlayerPosition({ rowIndex: 0, colIndex: 0 })
	}

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
			<h1 className="text-3xl font-extrabold mb-6 text-green-800">Maze Runner</h1>
			<PlayerControls onMove={handlePlayerMove} />

			<div className="grid relative border-4 border-green-700 rounded-lg shadow-lg"
				style={{ gridTemplateColumns: `repeat(${totalColumns}, 20px)` }}>
				{grid.flat().map((cell, index) => (
					<Cell key={index} cell={cell} index={index} />
				))}
				<PlayerMarker playerPosition={playerPosition} />
			</div>

			<CongratsModal
				hasWon={playerPosition.rowIndex === totalRows - 1 && playerPosition.colIndex === totalColumns - 1}
				onPlayAgain={resetPlayer}
			/>
		</div>
	);
};

export default Maze;
