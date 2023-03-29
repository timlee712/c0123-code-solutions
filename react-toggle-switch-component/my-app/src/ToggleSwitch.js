import { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`toggle-switch ${isOn ? 'on' : 'off'}`}
      onClick={handleClick}
    >
      <div className="toggle-switch-handle" />
      <span className="toggle-switch-text">
        {isOn ? 'On' : 'Off'}
      </span>
    </div>
  );
}

export default ToggleSwitch;
