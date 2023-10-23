import React, { useState, useRef } from 'react';

import Header from '../components/Header';
import Slider from '../components/Slider';
import './styles.css';

import image1 from '../assets/imgs/SLIDEM8DNEGRO1.png'
import image2 from '../assets/imgs/SLIDEM8DNEGRO2.png'
import image3 from '../assets/imgs/SLIDEM8DNEGRO3.png'
import image4 from '../assets/imgs/SLIDEM8DNEGRO4.png'

import Filtro1 from '../assets/imgs/Filtros/cientifica-boton.png';
import Filtro2 from '../assets/imgs/Filtros/moda-boton.png';
import Filtro3 from '../assets/imgs/Filtros/deportista-boton.png';
import Filtro4 from '../assets/imgs/Filtros/constructora-boton.png';
import Filtro5 from '../assets/imgs/Filtros/delasalud-boton.png';
import Filtro6 from '../assets/imgs/Filtros/automotriz-boton.png';
import Filtro7 from '../assets/imgs/Filtros/gastronomica-boton.png';
import Filtro8 from '../assets/imgs/Filtros/cancer-boton.png';
//import videoFiltro from '../assets/imgs/Filtros/videofiltro-17.jpeg';
import FloatingButton from './FloatingButton';

import imageVideo1 from '../assets/imgs/Videos/mechi-web-27.png';
import imageVideo1R from '../assets/imgs/Videos/mechi-mobile-18.png';
import imageVideo2 from '../assets/imgs/Videos/ceci-web-30.png'
import imageVideo2R from '../assets/imgs/Videos/ceci-mobile-29.png'
import imageVideo3 from '../assets/imgs/Videos/sol-web-32.png';
import imageVideo3R from '../assets/imgs/Videos/sol-mobile-31.png';
import imageVideo4 from '../assets/imgs/Videos/pao-web-34.png';
import imageVideo4R from '../assets/imgs/Videos/pao-mobile-33.png';
import imageVideo5 from '../assets/imgs/Videos/salud-web-35.png';
import imageVideo5R from '../assets/imgs/Videos/salud-mobile-36.png';
import imageVideo6 from '../assets/imgs/Videos/automotriz-web-40.png';
import imageVideo6R from '../assets/imgs/Videos/automotriz-mobile-39.png';
import imageVideo7 from '../assets/imgs/Videos/gastronomica-web-38.png';
import imageVideo7R from '../assets/imgs/Videos/gastronomica-mobile-37.png';
import imageVideo8 from '../assets/imgs/Videos/angelina-web-42.png';
import imageVideo8R from '../assets/imgs/Videos/angelina-mobile-41.png';

