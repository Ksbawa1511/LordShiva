import React from 'react';
import './Rudranath.css';

const Rudranath = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rudranath_Temple.jpg/800px-Rudranath_Temple.jpg" alt="Rudranath Temple" />
          <div className="hero-text">
            <h1>Rudranath Temple</h1>
            <p>The sacred temple where Lord Shiva's face appeared, part of Panch Kedar</p>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <h2>About Rudranath Temple</h2>
          <p>
            Rudranath Temple is one of the five sacred temples of the Panch Kedar pilgrimage circuit, located at an altitude of 2,286 meters 
            (7,500 feet) above sea level in the Garhwal Himalayas of Uttarakhand, India. The temple is dedicated to Lord Shiva and is believed 
            to be over 1000 years old. According to legend, this is where the face of Lord Shiva appeared when the divine bull split into five parts.
          </p>
        </div>

        <div className="card">
          <h2>Access and Pilgrimage</h2>
          <p>
            Rudranath is accessible via a 20-kilometer trek from Gopeshwar, which is well-connected by road. The trek passes through beautiful 
            forests and meadows, offering stunning views of the surrounding peaks. The temple remains open from April to November, closing during 
            the harsh winter months when the deity is moved to Gopeshwar. The temple is part of the sacred Panch Kedar pilgrimage that includes 
            Kedarnath, Tungnath, Madhyamaheshwar, and Kalpeshwar.
          </p>
        </div>

        <div className="card">
          <h2>Legend of Panch Kedar</h2>
          <p>
            According to the Panch Kedar legend, after the Kurukshetra war, the Pandavas sought Lord Shiva's blessings to atone for their sins. 
            Shiva, unwilling to meet them, took the form of a bull and disappeared into the ground. When Bhima caught the bull, it split into five parts. 
            The face of the bull appeared at Rudranath, making it the third most important temple in the Panch Kedar circuit. The temple represents 
            the face of Lord Shiva and is considered extremely sacred by devotees.
          </p>
        </div>
      </section>
    </>
  );
};

export default Rudranath;

