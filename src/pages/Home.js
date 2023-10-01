import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom

import Header from '../components/Header';
import Slider from '../components/Slider';
import image1 from '../assets/imgs/1.jpeg';
import image2 from '../assets/imgs/2.jpeg';
import image3 from '../assets/imgs/3.jpeg';

import cliente1 from '../assets/imgs/slidemarcasmobile-11.jpg';
import cliente2 from '../assets/imgs/slidemarcasmobile-12.jpg';
import cliente3 from '../assets/imgs/slidemarcasmobile-13.jpg';
import Clientes from '../assets/imgs/Clientes.jpg';
import FloatingButton from '../components/FloatingButton';

import imagecancer1 from '../assets/imgs/SLIDEScanceryM8D-07.png';
import imagecancer2 from '../assets/imgs/SLIDEScanceryM8D-08.png';

import './styles.css';

function Home() {
  const widthScreen = window.innerWidth > 790;
  const mockImagenes = [image1, image2, image3];
  const mockImagenes2 = [cliente1, cliente2, cliente3];
  const mockImagenes3 = [Clientes];

  const handleButtonClick1 = () => {
    window.location.href = 'https://s3webpdf.s3.amazonaws.com/info_cancerdemama.pdf'; // Reemplaza '/pagina1' con la URL deseada
  };

  const handleButtonClick2 = () => {
    window.location.href = '/page3'; // Reemplaza '/pagina2' con la URL deseada
  };

  return (
    <div id="\home" className="container">
      <Header />
      <div style={{ width: '100%', marginTop: '100px' }}>
        <Slider imagenes={mockImagenes} />
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
        <span className="Hacen-posible-esta-campaa" style={{ fontSize: widthScreen ? '' : '1.3em' , height:50}}>
          Hacen posible esta campaña
        </span>
      </div>

      <div className="second-slider-container">
        {widthScreen ? (
          <>
            <Slider imagenes={mockImagenes3} />
          </>
        ) : (
          <>
            <Slider imagenes={mockImagenes2} />
          </>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Link onClick={handleButtonClick1} style={{ cursor: 'pointer',  bottom: 0 }}>
            <img src={imagecancer1} alt="imagen1" className="responsive-image" />
          </Link>
          <Link onClick={handleButtonClick2} style={{ cursor: 'pointer',  top: 0 }}>
            <img src={imagecancer2} alt="imagen2" className="responsive-image" />
          </Link>
        </div>
      </div>

      <FloatingButton />
    </div>
  );
}

export default Home;
