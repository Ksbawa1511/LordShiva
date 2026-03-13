import React from 'react';
import './Festivals.css';

const Festivals = () => {
  const festivals = [
    {
      name: 'Maha Shivaratri',
      when: '14th night of the dark fortnight (Krishna Chaturdashi) in Phalguna (Feb–Mar)',
      significance: 'The great night of Shiva. Devotees stay awake, offering abhishekam (bathing the lingam), bel leaves, and flowers, and chant Om Namah Shivaya. It marks the day Shiva performed the cosmic dance (Tandava) and is believed to be especially auspicious for spiritual progress.',
      observe: 'Night-long vigil, fasting, abhishekam, bel leaves, dhoop, and japa.',
    },
    {
      name: 'Shravan Somvar',
      when: 'Every Monday in the month of Shravan (Jul–Aug)',
      significance: 'Mondays are sacred to Shiva. In Shravan, the holy month, devotees observe Monday fasts and offer Ganga jal, bel leaves, and milk to Shiva for grace, protection, and fulfillment of wishes.',
      observe: 'Monday fast, visit Shiva temples, offer Ganga jal and bel leaves.',
    },
    {
      name: 'Pradosh Vrat',
      when: 'Trayodashi (13th day) of both fortnights, during twilight (Pradosh)',
      significance: 'The twilight period is considered powerful for Shiva. Observing Pradosh Vrat is said to remove karmic obstacles and grant prosperity and peace.',
      observe: 'Fasting till moonrise, Shiva puja during Pradosh, stories of Shiva.',
    },
    {
      name: 'Kanwar Yatra',
      when: 'Month of Shravan (Jul–Aug)',
      significance: 'Devotees (Kanwarias) carry Ganga jal in pots (kanwars) on foot to offer at Shiva temples, especially in North India. It symbolizes devotion and penance.',
      observe: 'Carry Ganga jal to Shiva temples; many walk long distances barefoot.',
    },
    {
      name: 'Karthik / Chaturdashi',
      when: 'Krishna Chaturdashi in Karthik month (Oct–Nov)',
      significance: 'Associated with Shiva’s purifying aspect. Devotees take holy dips and offer lamps. The month is considered ideal for Shiva worship and charity.',
      observe: 'River ablutions, lamp offerings, Shiva puja, charity.',
    },
    {
      name: 'Masi Magam',
      when: 'Magam nakshatra in Masi (Feb–Mar), when full moon coincides with Magam',
      significance: 'Important in South India; devotees offer worship at Shiva (and other) temples, often with sea/river baths.',
      observe: 'Temple visits, holy bath, puja, and offerings.',
    },
  ];

  return (
    <>
      <section className="hero">
        <h1>Festivals & Observances</h1>
        <p>Key festivals and vrats dedicated to Lord Shiva — when they fall and how to observe them</p>
      </section>

      <section className="festivals-content">
        {festivals.map((f, i) => (
          <div key={i} className="festival-card">
            <h2>{f.name}</h2>
            <p className="when"><strong>When:</strong> {f.when}</p>
            <p className="significance">{f.significance}</p>
            <p className="observe"><strong>How to observe:</strong> {f.observe}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Festivals;
