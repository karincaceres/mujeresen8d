import React from 'react';
import image1 from '../assets/imgs/image1.jpeg';
import Header from '../components/Header';
function Page2() {
  return (
      <div className='container' id="\page2" >
        <Header />
      <h1 style={{marginTop:50}}>Page 2</h1>
      <div className="image-container">
           <img src={image1} alt="Logo" height="60px" />
      </div>
      <div className="info-container">
        <div className="column">
          <h2>Column 1</h2>
          <p>Info for Column 1</p>
        </div>
        <div className="column">
          <h2>Column 2</h2>
          <p>Info for Column 2</p>
        </div>
      </div>
    </div>
  );
}

export default Page2;
