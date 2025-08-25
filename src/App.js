import React, { useState } from 'react';
import './App.css';
import HexInput from './HexInput';
import ColorResult from './ColorResult';

function App() {
  const [rgb, setRgb] = useState('');

  const handleConvert = (hex) => {
    if(/^#([0-9A-F]{6})$/i.test(hex)){
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      setRgb(`rgb(${r}, ${g}, ${b})`);
    } else {
      setRgb('Invalid HEX code');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">HEX to RGB Color Converter</h1>
        <div className="converter-card">
          <HexInput onConvert={handleConvert} />
          <ColorResult rgb={rgb} />
        </div>
      </div>
    </div>
  );
}

export default App;
