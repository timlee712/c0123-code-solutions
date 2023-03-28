import { useState } from 'react';

export default function ToggleButton({ text, color }) {

  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);

  const handleClick = () => {
    console.log('before setter', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter', isClicked);
  };

  const buttonStyle = {
    backgroundColor: isClicked ? color : "white",
    border: `1px solid ${color}`,
    padding: '1rem 0.8rem',
    margin: '0.5rem',
    borderRadius: '0.3em'
  }

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  )
}
