import React from 'react';

function Headline() {

  return (
    <section id="headline" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/headline_gears_img.jpg'})` }}>
        <div className="headline-text">
            <h1>Web Design and Development</h1>
            <h5>Building outstanding websites that give your business an edge</h5>
        </div>
    </section>
  );
}



export default Headline;