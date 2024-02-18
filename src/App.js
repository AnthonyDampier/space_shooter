import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import TypingEffect from './Components/Introduction';
import GameScreen from './Components/GameScreen';


function App() {
  const [displayGameScreen, setDisplayGameScreen] = useState(false);

  const handleSetDisplayGameScreen = useCallback((value) => {
    setDisplayGameScreen(value);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <TypingEffect 
          messages={[`HE110 W0R7d...`, `G00D8YE  W0R7d...`, `G00D`, `8YE`]} 
          setDisplayGameScreen={handleSetDisplayGameScreen}/> 
        {displayGameScreen && <GameScreen />}
      </header>
    </div>
  );
}

export default App;
