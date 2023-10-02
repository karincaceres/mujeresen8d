import React ,{ useState }from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom

import Header from '../components/Header';
import Slider from '../components/Slider';
import image1 from '../assets/imgs/1SLIDEnegroM8D-10.jpeg'
import image2 from '../assets/imgs/2SLIDEnegroM8D-14.jpeg'
import image3 from '../assets/imgs/3SLIDEnegroM8D-15.jpeg'
import image4 from '../assets/imgs/4SLIDESnegroM8D-16.jpeg'

import Filtro1 from '../assets/imgs/Filtros/FILTROS1AL8-20.png'
import Filtro2 from '../assets/imgs/Filtros/FILTROS1AL8-21.png'
import Filtro3 from '../assets/imgs/Filtros/FILTROS1AL8-22.png'
import Filtro4 from '../assets/imgs/Filtros/FILTROS1AL8-23.png'
import Filtro5 from '../assets/imgs/Filtros/FILTROS1AL8-24.png'
import Filtro6 from '../assets/imgs/Filtros/FILTROS1AL8-25.png'
import Filtro7 from '../assets/imgs/Filtros/FILTROS1AL8-26.png'
import Filtro8 from '../assets/imgs/Filtros/FILTROS1AL8-27.png'
import videoFiltro from '../assets/imgs/Filtros/videofiltro-17.jpeg'
import FloatingButton from './FloatingButton';

import imageVideo1 from '../assets/imgs/Videos/webymobilemechi-27.jpeg'
import imageVideo1R from '../assets/imgs/Videos/webymobilemechi-18.jpeg'
import imageVideo2 from '../assets/imgs/Videos/modacecitomasettiweb-30.jpeg'
import imageVideo2R from '../assets/imgs/Videos/modacecitomaselli-29.jpeg'
import imageVideo3 from '../assets/imgs/Videos/deportesolmartinez-web.jpeg'
import imageVideo3R from '../assets/imgs/Videos/deportesolmartinez-mobile.jpeg'
import imageVideo4 from '../assets/imgs/Videos/anitarizziweb-34.jpeg'
import imageVideo4R from '../assets/imgs/Videos/artistaanitarizzimobile.jpeg'
import imageVideo5 from '../assets/imgs/Videos/tecnologicalucreweb-35.jpeg'
import imageVideo5R from '../assets/imgs/Videos/tecnologicalucremobile.jpeg'
import imageVideo6 from '../assets/imgs/Videos/automotriznancy-41.jpeg'
import imageVideo6R from '../assets/imgs/Videos/automotriznancy-40.jpeg'
import imageVideo7 from '../assets/imgs/Videos/gastronomicaweb-39.jpeg'
import imageVideo7R from '../assets/imgs/Videos/gastronomicamobile.jpeg'
import imageVideo8 from '../assets/imgs/Videos/cancerangelinaweb-43.jpeg'
import imageVideo8R from '../assets/imgs/Videos/cancerangelinamobile.jpeg'

import './styles.css';

function Page3() {
  const widthScreen = window.innerWidth > 790;
  const mockImagenes = [image1, image2, image3,image4];
 let initialVideo, initialImage;

  if (widthScreen) {
    initialVideo = 'https://www.youtube.com/embed/WcY0DaRjK4s?autoplay=1';
    initialImage = imageVideo1;
  } else {
    initialVideo = 'https://www.youtube.com/embed/WcY0DaRjK4s?autoplay=1';
    initialImage = imageVideo1R;
  }
  // Estado para rastrear el video actual y la imagen
 const [currentVideo, setCurrentVideo] = useState(initialVideo);
  const [currentImage, setCurrentImage] = useState(initialImage);

  // Función para cambiar el video y la imagen
    const changeContent = (newVideo, newImage) => {
    setCurrentImage(newImage);
     setCurrentVideo(`https://www.youtube.com/embed/${newVideo}?autoplay=1`);

};


  return (
    <div id="\home" className="container">
      <Header />
     <div className="second-slider-container" style={{marginTop:'10vh'}}>
        <Slider imagenes={mockImagenes} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom:0
        }}
      >
        <span className="Hacen-posible-esta-campaa" style={{ fontStyle:'normal', color:'#eca9bb', fontSize: widthScreen ? '3.2em' : '2em', fontWeight:'bold', height:widthScreen? '60px':'40px' }}>
         NUESTRAS MUJERES
        </span>
      </div>

      <div >
        {widthScreen ? (
          <>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo1)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro1} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo2)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro2} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo3)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro3} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo4)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro4} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo5)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro5} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo6)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro6} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo7)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro7} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
                              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo8)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro8} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
            </div>
        </div>
          </>
        ) : (
          <>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo1R)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro1} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo2R)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro2} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo3R)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro3} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo4R)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro4} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        </div>
           <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo5R)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro5} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo6R)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro6} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo7R)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro7} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
                              {/* Agrega más enlaces similares aquí */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Link to="#" onClick={() => changeContent('WcY0DaRjK4s', imageVideo8R)} style={{ cursor: 'pointer', bottom: 0 }}>
                <img src={Filtro8} alt="imagen1" className="responsive-imageFiltro" />
              </Link>
              {/* Agrega más enlaces similares aquí */}
            </div>
        </div>
          </>
        )}

      </div>

    <div style={{ position: 'relative', backgroundImage: { videoFiltro }, backgroundSize: '100% 100%' }}>
  {/* Utiliza un iframe para mostrar el video de YouTube */}
  <div style={{ overflow: 'hidden', paddingTop: '56.25%', position: 'relative' }}>
    <iframe
      src={currentVideo}
      frameBorder="0"
      allowFullScreen
      title="YouTube Video"
      style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
    />
  </div>
  {/* Muestra la imagen debajo del video */}
  {currentImage && (
    <img src={currentImage} alt="imagen" style={{ width: '100%', height: 'auto' }} />
  )}
</div>



      <FloatingButton />
    </div>
  );
}

export default Page3;
