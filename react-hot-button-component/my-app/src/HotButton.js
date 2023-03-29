import { useState } from 'react';

export default function HotButton() {

  const [clickCount, setClickCount] = useState(0);
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: '#160020',
    border: '2px solid black',
    padding: '1rem 0.8rem',
    borderRadius: '0.1em',
    fontSize: '2rem',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '3px 6px 2px 1px black',
  });

  const handleClickCount = () => {
    setClickCount(clickCount + 1);
    };

  const handleButtonStyle = () => {
    let backgroundColor;
    if (clickCount >= 17) {
      backgroundColor = 'white';
    } else if (clickCount >= 14) {
      backgroundColor = '#fbff00';
    } else if (clickCount >= 11) {
      backgroundColor = '#f6b26b';
    } else if (clickCount >= 8) {
      backgroundColor = '#e06666';
    } else if (clickCount >= 5) {
      backgroundColor = '#674ea7';
    } else if (clickCount >= 2) {
      backgroundColor = '#351c75';
    } else {
      backgroundColor = '#160020';
    }
    const updatedButtonStyle = {
      backgroundColor,
      border: '2px solid black',
      padding: '1rem 0.8rem',
      borderRadius: '0.1em',
      fontSize: '2rem',
      color: clickCount < 11 ? 'white' : 'black',
      boxShadow: '3px 6px 2px 1px black',
    };
    setButtonStyle(updatedButtonStyle);
 };

  const handleClick = () => {
    handleClickCount();
    handleButtonStyle();
    console.log('clicked');
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Hot Button
    </button>
  )
}
