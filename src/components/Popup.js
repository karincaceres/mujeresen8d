import React, { useState } from 'react';
import '../pages/styles.css';

const Popup = ({ link, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showButtons, setShowButtons] = useState(false); // Agregamos un estado para controlar la visibilidad de los botones
  const widthScreen = window.innerWidth > 790;

  const handlePopupButtonClick = () => {
    setIsVisible(false);
    onClose();
  };

  const handleLinkButtonClick = () => {
    // Cuando se hace clic en "CONTINUAR", mostramos los botones
    setShowButtons(true);
  };

  const handleButtonASiClick = () => {
    // Acción a realizar al hacer clic en el botón "Estoy en la Mujer Urbana"
    window.location.href = "https://www.lalcec.org.ar/";
  };

  const handleButtonANoClick = () => {
    // Acción a realizar al hacer clic en el botón "No estoy en la Mujer Urbana"
    window.location.href = "https://www.instagram.com/lalcecargentina/";
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
            width: widthScreen ? '100%' : '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '1000',
          }}
        >
          <div
            className="Rectngulo-63"
            style={{
              width: '100%',
              maxWidth: widthScreen ? '600px' : '100%',
              height: '354px',
              borderRadius: '18px',
              boxShadow: '5px 5px 6px 0 rgba(0, 0, 0, 0.67)',
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <button className="close-button" onClick={handlePopupButtonClick}>
              X
            </button>
            <p className="SI-ESTS-CONDUCIENDO-NO-USES-EL-FILTRO" style={{ marginTop: '10%', fontSize: '2em' }}>
              SI ESTÁS CONDUCIENDO
              NO USES EL FILTRO
            </p>
            {showButtons ? ( // Mostrar los botones cuando showButtons sea true
            <div style={{display:'flex', flexDirection: widthScreen? 'row': 'column'}}>

                <button
                  style={{
                    width: widthScreen ? '20vw' : '70vw',
                    height: widthScreen ? '8vh' : '8vh',
                    borderRadius: '57px',
                    boxShadow: '4px 4px 6px 0 rgba(0, 0, 0, 0.93)',
                    backgroundColor: '#66468e',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    marginRight:20,
                    cursor: 'pointer',
                  }}
                  onClick={handleButtonASiClick}
                >
                  <span className="CONTINUAR" style={{fontSize:'1.5em'}} >ESTOY EN LA MUJER URBANA</span>
                </button>
                <button
                  style={{
                    width: widthScreen ? '20vw' : '70vw',
                    height: widthScreen ? '8vh' : '8vh',
                    borderRadius: '57px',
                    boxShadow: '4px 4px 6px 0 rgba(0, 0, 0, 0.93)',
                    backgroundColor: '#66468e',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    marginTop: widthScreen ? '': '10px',
                    cursor: 'pointer',
                  }}
                  onClick={handleButtonANoClick}
                >
                  <span className="CONTINUAR" style={{fontSize:'1.5em'}}>NO ESTOY EN LA MUJER URBANA</span>
                </button>

        </div>
            ) : (
              <button
                style={{
                  width: widthScreen ? '20vw' : '70vw',
                  height: widthScreen ? '8vh' : '8vh',
                  borderRadius: '57px',
                  boxShadow: '4px 4px 6px 0 rgba(0, 0, 0, 0.93)',
                  backgroundColor: '#66468e',
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
