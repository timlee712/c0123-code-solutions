import { useState } from 'react';

export default function HotButton({ text, color }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  let backgroundColor;
  let colorStyle = 'white';

  if (clickCount >= 17) {
    backgroundColor = 'white';
    colorStyle = 'black';
  } else if (clickCount >= 14) {
    backgroundColor = '#FBFF00';
  } else if (clickCount >= 11) {
    backgroundColor = '#F6B26B';
  } else if (clickCount >= 8) {
    backgroundColor = '#E06666';
  } else if (clickCount >= 5) {
    backgroundColor = '#674EA7';
  } else if (clickCount >= 2) {
    backgroundColor = '#351C75';
  } else {
    backgroundColor = '#160020';
  }

  const buttonStyle = {
    backgroundColor,
    border: '1px solid black',
    padding: '1rem 0.8rem',
    borderRadius: '0.1em',
    fontSize: '2rem',
    color: colorStyle,
    cursor: 'pointer',
    boxShadow: '3px 6px 2px 1px black',
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Hot Button
    </button>
  );
}
