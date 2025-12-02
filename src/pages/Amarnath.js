import React from 'react';
import './Amarnath.css';

const imageBasePath = `${process.env.PUBLIC_URL}/AmarnathPics`;
const heroImage = `${imageBasePath}/amarnath-yatra_1460361323.avif`;

const stats = [
  { label: "Altitude", value: "3,888 m", detail: "Sacred cave elevation" },
  { label: "Yatra Window", value: "July - August", detail: "Shravan month" },
  { label: "Trek Distance", value: "36-48 km", detail: "Via Pahalgam / Baltal" },
  { label: "Base Camps", value: "Pahalgam & Baltal", detail: "Official routes" }
];

const experiences = [
  {
    title: "The Sacred Ice Lingam",
    description: "Witness the self-manifested ice formation of Mahadev that waxes and wanes with the lunar cycle, symbolizing the eternal nature of Lord Shiva.",
    image: `${imageBasePath}/Divine-Eavesdropping-The-Amarnath-Pigeons-Story.jpg`
  },
  {
    title: "Spiritual Himalayan Aura",
    description: "Snow-clad peaks, rhododendron valleys, and the sound of sacred chants create a transcendental atmosphere unlike any other pilgrimage.",
    image: `${imageBasePath}/History-of-Amarnath.jpg`
  },
  {
    title: "Pilgrim Support & Langars",
    description: "Community-run langars, medical camps, and volunteer services guide devotees every step of the way, ensuring a safe and soulful journey.",
    image: `${imageBasePath}/images1.jpeg`
  }
];

const timelineSteps = [
  { title: "Registration & Permit", detail: "Apply online/offline, secure medical fitness certificate, choose route and travel window." },
  { title: "Arrival at Base Camp", detail: "Reach Pahalgam (traditional 36 km trek) or Baltal (shorter but steeper 14 km trek)." },
  { title: "Acclimatization & Briefing", detail: "Attend orientation, stock supplies, rest, and acclimatize to altitude." },
  { title: "Trek to the Sacred Cave", detail: "Traverse glaciers, rivers, and scenic valleys while chanting 'Har Har Mahadev'." },
  { title: "Darshan & Return", detail: "Offer prayers at the holy lingam, then descend carefully following the guided path." }
];

const travelOptions = [
  { mode: "By Air", detail: "Fly into Srinagar International Airport; continue by road to Pahalgam/Baltal (2-3 hrs)." },
  { mode: "By Road", detail: "Regular buses and taxis connect Srinagar with the base camps; book in advance during peak season." },
  { mode: "By Rail", detail: "Nearest railhead is Jammu Tawi; overnight road journey (~8 hrs) to Srinagar, then onwards to base camps." },
  { mode: "Stay & Logistics", detail: "Government and private tents, prefab huts, and langars provide shelter, meals, and medical aid." }
];

const essentials = {
  mustCarry: ["Government ID & yatra permit", "Medical fitness certificate", "Layered winter clothing & rain gear", "Trekking shoes & walking pole", "Reusable water bottle & dry fruits"],
  registration: ["Registration mandatory through SASB", "Daily pilgrim quotas per route", "Mandatory RFID tracking during trek", "Helicopter bookings via approved operators"],
  tips: ["Start fitness prep weeks in advance", "Hydrate and pace yourself", "Respect ecological guidelines", "Avoid plastics — carry reusable kits"]
};

const galleryImages = [
  `${imageBasePath}/History-of-Amarnath.jpg`,
  `${imageBasePath}/images1.jpeg`,
  `${imageBasePath}/Divine-Eavesdropping-The-Amarnath-Pigeons-Story.jpg`,
  `${imageBasePath}/amarnath-yatra_1460361323.avif`
];

const Amarnath = () => {
  return (
    <div className="amarnath-page">
      <section
        className="amarnath-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <p className="hero-eyebrow">Sacred Himalayan Pilgrimage</p>
          <h1>Amarnath Cave Temple</h1>
          <p className="hero-lede">
            Journey through the Garhwal Himalayas to the self-manifested ice lingam of Lord Shiva — a once-in-a-lifetime yatra that blends devotion, endurance, and transcendence.
          </p>
          <div className="hero-actions">
            <a href="#journey" className="primary-btn">Plan Your Yatra</a>
            <a href="#gallery" className="ghost-btn">View Sacred Moments</a>
          </div>
        </div>
      </section>

      <section className="amarnath-stats">
        {stats.map((stat, idx) => (
          <article key={stat.label} className="stat-card">
            <span className="stat-index">{idx + 1}</span>
            <h3>{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
            <p className="stat-detail">{stat.detail}</p>
          </article>
        ))}
      </section>

      <section className="amarnath-section experience">
        <div className="section-header">
          <p className="section-eyebrow">Why Visit</p>
          <h2>Divine Experiences Await</h2>
          <p>The Amarnath Yatra is more than a trek — it is a profound spiritual immersion where nature, faith, and resilience converge.</p>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article key={item.title} className="experience-card">
              <div className="experience-image" style={{ backgroundImage: `url(${item.image})` }} />
              <div className="experience-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="amarnath-section journey">
        <div className="section-header">
          <p className="section-eyebrow">Yatra Blueprint</p>
          <h2>Step-by-Step Journey</h2>
          <p>Plan every milestone of the sacred trek to stay prepared, safe, and spiritually aligned.</p>
        </div>
        <div className="timeline">
          {timelineSteps.map((step, idx) => (
            <article key={step.title} className="timeline-step">
              <div className="step-number">{idx + 1}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="plan" className="amarnath-section travel">
        <div className="section-header">
          <p className="section-eyebrow">Travel & Stay</p>
          <h2>Choose Your Route</h2>
          <p>A mix of air, rail, and road networks makes the pilgrimage accessible — plan logistics early, especially during peak days.</p>
        </div>
        <div className="travel-grid">
          {travelOptions.map((option) => (
            <article key={option.mode} className="travel-card">
              <h3>{option.mode}</h3>
              <p>{option.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="amarnath-section essentials">
        <div className="section-header">
          <p className="section-eyebrow">Pilgrim Essentials</p>
          <h2>Prepare with Confidence</h2>
        </div>
        <div className="essentials-grid">
          <article className="essentials-card">
            <h3>Must Carry</h3>
            <ul>
              {essentials.mustCarry.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="essentials-card">
            <h3>Registration & Safety</h3>
            <ul>
              {essentials.registration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="essentials-card">
            <h3>Trek Tips</h3>
            <ul>
              {essentials.tips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="gallery" className="amarnath-gallery">
        <div className="section-header">
          <p className="section-eyebrow light">Visual Glimpses</p>
          <h2>Moments from the Yatra</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={img} className={`gallery-item ${idx === 0 ? 'wide' : ''}`}>
              <img src={img} alt={`Amarnath scene ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="amarnath-section callout">
        <div className="callout-card">
          <p className="section-eyebrow light">Har Har Mahadev</p>
          <h2>Answer the Call of the Himalayas</h2>
          <p>Every step towards the Amarnath cave is a step inward — prepare well, travel responsibly, and let faith guide your ascent.</p>
          <div className="hero-actions">
            <a href="#plan" className="primary-btn">Plan Logistics</a>
            <a href="#journey" className="ghost-btn">Review Journey Steps</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amarnath;


