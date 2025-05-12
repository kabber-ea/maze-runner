import React from "react";

interface CongratsModalProps {
    hasWon: boolean
    onPlayAgain: () => void;
}

const CongratsModal: React.FC<CongratsModalProps> = ({ hasWon, onPlayAgain }) => {
    return hasWon ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full">
                <h2 className="text-3xl font-bold text-green-700 mb-4">🎉 Congratulations! 🎉</h2>
                <p className="mb-6 text-gray-700">You completed the maze! Great job navigating through.</p>
                <button
                    onClick={onPlayAgain}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
                >
                    Play Again
                </button>
            </div>
        </div>
    ) : null;
};

export default CongratsModal;