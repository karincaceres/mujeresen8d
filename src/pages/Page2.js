import React from 'react';
 // Asegúrate de importar Link desde react-router-dom

import Header from '../components/Header';

import image1 from '../assets/imgs/portada-mobile-infocancer-04.png'
import image1R from '../assets/imgs/portada-web-infocancer-03.png'
import image2 from '../assets/imgs/infocancer-web.png'
import image2R from '../assets/imgs/infocancer-mobile.png'
//import videoFiltro from '../assets/imgs/Filtros/videofiltro-17.jpeg'
import FloatingButton from './FloatingButton';
import './styles.css';

function Page2() {
  const widthScreen = window.innerWidth > 790;

 let initialVideo

  if (widthScreen) {
    initialVideo = 'https://www.youtube.com/embed/WcY0DaRjK4s?autoplay=1';

  } else {
    initialVideo = 'https://www.youtube.com/embed/WcY0DaRjK4s?autoplay=1';

  }
  // Estado para rastrear el video actual y la imagen

  return (
    <div id="\page2" className="container">
      <Header />
          <div className="second-slider-container" style={{ marginTop: '10vh' }}>
            {widthScreen ?
                  <>
                      <img src={image1} alt="imagen1" className="responsive-imageFiltro" />
                       <div style={{ overflow: 'hidden', paddingTop: '56.25%', position: 'relative' }}>
                            <iframe
                            src={initialVideo}
                            frameBorder="0"
                            allowFullScreen
                            title="YouTube Video"
                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                            />
                      </div>
                        <img src={image2} alt="imagen1" className="responsive-imageFiltro" />
                  </> :
                  <>
                      <img src={image1R} alt="imagen1" className="responsive-imageFiltro" />
                       <div style={{ overflow: 'hidden', paddingTop: '56.25%', position: 'relative' }}>
                            <iframe
                            src={initialVideo}
                            frameBorder="0"
                            allowFullScreen
                            title="YouTube Video"
                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                            />
                      </div>
                   <img src={image2R} alt="imagen1" className="responsive-imageFiltro" />
                  </>
        }

      </div>
        <FloatingButton />

    </div>
  );
}

export default Page2;
