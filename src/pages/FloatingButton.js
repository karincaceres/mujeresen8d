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
          width: widthScreen ? '350px' : '200px',
          height: widthScreen ? '50px' : '40px',
          borderRadius: '57px',
          boxShadow: '4px 4px 6px 0 rgba(0, 0, 0, 0.93)',
          backgroundColor: '#66468e',
          position: 'fixed',
          top: widthScreen ? '50%' : '30%',
          right: '10%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleButtonClick}
      >
        <div className="USAR-FILTRO" style={{ fontSize: widthScreen ? '1.8em' : '1.2em' }}>
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
