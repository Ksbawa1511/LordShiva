import React from 'react';
import './Kalpnath.css';

const Kalpnath = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kalpnath_Temple.jpg/800px-Kalpnath_Temple.jpg" alt="Kalpnath Temple" />
          <div className="hero-text">
            <h1>Kalpnath Temple</h1>
            <p>The sacred temple where Lord Shiva's hair appeared, completing the Panch Kedar circuit</p>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <h2>About Kalpnath Temple</h2>
          <p>
            Kalpnath Temple is one of the five sacred temples of the Panch Kedar pilgrimage circuit, located at an altitude of 2,200 meters 
            (7,217 feet) above sea level in the Garhwal Himalayas of Uttarakhand, India. The temple is dedicated to Lord Shiva and is believed 
            to be over 1000 years old. According to legend, this is where the hair of Lord Shiva appeared when the divine bull split into five parts.
          </p>
        </div>

        <div className="card">
          <h2>Access and Pilgrimage</h2>
          <p>
            Kalpnath is accessible via a 10-kilometer trek from Urgam village, which is well-connected by road. The trek passes through beautiful 
            forests and offers stunning views of the surrounding peaks. The temple remains open from April to November, closing during the harsh 
            winter months when the deity is moved to Urgam. The temple is part of the sacred Panch Kedar pilgrimage that includes Kedarnath, 
            Tungnath, Rudranath, and Madhyamaheshwar.
          </p>
        </div>
      </section>
    </>
  );
};

export default Kalpnath;

