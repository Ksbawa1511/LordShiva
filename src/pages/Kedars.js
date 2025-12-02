import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Kedars.css';

const Kedars = () => {
  const [selectedKedar, setSelectedKedar] = useState(null);
  const imageBasePath = `${process.env.PUBLIC_URL}/Kedars`;
  const fallbackImage = `${imageBasePath}/Kedarnath.jpg`;

  const kedars = [
    { num: 1, name: "Kedarnath", location: "Kedarnath, Uttarakhand", altitude: "3,583 meters (11,755 feet)", desc: "Kedarnath is the most sacred of the Panch Kedar temples, representing the hump of Lord Shiva's bull form.", link: "/kedarnath", image: `${imageBasePath}/Kedarnath.jpg`,
      details: "Located in the pristine Garhwal Himalayas, this ancient temple is surrounded by snow-capped peaks and offers a truly divine experience. The temple is accessible only by a 16 km trek from Gaurikund and remains open from April to November. It's part of the Char Dham Yatra and is one of the 12 Jyotirlingas.",
      features: ["Represents the hump of Shiva's bull form", "Highest among the Panch Kedar temples", "Ancient stone architecture", "Sacred Kedarnath peak backdrop", "Part of Char Dham Yatra", "One of the 12 Jyotirlingas"],
      bestTime: "May-June & September-October",
      trekDistance: "16 km from Gaurikund",
      opening: "Akshaya Tritiya",
      closing: "Bhai Dooj",
      significance: "The most sacred of the Panch Kedar temples, representing the hump of Lord Shiva's bull form. It's believed that visiting this temple helps in attaining moksha and washing away sins." },
    { num: 2, name: "Tungnath", location: "Tungnath, Uttarakhand", altitude: "3,680 meters (12,073 feet)", desc: "Tungnath is the highest Shiva temple in the world, representing the arms of Lord Shiva's bull form.", link: "/tungnath", image: `${imageBasePath}/Tungnath.jpg`,
      details: "This ancient temple offers breathtaking views of the Himalayan peaks and is a must-visit destination for spiritual seekers. The temple is accessible via a 3.5 km trek from Chopta and offers panoramic views of Nanda Devi, Trishul, and Chaukhamba peaks.",
      features: ["Highest Shiva temple in the world", "Represents the arms of Shiva's bull form", "Panoramic Himalayan views", "Ancient stone architecture", "Moderate trek difficulty"],
      bestTime: "May-June & September-October",
      trekDistance: "3.5 km from Chopta",
      opening: "Akshaya Tritiya",
      closing: "Bhai Dooj",
      significance: "The highest Shiva temple in the world, representing the arms of Lord Shiva's bull form. The temple offers stunning views and a serene spiritual atmosphere." },
    { num: 3, name: "Rudranath", location: "Rudranath, Uttarakhand", altitude: "2,286 meters (7,500 feet)", desc: "Rudranath represents the face of Lord Shiva's bull form and is located in a beautiful meadow surrounded by dense forests.", link: "/rudranath", image: `${imageBasePath}/rudranath.webp`,
      details: "This temple is known for its peaceful atmosphere and spiritual energy. The temple is accessible via a 20 km trek from Gopeshwar and passes through beautiful rhododendron forests and alpine meadows. The natural rock formation resembles a human face.",
      features: ["Represents the face of Shiva's bull form", "Located in beautiful meadow", "Surrounded by dense forests", "Peaceful spiritual atmosphere", "Natural spring water source"],
      bestTime: "May-June & September-October",
      trekDistance: "20 km from Gopeshwar",
      opening: "Akshaya Tritiya",
      closing: "Bhai Dooj",
      significance: "Represents the face of Lord Shiva's bull form. The temple is known for its peaceful atmosphere and natural beauty, making it perfect for meditation and spiritual practices." },
    { num: 4, name: "Madhyamaheshwar", location: "Madhyamaheshwar, Uttarakhand", altitude: "3,289 meters (10,790 feet)", desc: "Madhyamaheshwar represents the navel of Lord Shiva's bull form and is located in a picturesque valley.", link: "/madhyamaheshwar", image: `${imageBasePath}/Madhyamaheshwar.jpg`,
      details: "This temple offers stunning views of the Chaukhamba peaks and is known for its spiritual significance. The temple is accessible via a 21 km trek from Uniana village and passes through beautiful forests and meadows.",
      features: ["Represents the navel of Shiva's bull form", "Stunning Chaukhamba peak views", "Picturesque valley location", "Ancient temple architecture", "Sacred water spring nearby"],
      bestTime: "May-June & September-October",
      trekDistance: "21 km from Uniana",
      opening: "Akshaya Tritiya",
      closing: "Bhai Dooj",
      significance: "Represents the navel of Lord Shiva's bull form. The temple offers stunning views of the Chaukhamba peaks and is known for its spiritual significance in the Panch Kedar circuit." },
    { num: 5, name: "Kalpeshwar", location: "Kalpeshwar, Uttarakhand", altitude: "2,200 meters (7,217 feet)", desc: "Kalpeshwar represents the hair locks of Lord Shiva's bull form and is the only Panch Kedar temple that remains open throughout the year.", link: "/kalpnath", image: `${imageBasePath}/Kalpeshwar.jpg`,
      details: "This cave temple is located in a serene forest setting. Unlike other Panch Kedar temples, Kalpeshwar remains accessible year-round, making it unique. The temple is accessible by road and requires only a short walk, making it the most accessible of all Panch Kedar temples.",
      features: ["Represents the hair locks of Shiva's bull form", "Only Panch Kedar open year-round", "Natural cave temple", "Serene forest setting", "Easily accessible by road"],
      bestTime: "Year-round (except monsoon)",
      trekDistance: "Road accessible",
      opening: "Year-round",
      closing: "Never closes",
      significance: "Represents the hair locks of Lord Shiva's bull form. It's the only Panch Kedar temple that remains open throughout the year, completing the sacred Panch Kedar pilgrimage circuit." }
  ];

  return (
    <>
      <section className="hero">
        <h1>The 5 Sacred Kedars</h1>
        <p>Discover the divine abodes of Lord Shiva in the Garhwal Himalayas. These five sacred temples represent different parts of Lord Shiva's bull form and are among the most revered pilgrimage destinations in the world.</p>
      </section>

      <section className="kedars-grid">
        {kedars.map(kedar => (
          <div key={kedar.num} className={`kedar-card ${kedar.num === 1 ? 'featured' : ''}`} onClick={() => setSelectedKedar(kedar)}>
            <div className="card-image">
                <img
                  src={kedar.image}
                  alt={kedar.name}
                  onError={(e) => {
                    if (e.target.src !== fallbackImage) {
                      e.target.src = fallbackImage;
                    }
                  }}
                />
            </div>
            <div className="card-content">
              <div className="kedar-number">{kedar.num}</div>
              <h2>{kedar.name}</h2>
              <h3>Location: {kedar.location}</h3>
              <p className="altitude">Altitude: {kedar.altitude}</p>
              <p>{kedar.desc}</p>
              <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); setSelectedKedar(kedar); }}>View Details</button>
              <Link to={kedar.link} className="btn" onClick={(e) => e.stopPropagation()}>Visit Temple</Link>
            </div>
          </div>
        ))}
      </section>

      {selectedKedar && (
        <div className="modal-overlay" onClick={() => setSelectedKedar(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedKedar(null)}>×</button>
            <div className="modal-image">
              <img src={selectedKedar.image} alt={selectedKedar.name} />
            </div>
            <div className="modal-body">
              <div className="modal-number">{selectedKedar.num}</div>
              <h2>{selectedKedar.name}</h2>
              <h3>Location: {selectedKedar.location}</h3>
              <p className="modal-altitude">Altitude: {selectedKedar.altitude}</p>
              <div className="modal-section">
                <h4>Description</h4>
                <p>{selectedKedar.details}</p>
              </div>
              <div className="modal-section">
                <h4>Special Features</h4>
                <ul>
                  {selectedKedar.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-info-grid">
                <div className="info-item">
                  <span className="label">Best Time:</span>
                  <span className="value">{selectedKedar.bestTime}</span>
                </div>
                <div className="info-item">
                  <span className="label">Trek Distance:</span>
                  <span className="value">{selectedKedar.trekDistance}</span>
                </div>
                <div className="info-item">
                  <span className="label">Opening:</span>
                  <span className="value">{selectedKedar.opening}</span>
                </div>
                <div className="info-item">
                  <span className="label">Closing:</span>
                  <span className="value">{selectedKedar.closing}</span>
                </div>
              </div>
              <div className="modal-section">
                <h4>Spiritual Significance</h4>
                <p>{selectedKedar.significance}</p>
              </div>
              <Link to={selectedKedar.link} className="modal-btn" onClick={(e) => e.stopPropagation()}>Visit Temple Page</Link>
            </div>
          </div>
        </div>
      )}

      <section className="panch-kedar-info">
        <h2>The Panch Kedar Legend</h2>
        <p>According to ancient Hindu mythology, after the great battle of Kurukshetra, the Pandavas sought forgiveness from Lord Shiva for the sins committed during the war. Lord Shiva, however, was not willing to meet them and took the form of a bull to hide in the Garhwal Himalayas.</p>
        
        <div className="legend-grid">
          <div className="legend-item">
            <h3>The Chase</h3>
            <p>When the Pandavas found the bull, it tried to escape by diving into the ground. Bhima, the strongest Pandava, caught hold of the bull's tail and hump, but the bull disappeared into the earth, leaving different parts of its body at various locations.</p>
          </div>
          <div className="legend-item">
            <h3>The Five Parts</h3>
            <p>These five locations where different parts of the bull appeared became the Panch Kedar temples: Kedarnath (hump), Tungnath (arms), Rudranath (face), Madhyamaheshwar (navel), and Kalpeshwar (hair locks).</p>
          </div>
          <div className="legend-item">
            <h3>Spiritual Significance</h3>
            <p>Each temple represents a different aspect of Lord Shiva and offers unique spiritual experiences. Visiting all five Kedars is considered highly auspicious and helps in attaining spiritual purification and divine blessings.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kedars;

