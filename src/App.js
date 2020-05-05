import React, { Component } from 'react';
import './App.css';
import Key from './components/Key';


class App extends Component {
  render() {
    const notes = ["C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6"];

    let keys = [];

    for (const n of notes) {
      if (n.includes('#')) {
        keys.push(<div className="blackKeyWrapper">
        <Key note={n} type="black" />
      </div>)
      } else {
        keys.push(<Key note={n} type="white"/>)
      }
    }

    console.log(keys);

    return (
        <div className="pianoContainer">
          {keys}
        </div>
      );
}
}

export default App;