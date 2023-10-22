import React from 'react';

function FloatingButton() {
    const widthScreen = window.innerWidth > 790;


  const linkStyles = {
    textDecoration: 'none', // Elimina el subrayado del enlace
    fontSize: widthScreen ? '2.2em' : '1.2em',
    color: 'white', // Cambia el color del texto
  };
    return (
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
      >
         <a href="https://www.instagram.com/ar/345431454809259/?ch=Mjc1NjQ4NTliYzZmN2IwYzlkOWRkNGY5MWFmMDNiMzY%3D" className="USAR-FILTRO" style={linkStyles}>USAR FILTRO</a>
      </div>


  );
}

export default FloatingButton;

//https://www.instagram.com/ar/345431454809259/?ch=Mjc1NjQ4NTliYzZmN2IwYzlkOWRkNGY5MWFmMDNiMzY%3D