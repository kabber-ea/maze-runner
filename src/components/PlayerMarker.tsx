import React from "react";

type Props = {
    playerPosition: { rowIndex: number, colIndex: number };
}

const PlayerMarker: React.FC<Props> = ({ playerPosition }) => (
    <div
        className={`w-4 h-4 absolute bg-gradient-to-br from-purple-500 to-blue-500 border-2 rounded-full shadow-md transition-all duration-100`}
        style={{
            // 20 = cell size, 2 = border width
            top: `${playerPosition.rowIndex * 20 + 2}px`, 
            left: `${playerPosition.colIndex * 20 + 2}px`,
        }}
    />
);

export default PlayerMarker;
