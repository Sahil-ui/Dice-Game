
import { useState } from 'react';
import './App.css';
import Home from './Component/Home';
import Game from './Component/Game';


function App() {
const[GameStarted, setGameStarted] =  useState(false)

const toggleGamePlay = ()=>{
  setGameStarted(prev => !prev)
}


  return (
    <div>

     { 
      GameStarted ? <Game/> : <Home
      toggle  = {toggleGamePlay}
      />
     }

    
    </div>
  );
}

export default App;
