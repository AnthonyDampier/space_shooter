import React, { useEffect, useState } from 'react';

const GameBoard = () => {
    const [shipPosition, setShipPosition] = useState(50);
    const [missiles, setMissiles] = useState([]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    setShipPosition(prevPosition => Math.max(prevPosition - 10, 0));
                    break;
                case 'ArrowRight':
                    setShipPosition(prevPosition => Math.min(prevPosition + 10, 90));
                    break;
                case ' ':
                    // Space bar pressed, fire a missile
                    setMissiles(prevMissiles => [...prevMissiles, { id: Date.now(), position: shipPosition }]);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [shipPosition]); // Include shipPosition in the dependency array

    return (
        <div className="game-board" style={{ position: 'relative', width: '100%', height: '200px' }}>
            Shooter
            <div
                className="ship"
                style={{ position: 'absolute', left: `${shipPosition}%` }}
            >🚀</div>
            {missiles.map(missile => (
                <div key={missile.id} className="missile" style={{ position: 'absolute', left: `${missile.position}%`, bottom: '20px' }}>
                    💣
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
