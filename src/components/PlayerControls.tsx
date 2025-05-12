import React from "react";
import { Directions } from "../utils/contants";

type Props = {
    onMove: (direction: Directions) => void;
};

const PlayerControls: React.FC<Props> = ({ onMove }) => (
    <div className="grid grid-cols-3 gap-2 mb-6">
        <div></div>
        <button
            onClick={() => onMove(Directions.UP)}
            className="p-4 bg-green-300 hover:bg-green-400 active:bg-green-500 rounded-lg shadow">
            Up
        </button>
        <div></div>
        <button
            onClick={() => onMove(Directions.LEFT)}
            className="p-4 bg-green-300 hover:bg-green-400 active:bg-green-500 rounded-lg shadow">
            Left
        </button>
        <div></div>
        <button
            onClick={() => onMove(Directions.RIGHT)}
            className="p-4 bg-green-300 hover:bg-green-400 active:bg-green-500 rounded-lg shadow">
            Right
        </button>
        <div></div>
        <button
            onClick={() => onMove(Directions.DOWN)}
            className="p-4 bg-green-300 hover:bg-green-400 active:bg-green-500 rounded-lg shadow">
            Down
        </button>
        <div></div>
    </div>
);

export default PlayerControls;
