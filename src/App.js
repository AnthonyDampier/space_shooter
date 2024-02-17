import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import TypingEffect from './Components/Introduction';
import GameScreen from './Components/GameScreen';

function App() {
  const [displayGameScreen, setDisplayGameScreen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {/* <TypingEffect 
          messages={[`  HE110 W0R7d...`, `  G o o d b y e  W o r l d . . .`, `GOOD`, `BYE`]} 
          setDisplayGameScreen={setDisplayGameScreen}/>  */}
        {/* {displayGameScreen && <GameScreen />} */}
        <GameScreen />
      </header>
    </div>
  );
}

export default App;
