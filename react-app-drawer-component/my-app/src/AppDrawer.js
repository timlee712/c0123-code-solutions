import { useState } from 'react';
import { MdMenu, MdClear } from 'react-icons/md';
import './AppDrawer.css';

export default function AppDrawer({ heading, items }) {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const handleCloseDrawer = () => setShowDrawer(false);

  const handleItemClick = (onClick) => {
    handleCloseDrawer();
    onClick();
  }

  return (
    <>
      <div className="d-inline-block mt-2 mx-2 pointer">
        <MdMenu size={30} onClick={toggleDrawer}  />
      </div>
      {showDrawer && (
        <div className="drawer-overlay" onClick={handleCloseDrawer} />
      )}
      <div className={`w-25 bg-light drawer-container ${showDrawer ? 'open' : ''}`}>
        <div className="drawer-header d-flex justify-content-between align-items-center p-3">
          <div className="mx-3">{heading}</div>
          <div onClick={handleCloseDrawer} className="pointer">
            <MdClear size={30} className="mx-2" />
          </div>
        </div>
        <div className="drawer-content p-3">
          <ul className="list-unstyled">
            {items.map(({ label, onClick }) => (
              <li key={label} onClick={() => handleItemClick(onClick)} className="mb-3 mx-3 pointer" >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
