import React from 'react';
import Header from '../components/Header';

function Page2() {
  return (
    <div id="\page2">
      <Header />
      <div style={{ marginTop: 100, height: '100vh', width: '100%' }}>
        <embed src="https://s3webpdf.s3.amazonaws.com/info_cancerdemama.pdf" type="application/pdf" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default Page2;
