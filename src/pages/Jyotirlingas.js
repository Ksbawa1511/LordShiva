import React, { useState } from 'react';
import './Jyotirlingas.css';

const Jyotirlingas = () => {
  const [selectedJyotirlinga, setSelectedJyotirlinga] = useState(null);
  const imageBasePath = `${process.env.PUBLIC_URL}/Jyotirlingas`;
  const fallbackImage = `${imageBasePath}/Somanath.jpg`;

  const jyotirlingas = [
    { num: 1, name: "Somnath Jyotirlinga", location: "Prabhas Patan, Gujarat", desc: "The first and most sacred of the 12 Jyotirlingas, Somnath is located on the western coast of Gujarat.", image: `${imageBasePath}/Somanath.jpg`, 
      details: "This temple has been destroyed and rebuilt several times throughout history, symbolizing the eternal nature of Lord Shiva. The temple is associated with the moon god Chandra and is believed to be the first among the 12 Jyotirlingas. The current structure was rebuilt in 1951. The temple is located at the confluence of three rivers and is famous for its architectural grandeur.",
      features: ["First Jyotirlinga mentioned in ancient texts", "Located at the confluence of three rivers", "Famous for its architectural grandeur", "Associated with the moon god Chandra", "Destroyed and rebuilt multiple times"],
      bestTime: "Year-round, but best during festivals",
      significance: "Represents the eternal nature of Lord Shiva and the cycle of destruction and creation." },
    { num: 2, name: "Mallikarjuna Jyotirlinga", location: "Srisailam, Andhra Pradesh", desc: "Located on the sacred Srisailam hill, Mallikarjuna is one of the most powerful Jyotirlingas.", image: `${imageBasePath}/Malikarjuna.jpeg`,
      details: "It's associated with the divine couple Shiva and Parvati, representing the perfect union of masculine and feminine energies. The temple is also one of the 18 Shakti Peethas, making it doubly significant. The temple complex is vast and includes several smaller shrines dedicated to various deities.",
      features: ["Located on sacred Srisailam hill", "Associated with Shiva-Parvati union", "One of the 18 Shakti Peethas", "Ancient temple with rich history", "Vast temple complex"],
      bestTime: "Year-round, especially during Maha Shivaratri",
      significance: "Represents the perfect union of masculine and feminine divine energies." },
    { num: 3, name: "Mahakaleshwar Jyotirlinga", location: "Ujjain, Madhya Pradesh", desc: "Mahakaleshwar in Ujjain is one of the most powerful Jyotirlingas, known for its unique Bhasma Aarti ritual.", image: `${imageBasePath}/Mahakaleshwar.avif`,
      details: "The temple is located on the banks of the holy Shipra river. The unique Bhasma Aarti is performed with sacred ash from funeral pyres, symbolizing the cycle of life and death. The temple is one of the seven Moksha cities and has great astronomical significance.",
      features: ["Famous Bhasma Aarti ritual", "Located on Shipra river banks", "One of the seven Moksha cities", "Ancient astronomical significance", "Unique morning aarti"],
      bestTime: "Year-round, especially during Maha Shivaratri",
      significance: "Known for the unique Bhasma Aarti that symbolizes the cycle of life and death." },
    { num: 4, name: "Omkareshwar Jyotirlinga", location: "Omkareshwar, Madhya Pradesh", desc: "Omkareshwar is situated on an island in the Narmada river, shaped like the sacred 'Om' symbol.", image: `${imageBasePath}/omkareshwar.jpeg`,
      details: "This Jyotirlinga represents the cosmic sound and the primordial vibration of creation. The island itself is shaped like the Om symbol, making it a unique pilgrimage destination. The temple is accessible by boat and offers a serene spiritual experience.",
      features: ["Island shaped like Om symbol", "Located on Narmada river", "Represents cosmic sound", "Sacred island pilgrimage", "Accessible by boat"],
      bestTime: "October to March",
      significance: "Represents the primordial sound of creation and the cosmic vibration." },
    { num: 5, name: "Kedarnath Jyotirlinga", location: "Kedarnath, Uttarakhand", desc: "Kedarnath is the highest Jyotirlinga, located at an altitude of 3,583 meters in the Garhwal Himalayas.", image: `${imageBasePath}/kedarnath.jpeg`,
      details: "It's one of the Panch Kedar temples and represents the hump of the bull form of Lord Shiva. The temple is accessible only by a 16 km trek from Gaurikund. It's part of the Char Dham Yatra and remains open only from April to November.",
      features: ["Highest Jyotirlinga", "Part of Panch Kedar circuit", "Located in Garhwal Himalayas", "Represents bull form of Shiva", "Part of Char Dham Yatra"],
      bestTime: "May to June, September to October",
      significance: "The highest among all Jyotirlingas, representing the hump of Lord Shiva's bull form." },
    { num: 6, name: "Bhimashankar Jyotirlinga", location: "Bhimashankar, Maharashtra", desc: "Bhimashankar is located in the Sahyadri hills of Maharashtra, surrounded by dense forests and wildlife.", image: `${imageBasePath}/Bhimashankar.jpg`,
      details: "This Jyotirlinga is associated with the legend of Bhima, the Pandava prince. The temple is located in a wildlife sanctuary and is surrounded by pristine natural beauty. The architecture is a blend of Nagara and Dravidian styles.",
      features: ["Located in Sahyadri hills", "Surrounded by dense forests", "Associated with Bhima legend", "Wildlife sanctuary nearby", "Blend of architectural styles"],
      bestTime: "October to February",
      significance: "Associated with the legend of Bhima and represents the power of devotion." },
    { num: 7, name: "Kashi Vishwanath Jyotirlinga", location: "Varanasi, Uttar Pradesh", desc: "Kashi Vishwanath is the most sacred Jyotirlinga, located in the holy city of Varanasi.", image: `${imageBasePath}/Kashi-Vishwanath-Temple.webp`,
      details: "It's believed that a visit to this temple grants liberation (moksha) and is considered the ultimate pilgrimage destination. The temple is located on the banks of the Ganges and is one of the most visited temples in India. It's said that dying in Varanasi ensures moksha.",
      features: ["Most sacred Jyotirlinga", "Located in holy Varanasi", "Grants liberation (moksha)", "Ultimate pilgrimage destination", "On banks of Ganges"],
      bestTime: "Year-round, especially during festivals",
      significance: "The most sacred of all Jyotirlingas, believed to grant liberation to devotees." },
    { num: 8, name: "Trimbakeshwar Jyotirlinga", location: "Trimbak, Maharashtra", desc: "Trimbakeshwar is located near the source of the sacred Godavari river.", image: `${imageBasePath}/trimbakeshwar-jyotirling-temple.webp`,
      details: "This Jyotirlinga is unique as it has three faces representing Brahma, Vishnu, and Shiva, symbolizing the trinity of creation. The temple is near the source of the Godavari river, one of India's most sacred rivers. The lingam here is unique with three faces.",
      features: ["Source of Godavari river", "Three faces of trinity", "Unique architectural design", "Sacred river origin", "Three-faced lingam"],
      bestTime: "Year-round, especially during Kumbh Mela",
      significance: "Represents the trinity of creation with three faces of Brahma, Vishnu, and Shiva." },
    { num: 9, name: "Vaidyanath Jyotirlinga", location: "Deoghar, Jharkhand", desc: "Vaidyanath, also known as Baidyanath, is the divine physician form of Lord Shiva.", image: `${imageBasePath}/vaidyanath.jpg`,
      details: "This Jyotirlinga is believed to have healing powers and is visited by devotees seeking physical and spiritual healing. The temple is also one of the 51 Shakti Peethas. Devotees believe that praying here can cure diseases and ailments.",
      features: ["Divine physician form", "Healing powers", "Located in Deoghar", "Spiritual healing center", "One of 51 Shakti Peethas"],
      bestTime: "Year-round, especially during Shravan month",
      significance: "The divine physician form of Shiva, believed to have healing powers." },
    { num: 10, name: "Nageshwar Jyotirlinga", location: "Dwarka, Gujarat", desc: "Nageshwar is located near the holy city of Dwarka and is associated with the legend of Lord Shiva protecting his devotees.", image: `${imageBasePath}/Nageshwar-Jyotirlinga.webp`,
      details: "This Jyotirlinga is associated with the legend of Lord Shiva protecting his devotees from the demon Daruka. The temple represents the protective aspect of Shiva. It's located near the famous Dwarkadhish Temple, making it part of a larger pilgrimage circuit.",
      features: ["Near holy Dwarka", "Protective aspect of Shiva", "Associated with Daruka legend", "Coastal temple location", "Near Dwarkadhish Temple"],
      bestTime: "Year-round, especially during festivals",
      significance: "Represents the protective aspect of Lord Shiva, who protects his devotees from all evils." },
    { num: 11, name: "Rameshwar Jyotirlinga", location: "Rameswaram, Tamil Nadu", desc: "Rameshwar is located on the sacred island of Rameswaram and is associated with Lord Rama's worship of Shiva.", image: `${imageBasePath}/Rameswaram_temple.jpg`,
      details: "This Jyotirlinga is associated with Lord Rama's worship of Shiva before crossing the ocean to Lanka. The temple is famous for its long corridors and architectural grandeur. It's one of the Char Dham pilgrimage sites and has great significance in the Ramayana.",
      features: ["Sacred island location", "Associated with Lord Rama", "Divine Rama-Shiva connection", "Southernmost Jyotirlinga", "Famous long corridors"],
      bestTime: "Year-round, especially during festivals",
      significance: "Represents the divine connection between Lord Rama and Shiva, established before the battle with Ravana." },
    { num: 12, name: "Grishneshwar Jyotirlinga", location: "Ellora, Maharashtra", desc: "Grishneshwar is located near the famous Ellora caves and is the last of the 12 Jyotirlingas.", image: `${imageBasePath}/grishneshwar-temple.jpeg`,
      details: "This temple is associated with the legend of a devout woman named Kusuma and represents the power of true devotion. The temple is located near the UNESCO World Heritage site of Ellora caves, making it a popular tourist destination as well.",
      features: ["Near Ellora caves", "Last of 12 Jyotirlingas", "Kusuma legend", "Power of true devotion", "Near UNESCO World Heritage site"],
      bestTime: "Year-round, especially during festivals",
      significance: "The last of the 12 Jyotirlingas, representing the power of true devotion and faith." }
  ];

  return (
    <>
      <section className="hero">
        <h1>The 12 Sacred Jyotirlingas</h1>
        <p>Discover the divine manifestations of Lord Shiva across India. These twelve sacred shrines represent the most powerful and revered forms of Mahadev, where devotees experience the ultimate spiritual awakening.</p>
      </section>

      <section className="jyotirlingas-grid">
        {jyotirlingas.map(jyotirlinga => (
          <div key={jyotirlinga.num} className="jyotirlinga-card" onClick={() => setSelectedJyotirlinga(jyotirlinga)}>
            <div className="card-image">
              <img
                src={jyotirlinga.image}
                alt={jyotirlinga.name}
                onError={(e) => {
                  if (e.target.src !== fallbackImage) {
                    e.target.src = fallbackImage;
                  }
                }}
              />
            </div>
            <div className="card-content">
              <div className="jyotirlinga-number">{jyotirlinga.num}</div>
              <h2>{jyotirlinga.name}</h2>
              <h3>Location: {jyotirlinga.location}</h3>
              <p>{jyotirlinga.desc}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </section>

      {selectedJyotirlinga && (
        <div className="modal-overlay" onClick={() => setSelectedJyotirlinga(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedJyotirlinga(null)}>×</button>
            <div className="modal-image">
              <img
                src={selectedJyotirlinga.image}
                alt={selectedJyotirlinga.name}
                onError={(e) => {
                  if (e.target.src !== fallbackImage) {
                    e.target.src = fallbackImage;
                  }
                }}
              />
            </div>
            <div className="modal-body">
              <div className="modal-number">{selectedJyotirlinga.num}</div>
              <h2>{selectedJyotirlinga.name}</h2>
              <h3>Location: {selectedJyotirlinga.location}</h3>
              <div className="modal-section">
                <h4>Description</h4>
                <p>{selectedJyotirlinga.details}</p>
              </div>
              <div className="modal-section">
                <h4>Special Features</h4>
                <ul>
                  {selectedJyotirlinga.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-section">
                <h4>Best Time to Visit</h4>
                <p>{selectedJyotirlinga.bestTime}</p>
              </div>
              <div className="modal-section">
                <h4>Spiritual Significance</h4>
                <p>{selectedJyotirlinga.significance}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="significance">
        <h2>Spiritual Significance of Jyotirlingas</h2>
        <p>The 12 Jyotirlingas represent the most powerful manifestations of Lord Shiva across India. Each Jyotirlinga has unique spiritual significance and is associated with specific legends and divine events. Visiting all 12 Jyotirlingas is considered the ultimate pilgrimage for Shiva devotees.</p>
        
        <div className="significance-grid">
          <div className="significance-item">
            <h3>Cosmic Energy</h3>
            <p>Each Jyotirlinga represents a cosmic energy center where the divine light of Shiva manifests on Earth.</p>
          </div>
          <div className="significance-item">
            <h3>Spiritual Awakening</h3>
            <p>Devotees experience profound spiritual awakening and divine grace when visiting these sacred shrines.</p>
          </div>
          <div className="significance-item">
            <h3>Karma Cleansing</h3>
            <p>Worship at Jyotirlingas helps cleanse past karma and accelerates spiritual progress.</p>
          </div>
          <div className="significance-item">
            <h3>Moksha Path</h3>
            <p>These sacred shrines guide devotees on the path to liberation and ultimate freedom.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jyotirlingas;

