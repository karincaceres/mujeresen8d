import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const widthScreen = window.innerWidth > 790;

  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (!widthScreen) {
      setMenuOpen(false);
    }
    //console.log('aca',activeSection)
  };

  const setActiveLinkStyle = (isActive) => {
    return isActive ? {  textDecoration: 'underline' } : { color: '#eca9bb' };

  };
    useEffect(() => {

   // console.log(activeSection);
 }, [activeSection]);

  // Corrected placement of JSX elements
  return (
    <header className="header" style={{ zIndex: 900 }}>
      {widthScreen ? (
        <>
          <img src={logo} alt="Logo"  style={{ maxWidth:'5vw', marginLeft: '30px' }} />
          <nav>
            <ul className="nav-list">
              <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
                <Link
                  to="/home"
                  onClick={() => handleNavClick('home')}
                  style={setActiveLinkStyle(activeSection === 'home')}
                >
                  HOME
                </Link>
              </li>
              <li className={`nav-item ${activeSection === 'page2' ? 'active' : ''}`}>
                <Link
                  to="/page2"
                  onClick={() => handleNavClick('page2')}
                  style={setActiveLinkStyle(activeSection === 'page2')}
                >
                  CáncerDeMama
                </Link>
              </li>
              <li className={`nav-item ${activeSection === 'page3' ? 'active' : ''}`}>
                <Link
                  to="/page3"
                  onClick={() => handleNavClick('page3')}
                  style={setActiveLinkStyle(activeSection === 'page3')}
                >
                  MujeresEn8D
                </Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <div
            className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
                          onClick={toggleMenu}
            style={{marginLeft:'20px'}}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src={logo} alt="Logo" className="logo" style={{ maxWidth: '20vw', height: 'auto', marginLeft:'-70px' }} />
          </div>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
             <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
                <Link
                  to="/"
                  onClick={() => handleNavClick('home')}
                  style={setActiveLinkStyle(activeSection === 'home')}
                >
                  HOME
                </Link>
              </li>
               <li className={`nav-item ${activeSection === 'page2' ? 'active' : ''}`}>
                <Link
                  to="/page2"
                  onClick={() => handleNavClick('page2')}
                  style={setActiveLinkStyle(activeSection === 'page2')}
                >
                  CáncerDeMama
                </Link>
              </li>
              <li className={`nav-item ${activeSection === 'page3' ? 'active' : ''}`}>
                <Link
                  to="/page3"
                  onClick={() => handleNavClick('page3')}
                  style={setActiveLinkStyle(activeSection === 'page3')}
                >
                   MujeresEn8D
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
