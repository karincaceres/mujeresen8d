import React, { useState } from 'react';
import Popup from '../components/Popup'; // Importa el componente Popup
import '../pages/styles.css';

const FloatingButton = () => {
  const widthScreen = window.innerWidth > 790;
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };
 const handleButtonClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div
        style={{
          width: widthScreen ? '25vw' : '45vw',
          height: widthScreen ? '8vh' : '6vh',
          borderRadius: '57px',
          boxShadow: '4px 4px 6px 0 rgba(0, 0, 0, 0.93)',
          backgroundColor: '#806ABA',
          position: 'fixed',
          bottom: widthScreen ? '8vh' : '5vh',
          right: widthScreen ?'10vw':'5vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleButtonClick}
      >
        <div className="USAR-FILTRO" style={{ fontSize: widthScreen ? '2.2em' : '1.2em' }}>
          USAR FILTRO
        </div>
      </div>

      {/* Mostrar el pop-up si showPopup es verdadero */}
      {showPopup && (
        <Popup
          onClose={handleButtonClose}
        />
      )}
    </div>
  );
};

export default FloatingButton;
