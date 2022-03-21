import React, { useState } from 'react';
export const Color = () => {
  
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['grey', 'pink', 'lightblue', 'lightgreen']
  const changeColor = () => {
    if (colorIndex === 3) {
      return setColorIndex(0)
    }
    return setColorIndex(colorIndex + 1);
  }

  return (
    <div data-testid="color-container" className="Button-Container" style={{backgroundColor: colors[colorIndex]}}>
      <h2>Change the color</h2>
      <h3 data-testid="color-text">{colors[colorIndex]}</h3>
      <button data-testid="color-button" onClick={changeColor}>Click Me</button>
    </div>
  )
}