import React from 'react';
import Slider from 'react-slick';
import estilos from './Slider-module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselSlider({ imagenes }) {
    const settings = {
    dots:true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: 0,
    arrows: false,
  };

  return (
    <div className={estilos.slidecontainer}>
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div className={estilos.slide} key={index}>
            <img src={imagen} alt={`Imagen ${index}`} style={{width:'100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselSlider;
