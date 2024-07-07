import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [currentSound, setCurrentSound] = useState("");

  const playSound = (id) => {
    const audio = document.getElementById(id);
    audio.parentElement.style.backgroundColor = "lightpink";
    setTimeout(() => audio.parentElement.style.backgroundColor = "", 500);
    setCurrentSound(audio.parentElement.id);
    audio.currentTime = 0;
    audio.play();
  };

  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(key)) {
      playSound(key);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div id="drum-machine">
        <div id="display"><p className='center'>{currentSound}</p></div>
        <div id="pad-container">
          <div className="drum-pad" onClick={() => playSound("Q")} id="Heater 1"><p className="center">Q</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"></audio>
          </div>
          <div className="drum-pad" onClick={() => playSound("W")} id="Heater 2"><p className="center">W</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>
          </div>
          <div className="drum-pad" onClick={() => playSound("E")} id="Heater 3"><p className="center">E</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>
          </div>
          <div className="drum-pad" onClick={() => playSound("A")} id="Heater 4"><p className="center">A</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>
          </div>
          <div className="drum-pad" onClick={() => playSound("S")} id="Clap"><p className="center">S</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>
          </div>
          <div className="drum-pad" onClick={() => playSound("D")} id="Open-HH"><p className="center">D</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>
          </div>
          <div className="drum-pad" onClick={() => playSound("Z")} id="Kick-n'-Hat"><p className="center">Z</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
          </div>
          <div className="drum-pad" onClick={() => playSound("X")} id="Kick"><p className="center">X</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>
          </div>
          <div className="drum-pad" onClick={() => playSound("C")} id="Closed-HH"><p className="center">C</p>
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