function Page3() {
  const widthScreen = window.innerWidth > 790;
  const mockImagenes = [image1, image2, image3, image4];
  const [currentImage, setCurrentImage] = useState(
    widthScreen ? imageVideo1 : imageVideo1R
  );

  const handleButtonHighlight = (button) => {
    setCurrentImage(getImageForButton(button));
  };

  const buttonRefs = {
    button1: useRef(null),
    button2: useRef(null),
    button3: useRef(null),
    button4: useRef(null),
    button5: useRef(null),
    button6: useRef(null),
    button7: useRef(null),
    button8: useRef(null),
  };

  const getImageForButton = (button) => {
    switch (button) {
      case 'button1':
        return widthScreen ? imageVideo1 : imageVideo1R;
      case 'button2':
        return widthScreen ? imageVideo2 : imageVideo2R;
      case 'button3':
        return widthScreen ? imageVideo3 : imageVideo3R;
      case 'button4':
        return widthScreen ? imageVideo4 : imageVideo4R;
      case 'button5':
        return widthScreen ? imageVideo5 : imageVideo5R;
      case 'button6':
        return widthScreen ? imageVideo6 : imageVideo6R;
      case 'button7':
        return widthScreen ? imageVideo7 : imageVideo7R;
      case 'button8':
        return widthScreen ? imageVideo8 : imageVideo8R;
      default:
        return '';
    }
  };

  const changeContent = (button) => {
    const newImage = getImageForButton(button);
    setCurrentImage(newImage);
  };

  return (
    <div id="home" className="container">
      <Header />
      <div className="second-slider-container" style={{ marginTop: '10vh' }}>
        <Slider imagenes={mockImagenes} showDots={true} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom: 0,
        }}
      >
        <span
          className="Hacen-posible-esta-campaa"
          style={{
            fontStyle: 'normal',
            color: '#eca9bb',
            fontSize: widthScreen ? '3.2em' : '2em',
            fontWeight: 'bold',
            height: widthScreen ? '60px' : '40px',
          }}
        >
          NUESTRAS MUJERES
        </span>
      </div>

      <div>
        {widthScreen ? (
                  <>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                className="button-zoom"
                onClick={() => changeContent('button1')}
                onMouseEnter={() => handleButtonHighlight('button1')}
                ref={buttonRefs.button1}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro1} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button2')}
                onMouseEnter={() => handleButtonHighlight('button2')}
                ref={buttonRefs.button2}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro2} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button3')}
                onMouseEnter={() => handleButtonHighlight('button3')}
                ref={buttonRefs.button3}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro3} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button4')}
                onMouseEnter={() => handleButtonHighlight('button4')}
                ref={buttonRefs.button4}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro4} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button5')}
                onMouseEnter={() => handleButtonHighlight('button5')}
                ref={buttonRefs.button5}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro5} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button6')}
                onMouseEnter={() => handleButtonHighlight('button6')}
                ref={buttonRefs.button6}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro6} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button7')}
                onMouseEnter={() => handleButtonHighlight('button7')}
                ref={buttonRefs.button7}
                style={{ cursor: 'pointer', bottom: 0, transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0', }}
              >
                <img src={Filtro7} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button8')}
                onMouseEnter={() => handleButtonHighlight('button8')}
                ref={buttonRefs.button8}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro8} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
        </div>
        </div>
          </>
        ) : (
                      <>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button1')}
                onMouseEnter={() => handleButtonHighlight('button1')}
                ref={buttonRefs.button1}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro1} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection:  'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button2')}
                onMouseEnter={() => handleButtonHighlight('button2')}
                ref={buttonRefs.button2}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro2} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection:  'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button3')}
                onMouseEnter={() => handleButtonHighlight('button3')}
                ref={buttonRefs.button3}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro3} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection:  'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button4')}
                onMouseEnter={() => handleButtonHighlight('button4')}
                ref={buttonRefs.button4}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro4} alt="imagen1" className="responsive-imageFiltro" />
              </button>
                                  {/* Agrega más enlaces similares aquí */}
            </div>
                          </div>
             <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection:  'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button5')}
                onMouseEnter={() => handleButtonHighlight('button5')}
                ref={buttonRefs.button5}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro5} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection:  'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button6')}
                onMouseEnter={() => handleButtonHighlight('button6')}
                ref={buttonRefs.button6}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro6} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection:  'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button7')}
                onMouseEnter={() => handleButtonHighlight('button7')}
                ref={buttonRefs.button7}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro7} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
            </div>
            <div style={{ display: 'flex', flexDirection:  'row', alignItems: 'center' }}>
              <button
                 className="button-zoom"
                onClick={() => changeContent('button8')}
                onMouseEnter={() => handleButtonHighlight('button8')}
                ref={buttonRefs.button8}
                style={{ cursor: 'pointer', bottom: 0 , transition: 'opacity 0.3s ease-in-out' ,border: 'none', // Elimina el borde
                    margin: '0',}}
              >
                <img src={Filtro8} alt="imagen1" className="responsive-imageFiltro" />
              </button>
              {/* Agrega más enlaces similares aquí */}
                </div>
            </div>
          </>
        )}
      </div>

      <div style={{ position: 'relative', backgroundColor:'#66478E'  }}>
        {/* Utiliza un iframe para mostrar el video de YouTube */}

        {/* Muestra la imagen debajo del video */}
              {currentImage && (
             <div style={{backgroundColor:'#66478E' }}>
                <img src={currentImage} alt="imagen" style={{ width: '100%', height: 'auto' }} />
          </div>

        )}
      </div>
      <div style={{position:'absolute', backgroundColor:'#66478E' , height:'150px' , width:'100%'}}></div>
      <FloatingButton />
    </div>
  );
}

export default Page3;
