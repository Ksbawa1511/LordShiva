import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Temples.css';

const Temples = () => {
  const [selectedTemple, setSelectedTemple] = useState(null);

  const temples = [
    { 
      name: "Kedarnath", 
      desc: "One of the holiest Hindu shrines dedicated to Lord Shiva", 
      link: "/kedarnath",
      image: "https://www.citybit.in/wp-content/uploads/2023/07/Kedarnath-Jyotirlinga-Image.jpg",
      details: "Kedarnath is the most sacred of the Panch Kedar temples, representing the hump of Lord Shiva's bull form. Located in the pristine Garhwal Himalayas at an altitude of 3,583 meters, this ancient temple is surrounded by snow-capped peaks and offers a truly divine experience. The temple is accessible only by a 16 km trek from Gaurikund.",
      features: ["Represents the hump of Shiva's bull form", "Highest among the Panch Kedar temples", "Part of Char Dham Yatra", "One of the 12 Jyotirlingas", "Ancient stone architecture"],
      bestTime: "May-June & September-October",
      altitude: "3,583 meters (11,755 feet)"
    },
    { 
      name: "Tungnath", 
      desc: "The highest Shiva temple in the world", 
      link: "/tungnath",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tungnath_Temple.jpg/800px-Tungnath_Temple.jpg",
      details: "Tungnath is the highest Shiva temple in the world, located at an altitude of 3,680 meters. It represents the arms of Lord Shiva's bull form and offers breathtaking views of the Himalayan peaks including Nanda Devi, Trishul, and Chaukhamba.",
      features: ["Highest Shiva temple in the world", "Represents the arms of Shiva's bull form", "Panoramic Himalayan views", "3.5 km trek from Chopta", "Ancient stone architecture"],
      bestTime: "May-June & September-October",
      altitude: "3,680 meters (12,073 feet)"
    },
    { 
      name: "Rudranath", 
      desc: "The sacred temple where Lord Shiva's face appeared", 
      link: "/rudranath",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Rudranath_Temple.jpg/800px-Rudranath_Temple.jpg",
      details: "Rudranath represents the face of Lord Shiva's bull form and is located in a beautiful meadow surrounded by dense forests. This temple is known for its peaceful atmosphere and spiritual energy. The natural rock formation resembles a human face.",
      features: ["Represents the face of Shiva's bull form", "Located in beautiful meadow", "Surrounded by dense forests", "Peaceful spiritual atmosphere", "Natural spring water source"],
      bestTime: "May-June & September-October",
      altitude: "2,286 meters (7,500 feet)"
    },
    { 
      name: "Madhyamaheshwar", 
      desc: "The sacred temple where Lord Shiva's navel appeared", 
      link: "/madhyamaheshwar",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Madhyamaheshwar_Temple.jpg/800px-Madhyamaheshwar_Temple.jpg",
      details: "Madhyamaheshwar represents the navel of Lord Shiva's bull form and is located in a picturesque valley. This temple offers stunning views of the Chaukhamba peaks and is known for its spiritual significance in the Panch Kedar circuit.",
      features: ["Represents the navel of Shiva's bull form", "Stunning Chaukhamba peak views", "Picturesque valley location", "21 km trek from Uniana", "Ancient temple architecture"],
      bestTime: "May-June & September-October",
      altitude: "3,289 meters (10,790 feet)"
    },
    { 
      name: "Kalpeshwar", 
      desc: "The sacred temple where Lord Shiva's hair appeared", 
      link: "/kalpnath",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kalpnath_Temple.jpg/800px-Kalpnath_Temple.jpg",
      details: "Kalpeshwar represents the hair locks of Lord Shiva's bull form and is the only Panch Kedar temple that remains open throughout the year. This cave temple is located in a serene forest setting and is easily accessible by road.",
      features: ["Represents the hair locks of Shiva's bull form", "Only Panch Kedar open year-round", "Natural cave temple", "Serene forest setting", "Easily accessible by road"],
      bestTime: "Year-round (except monsoon)",
      altitude: "2,200 meters (7,217 feet)"
    },
    { 
      name: "Amarnath", 
      desc: "The sacred cave temple with natural ice lingam", 
      link: "/amarnath",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cave_Temple_of_Lord_Amarnath.jpg/800px-Cave_Temple_of_Lord_Amarnath.jpg",
      details: "Amarnath Temple is a Hindu shrine located in Anantnag district of Jammu and Kashmir, India. A cave situated at an altitude of 3,888 m (12,756 ft), about 168 km from Anantnag city. The shrine represents an important part of Hinduism. The cave, located in Lidder Valley, is surrounded by glaciers, snowy mountains and is covered with snow most of the year, except for a short period in the summer, when it is open to pilgrims.",
      features: ["Natural ice lingam formation", "Located at 3,888 meters altitude", "One of the 51 Shakti Peethas", "Sacred Amarnath Yatra", "Cave temple in Lidder Valley"],
      bestTime: "July-August (during annual yatra)",
      altitude: "3,888 meters (12,756 feet)",
      significance: "The Amarnath cave is where Lord Shiva revealed the secret of immortality (Amar Katha) to Goddess Parvati. The natural ice lingam forms every year, symbolizing the eternal presence of Lord Shiva. According to legend, a pair of doves overheard the conversation and became immortal, and can still be seen in the cave."
    }
  ];

  return (
    <>
      <section className="hero">
        <h1>Sacred Temples of Lord Shiva</h1>
        <p>Explore the divine abodes and pilgrimage sites dedicated to Mahadev</p>
      </section>

      <section className="temples-grid">
        {temples.map((temple, index) => (
          <div key={index} className="temple-card" onClick={() => setSelectedTemple(temple)}>
            <div className="temple-card-image">
              <img src={temple.image} alt={temple.name} onError={(e) => { e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Kedarnath_Temple.jpg/800px-Kedarnath_Temple.jpg"; }} />
            </div>
            <div className="temple-card-content">
              <h2>{temple.name}</h2>
              <p>{temple.desc}</p>
              <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); setSelectedTemple(temple); }}>View Details</button>
              <Link to={temple.link} className="btn" onClick={(e) => e.stopPropagation()}>Visit Temple</Link>
            </div>
          </div>
        ))}
      </section>

      {selectedTemple && (
        <div className="modal-overlay" onClick={() => setSelectedTemple(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedTemple(null)}>×</button>
            <div className="modal-image">
              <img src={selectedTemple.image} alt={selectedTemple.name} />
            </div>
            <div className="modal-body">
              <h2>{selectedTemple.name}</h2>
              {selectedTemple.altitude && (
                <p className="modal-altitude">Altitude: {selectedTemple.altitude}</p>
              )}
              <div className="modal-section">
                <h4>Description</h4>
                <p>{selectedTemple.details}</p>
              </div>
              <div className="modal-section">
                <h4>Special Features</h4>
                <ul>
                  {selectedTemple.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-info-grid">
                <div className="info-item">
                  <span className="label">Best Time:</span>
                  <span className="value">{selectedTemple.bestTime}</span>
                </div>
                {selectedTemple.altitude && (
                  <div className="info-item">
                    <span className="label">Altitude:</span>
                    <span className="value">{selectedTemple.altitude}</span>
                  </div>
                )}
              </div>
              {selectedTemple.significance && (
                <div className="modal-section">
                  <h4>Spiritual Significance</h4>
                  <p>{selectedTemple.significance}</p>
                </div>
              )}
              <Link to={selectedTemple.link} className="modal-btn" onClick={(e) => e.stopPropagation()}>Visit Temple Page</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Temples;

