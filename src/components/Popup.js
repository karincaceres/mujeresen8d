import React, { useState } from 'react';
import '../pages/styles.css';

const Popup = ({ link, onClose }) => {
    // eslint-disable-next-line
  const [isVisible, setIsVisible] = useState(true);
  const widthScreen = window.innerWidth > 790;

  const handlePopupButtonClick = () => {
     setIsVisible(false);
     onClose();
  };

  const handleLinkButtonClick = () => {
    window.location.href = "https://bestigfilters.com/65";
  };

  return (
    <div className={`popup ${isVisible ? 'visible' : ''}`}>
          <div className="popup-content">

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '0',
            left: '0',
            width:widthScreen? '100%':'100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1000',
          }}
              >

          <div
            className="Rectngulo-63"
            style={{
              width: '100%',
              maxWidth:widthScreen? '400px': '100%', // Ancho máximo para mantenerlo centrado
              height: '354px',
              borderRadius: '18px',
              boxShadow: '5px 5px 6px 0 rgba(0, 0, 0, 0.67)',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', // Centra el contenido horizontalmente
              // Espacio de relleno
            }}
                  >
            <button className="close-button"
                    onClick={handlePopupButtonClick}>X</button>
            <p className="SI-ESTS-CONDUCIENDO-NO-USES-EL-FILTRO" style={{ marginTop: '20%', fontSize: '2em' }}>
              SI ESTÁS CONDUCIENDO
              NO USES EL FILTRO
            </p>

            <div>
              <button
                style={{
                  width: widthScreen ? '350px' : '200px',
                  height: widthScreen ? '50px' : '40px',
                  borderRadius: '57px',
                  boxShadow: '4px 4px 6px 0 rgba(0, 0, 0, 0.93)',
                  backgroundColor:  '#66468e',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: 'none',
                  marginTop: '8%',
                  cursor: 'pointer',
                }}
                onClick={handleLinkButtonClick}
              >
                <span className="CONTINUAR">CONTINUAR</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
