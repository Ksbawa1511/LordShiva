import React from 'react';
import './Madhyamaheshwar.css';

const Madhyamaheshwar = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Madhyamaheshwar_Temple.jpg/800px-Madhyamaheshwar_Temple.jpg" alt="Madhyamaheshwar Temple" />
          <div className="hero-text">
            <h1>Madhyamaheshwar Temple</h1>
            <p>The sacred temple where Lord Shiva's navel appeared, part of Panch Kedar</p>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <h2>About Madhyamaheshwar Temple</h2>
          <p>
            Madhyamaheshwar Temple is one of the five sacred temples of the Panch Kedar pilgrimage circuit, located at an altitude of 3,289 meters 
            (10,790 feet) above sea level in the Garhwal Himalayas of Uttarakhand, India. The temple is dedicated to Lord Shiva and is believed 
            to be over 1000 years old. According to legend, this is where the navel of Lord Shiva appeared when the divine bull split into five parts.
          </p>
        </div>

        <div className="card">
          <h2>Access and Pilgrimage</h2>
          <p>
            Madhyamaheshwar is accessible via a 20-kilometer trek from Ransi village, which is well-connected by road. The trek passes through 
            beautiful forests and meadows, offering stunning views of the surrounding peaks including Chaukhamba and Kedarnath. The temple remains 
            open from April to November, closing during the harsh winter months when the deity is moved to Ukhimath. The temple is part of the 
            sacred Panch Kedar pilgrimage that includes Kedarnath, Tungnath, Rudranath, and Kalpeshwar.
          </p>
        </div>
      </section>
    </>
  );
};

export default Madhyamaheshwar;

