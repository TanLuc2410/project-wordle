import React from "react";

function RestartButton({ resetGame }) {
    const handleRestart = (event) => {
        event.preventDefault();
        resetGame();
    };
    return (
        <button className="restart-button" onClick={handleRestart}>
            Restart
        </button>
    );
}

export default RestartButton;
