import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources">
      <section className="hero">
        <div>
          <h1>Resources & Guides</h1>
          <p>Quick references for Shiva legends, mantras, observances, and visits.</p>
        </div>
        <div className="meta">
          <span className="badge">Last updated: Dec 2025</span>
        </div>
      </section>

      <section className="grid two">
        <div className="card">
          <h2>Shiva Timeline (Brief)</h2>
          <ul className="timeline">
            <li><strong>Pre-Vedic:</strong> Proto-Rudra and ascetic yogi archetypes (e.g., seal motifs).</li>
            <li><strong>Vedic (Rudra → Shiva):</strong> From storm-healer to auspicious Lord invoked in mantras.</li>
            <li><strong>Sati & Shakti Peethas:</strong> Sati’s sacrifice; Peethas mark the power of the Divine Mother.</li>
            <li><strong>Parvati’s Tapasya:</strong> Devotion reunites Shiva and Shakti; Kailash household begins.</li>
            <li><strong>Ganga Avahana:</strong> Shiva receives the Ganga in his locks, tempering its descent.</li>
            <li><strong>Samudra Manthan:</strong> Drinks halahala poison; becomes Neelkanth, savior of the devas.</li>
            <li><strong>Tripurantaka / Andhakasura:</strong> Protector who dissolves arrogance and imbalance.</li>
            <li><strong>Nataraja:</strong> Cosmic dance (panchakritya) of creation, preservation, dissolution, veiling, grace.</li>
          </ul>
          <small className="note">Add citations as you expand details.</small>
        </div>

        <div className="card">
          <h2>Festival Quick Guide</h2>
          <ul className="list">
            <li><strong>Maha Shivaratri:</strong> Night-long Abhishekam, bel leaves, Om Namah Shivaya japa.</li>
            <li><strong>Shravan Somvar:</strong> Monday fasts in Shravan for grace and protection.</li>
            <li><strong>Pradosh Vrat:</strong> Twilight Trayodashi worship for removing karmic weight.</li>
            <li><strong>Kanwar Yatra:</strong> Carrying Ganga jal to offer at Shiva temples.</li>
            <li><strong>Karthik/Chaturdashi:</strong> River ablutions and lamp offerings honoring purification.</li>
          </ul>
        </div>
      </section>

      <section className="grid two">
        <div className="card">
          <h2>Mantra Guide</h2>
          <ul className="list">
            <li><strong>Om Namah Shivaya:</strong> Core Panchakshari for surrender and inner peace.</li>
            <li><strong>Mahamrityunjaya:</strong> Healing and protection; chant for resilience.</li>
            <li><strong>Om Tatpurushaya Vidmahe:</strong> Gayatri for clarity and steadfast focus.</li>
          </ul>
          <small className="note">Pair with your preferred audio source or a simple tanpura drone.</small>
        </div>

        <div className="card">
          <h2>Shakti Peetha Callouts</h2>
          <ul className="list">
            <li><strong>Kamakhya (Assam):</strong> Creative power; Nilachal hill.</li>
            <li><strong>Kalighat (Kolkata):</strong> Protective mother aspect in the city’s heart.</li>
            <li><strong>Jwalamukhi (Himachal):</strong> Eternal flame symbolizing cosmic energy.</li>
            <li><strong>Hinglaj (Sindh/Balochistan):</strong> Desert shrine revered across borders.</li>
            <li><strong>Kanchi Kamakshi (Tamil Nadu):</strong> Wish-fulfilling, compassionate mother.</li>
          </ul>
          <small className="note">Add a map embed when ready; keep locations handy for pilgrims.</small>
        </div>
      </section>

      <section className="grid two">
        <div className="card">
          <h2>Visiting Tips</h2>
          <ul className="list">
            <li><strong>Kedarnath:</strong> High altitude; acclimatize, carry layers, morning darshan best.</li>
            <li><strong>Amarnath:</strong> Permit, fitness prep; respect weather advisories.</li>
            <li><strong>Varanasi (Kashi Vishwanath):</strong> Early morning aartis; modest attire; mindful of crowded lanes.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Simple Shiva Puja Checklist</h2>
          <ul className="list checklist">
            <li>Quiet, clean space; light a lamp/incense.</li>
            <li>Offer water or milk; place bilva leaves or flowers.</li>
            <li>Chant Om Namah Shivaya (108 or comfortable count).</li>
            <li>Short silent meditation; offer gratitude.</li>
            <li>Conclude with a small aarti or closing bow.</li>
          </ul>
        </div>
      </section>

      <section className="card faq">
        <h2>FAQ</h2>
        <div className="faq-items" aria-label="Shiva FAQ">
          <details>
            <summary>Why bel (bilva) leaves?</summary>
            <p>They symbolize purity and cooling, traditionally offered to honor Shiva’s ascetic grace.</p>
          </details>
          <details>
            <summary>What does the lingam represent?</summary>
            <p>It signifies the formless, infinite nature of Shiva—beyond attributes, yet source of all manifestation.</p>
          </details>
          <details>
            <summary>Best time for chanting?</summary>
            <p>Brahma muhurta (pre-dawn) is ideal, but consistency matters more than the clock.</p>
          </details>
          <details>
            <summary>Do fasts need to be strict?</summary>
            <p>Intent and sattvic discipline matter most; follow health needs and local guidance.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Resources;

