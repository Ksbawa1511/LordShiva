import React from 'react';
import './Mantras.css';

const Mantras = () => {
  const mantras = [
    {
      title: 'Om Namah Shivaya',
      sanskrit: 'ॐ नमः शिवाय',
      meaning: 'I bow to Shiva (the Auspicious One).',
      description: 'The Panchakshari (five-syllable) mantra is the core chant of Shaivism. It signifies surrender to the divine and invokes inner peace, dissolution of ego, and connection with Shiva consciousness. Chant 108 times daily for best effect.',
      when: 'Anytime; especially at dawn (Brahma muhurta), during puja, or before meditation.',
    },
    {
      title: 'Maha Mrityunjaya Mantra',
      sanskrit: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥',
      translit: 'Om Tryambakam Yajamahe Sugandhim Pushtivardhanam | Urvarukamiva Bandhanan Mrityormukshiya Maamritat ||',
      meaning: 'We worship the three-eyed One (Shiva) who is fragrant and nourishes all. May He liberate us from death for the sake of immortality, even as the cucumber is severed from its bond to the creeper.',
      description: 'The great death-conquering mantra. It is chanted for healing, protection, longevity, and freedom from fear of death. It helps overcome obstacles and grants resilience.',
      when: 'During illness, after loss, for protection, or as part of daily Shiva worship.',
    },
    {
      title: 'Shiva Gayatri',
      sanskrit: 'ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि। तन्नो रुद्रः प्रचोदयात्॥',
      translit: 'Om Tatpurushaya Vidmahe Mahadevaya Dheemahi | Tanno Rudrah Prachodayat ||',
      meaning: 'We meditate upon the Supreme Purusha (Shiva), the Great God. May Rudra illumine our intellect.',
      description: 'The Gayatri form dedicated to Shiva. It sharpens the mind, enhances focus, and invokes Shiva’s grace for clarity and steadfast devotion.',
      when: 'Morning meditation, before study or important work.',
    },
    {
      title: 'Shiva Panchakshari Stotram (excerpt)',
      sanskrit: 'नमः शिवाय च शिवतराय च',
      translit: 'Namah Shivaya Cha Shivataraya Cha',
      meaning: 'Salutations to Shiva and to Shiva who is even more auspicious.',
      description: 'Extended salutations to Shiva in his many forms. Often chanted after the main Panchakshari for deeper devotion.',
      when: 'During abhishekam or extended puja.',
    },
  ];

  return (
    <>
      <section className="hero">
        <h1>Mantras & Chants</h1>
        <p>Sacred sounds that connect the devotee to Lord Shiva — meaning, use, and when to chant</p>
      </section>

      <section className="mantras-content">
        {mantras.map((m, i) => (
          <div key={i} className="mantra-card">
            <h2>{m.title}</h2>
            <div className="sanskrit">{m.sanskrit}</div>
            {m.translit && <div className="translit">{m.translit}</div>}
            <p className="meaning"><strong>Meaning:</strong> {m.meaning}</p>
            <p className="description">{m.description}</p>
            <p className="when"><strong>When to chant:</strong> {m.when}</p>
          </div>
        ))}
      </section>

      <section className="mantras-tips">
        <h2>Chanting Tips</h2>
        <ul>
          <li>Sit in a clean, quiet place; light a lamp or incense if possible.</li>
          <li>Use a mala (rosary) for 108 repetitions; count with focus.</li>
          <li>Brahma muhurta (before sunrise) is considered most auspicious.</li>
          <li>Consistency matters more than quantity — a few mindful rounds daily is better than rare long sessions.</li>
          <li>Pair with gentle breath; let the sound resonate in the chest and head.</li>
        </ul>
      </section>
    </>
  );
};

export default Mantras;
