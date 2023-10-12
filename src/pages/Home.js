import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom

import Header from '../components/Header';
import Slider from '../components/Slider';
import image1 from '../assets/imgs/1.jpeg';
import image2 from '../assets/imgs/2.jpeg';
import image3 from '../assets/imgs/3.jpeg';

import cliente1 from '../assets/imgs/slides-marcas-11.jpg'
import cliente2 from '../assets/imgs//slidemarcasmobile-12.jpg'
import cliente3 from '../assets/imgs/slidemarcasmobile-13.jpg'
import Clientes from '../assets/imgs/slides-web-marcas.jpg'
import FloatingButton from './FloatingButton';

import imagecancer1 from '../assets/imgs/SLIDEScanceryM8D-07.jpeg';
import imagecancer2 from '../assets/imgs/SLIDEScanceryM8D-08.png';
import imagecancer1R from '../assets/imgs/SLIDEmobileM8D-44.jpeg'
import imagecancer2R from '../assets/imgs/SLIDEmobileM8D-45.png'
import creador from '../assets/imgs/creadapor-09.jpg'
import './styles.css';

function Home() {
  const widthScreen = window.innerWidth > 790;
  const mockImagenes = [image1, image2, image3];
  const mockImagenes2 = [cliente1, cliente2, cliente3];
  const mockImagenes3 = [Clientes];

    const handleButtonClick1 = () => {
      console.log('acac')
    window.location.href = '/page2'; // Reemplaza '/pagina2' con la URL deseada
  };



  const handleButtonClick2 = () => {
    window.location.href = '/page3'; // Reemplaza '/pagina2' con la URL deseada
  };

  return (
    <div id="\home" className="container">
      <Header />
      <div className="second-slider-container" style={{marginTop:widthScreen?'10vh': '10vh'}}>
            <Slider imagenes={mockImagenes} showDots={false} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >

      </div>
       <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop:widthScreen? '5px':'',
                textAlign: 'center', // Center-align the text
            }}
            >
            <span className="Hacen-posible-esta-campaa" style={{ fontSize: widthScreen ? '1.2em' : '0.6em',letterSpacing: 4}}>
                HACEN POSIBLE ESTA CAMPAÑA
            </span>
        </div>
      <div className="second-slider-container">
        {widthScreen ? (
          <>
            <Slider imagenes={mockImagenes3} showDots={false} />
          </>
        ) : (
          <>
            <Slider imagenes={mockImagenes2} showDots={false} />
          </>
              )}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bottom: 0, marginTop:0 }}>
            <Link to="#" onClick={handleButtonClick1} style={{ cursor: 'pointer',  marginTop: 0}}>
                      {widthScreen ? (
                          <img src={imagecancer1} alt="imagen3" className="responsive-image" />
                      ) : (
                          <img src={imagecancer1R} alt="imagen4" className="responsive-image" />
                      )}

          </Link>
          <Link to="#" onClick={handleButtonClick2} style={{ cursor: 'pointer',  marginTop: 0 }}>
                     {widthScreen ? (
                          <img src={imagecancer2} alt="imagen3" className="responsive-image" />
                      ) : (
                          <img src={imagecancer2R} alt="imagen4" className="responsive-image" />
                      )}
           </Link>
             <img src={creador} alt="imagen2" style={{width:'100%'}} />
        </div>
      </div>

          <FloatingButton />
    </div>
  );
}

export default Home;
