import React from 'react';

function ColorResult({ rgb }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Result: {rgb}</h2>
    </div>
  );
}

export default ColorResult;
