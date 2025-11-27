import React from 'react';
import './Kedarnath.css';

const Kedarnath = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src="https://www.citybit.in/wp-content/uploads/2023/07/Kedarnath-Jyotirlinga-Image.jpg" alt="Kedarnath Temple" />
          <div className="hero-text">
            <h1>Kedarnath Temple</h1>
            <p>One of the holiest Hindu shrines dedicated to Lord Shiva</p>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <h2>About Kedarnath Temple</h2>
          <p>
            Kedarnath Temple (Sanskrit: केदारनाथ मंदिर, IAST: Kēdāranātha Mandira, lit. 'temple of the God of the field') is
            a Hindu temple roughly 1200 years old dedicated to Shiva. The temple is located on the Garhwal Himalayan range near
            the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public
            only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon). During the winters, the vigraha
            (deity) of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogenous form of
            Shiva, the 'Lord of Kedarkhand', the historical name of the region.
          </p>
        </div>

        <div className="card">
          <h2>Access and Pilgrimage</h2>
          <p>
            The temple is not directly accessible by road and has to be reached by a 22 kilometres (14 mi) uphill trek from
            Gaurikund. Pony, mule and manchan service is available to reach the temple. According to Hindu legends, the temple was initially built by
            the Pandavas, and is one of the twelve Jyotirlingas, the holiest Hindu shrines of Shiva. The Pandavas were supposed to have pleased Shiva
            by doing penance in Kedarnath. The temple is one of the four major sites in India's Chota Char Dham pilgrimage of Northern Himalayas
            and is the first of the Panch Kedar pilgrimage sites. This temple is the highest among the 12 Jyotirlingas.
          </p>
        </div>

        <div className="card">
          <h2>The Pandavas Legend</h2>
          <p>
            A folk legend about Panch Kedar relates to the Pandavas, the heroes of the Hindu epic Mahabharata. The Pandavas
            defeated and slew their cousins — the Kauravas in the epic Kurukshetra war. They wished to atone for the sins of committing fratricide
            (gotra hatya) and Brāhmanahatya (killing of Brahmins — the priest class) during the war. Thus, they handed over the reins of their kingdom to
            their kin and left in search of lord Shiva and to seek his blessings.
          </p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kedarnath_temple_1880%27s.jpg/436px-Kedarnath_temple_1880%27s.jpg" alt="Kedarnath Temple 1880s" />
          <p>
            Not finding Shiva in Varanasi, the Pandavas went to Garhwal Himalayas. Bhima, the second of the five Pandava
            brothers, then standing astride two mountains started to look for Shiva. He saw a bull grazing near Guptakashi ("hidden Kashi" — the name
            derived from the hiding act of Shiva). Bhima immediately recognized the bull to be Shiva. Bhima caught hold of the bull by its tail and hind legs. But
            the bull-formed Shiva disappeared into the ground to later reappear in parts, with the hump raising in Kedarnath, the arms appearing
            in Tungnath, the face showing up at Rudranath, the nabhi (navel) and stomach surfacing in Madhyamaheshwar and the hair appearing in
            Kalpeshwar.
          </p>
        </div>
      </section>
    </>
  );
};

export default Kedarnath;

