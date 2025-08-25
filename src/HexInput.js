import React, { useState } from 'react';
import './HexInput.css';

function HexInput({ onConvert }) {
  const [hex, setHex] = useState('#000000');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConvert(hex);
  };

  return (
    <div className="hex-input-container">
      <label htmlFor="hex-input" className="input-label">
        HEX Color Code
      </label>
      <form onSubmit={handleSubmit} className="input-group">
        <input
          id="hex-input"
          type="text"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          placeholder="#000000"
          className="hex-input"
        />
        <button type="submit" className="convert-button">
          Convert
        </button>
        <div 
          className="color-preview"
          style={{ backgroundColor: hex }}
        ></div>
      </form>
      <p className="input-hint">
        Enter a valid HEX color code (e.g., #ff6b6b)
      </p>
    </div>
  );
}

export default HexInput;
