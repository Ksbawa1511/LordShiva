import React from 'react';
import './Tungnath.css';

const Tungnath = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tungnath_Temple.jpg/800px-Tungnath_Temple.jpg" alt="Tungnath Temple" />
          <div className="hero-text">
            <h1>Tungnath Temple</h1>
            <p>The highest Shiva temple in the world, dedicated to Lord Shiva</p>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <h2>About Tungnath Temple</h2>
          <p>
            Tungnath Temple is the highest Shiva temple in the world, located at an altitude of 3,680 meters (12,073 feet) above sea level. 
            It is one of the five sacred temples of the Panch Kedar pilgrimage circuit in the Garhwal Himalayas of Uttarakhand, India. 
            The temple is dedicated to Lord Shiva and is believed to be over 1000 years old. According to legend, the temple was built by 
            the Pandavas to atone for their sins after the Kurukshetra war.
          </p>
        </div>

        <div className="card">
          <h2>Access and Pilgrimage</h2>
          <p>
            Tungnath is accessible via a 3.5-kilometer trek from Chopta, which is well-connected by road. The trek is moderate in difficulty 
            and offers breathtaking views of the surrounding peaks including Nanda Devi, Trishul, and Chaukhamba. The temple remains open from 
            April to November, closing during the harsh winter months when the deity is moved to Mukteshwar. The temple is part of the sacred 
            Panch Kedar pilgrimage that includes Kedarnath, Rudranath, Madhyamaheshwar, and Kalpeshwar.
          </p>
        </div>

        <div className="card">
          <h2>Legend of Panch Kedar</h2>
          <p>
            According to the Panch Kedar legend, after the Kurukshetra war, the Pandavas sought Lord Shiva's blessings to atone for their sins. 
            Shiva, unwilling to meet them, took the form of a bull and disappeared into the ground. When Bhima caught the bull, it split into five parts. 
            The arms of the bull appeared at Tungnath, making it the second most important temple in the Panch Kedar circuit. The temple represents 
            the arms of Lord Shiva and is considered extremely sacred by devotees.
          </p>
        </div>
      </section>
    </>
  );
};

export default Tungnath;

