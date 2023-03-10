import React, { useState } from 'react';

import PAGES from '../../constants/pages.js'
import IMAGE from '../../images/proposal-crop.jpeg';
import MENU from '../../images/grid.png';

import './index.scss';


const Header = ({ selectedTab, changeTab, loggedIn }) => {
  const onSelectTab = (id) => {
    changeTab(id);
    setShowMenu(false);
  };

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <img alt="proposal" className="header-image" src={IMAGE} />
      <div className="header-image-title">
        Myles & Anke
      </div>
      {loggedIn && (
        <>
          <div className="header-mobile">
            <button onClick={toggleMenu}>
              <div className="header-mobile-title">{selectedTab}</div>
              <span className="header-mobile-icon">
                <img src={MENU} alt="menu" />
              </span>
            </button>
          </div>
          
          <div className="header-menu">
            <ul className={showMenu ? 'show' : 'hide'}>
              {Object.values(PAGES).map((page, index) => {
                return (
                  <>
                    {!index && <span className="header-menu-item-divider">·</span>}
                    <li>
                      <button
                        className={`header-menu-item ${page === selectedTab ? 'header-menu-item-active' : ''}`} 
                        onClick={() => onSelectTab(page)}>
                          {page}
                      </button>
                    </li>
                    <span className="header-menu-item-divider">·</span>
                  </>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
