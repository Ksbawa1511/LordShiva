import React from 'react';
import './Stories.css';

const Stories = () => {
  const stories = [
    {
      title: 'Samudra Manthan & Neelkanth',
      summary: 'When the devas and asuras churned the ocean of milk for amrita, the first thing to emerge was deadly poison (halahala) that threatened to destroy creation. None could hold it. Lord Shiva drank the poison to save the world. Parvati held his throat so the poison stayed there, turning it blue. Thus Shiva is called Neelkanth (the blue-throated one) — the one who holds poison for the welfare of all.',
      lesson: 'Selfless sacrifice and bearing the weight of adversity for the greater good.',
    },
    {
      title: 'Ganga in Shiva’s Locks',
      summary: 'When the heavenly river Ganga was brought to earth to purify the ashes of King Bhagiratha’s ancestors, her force was so fierce that she would have shattered the earth. Shiva agreed to receive her in his matted hair, tempering her descent. Ganga thus flows from his locks as a gentle stream, and he is Gangadhara (bearer of Ganga). Devotees offer Ganga jal to Shiva in this remembrance.',
      lesson: 'Transforming raw power into grace; the divine absorbs and softens what could destroy.',
    },
    {
      title: 'Nataraja — Lord of Dance',
      summary: 'Shiva as Nataraja performs the cosmic dance (Tandava) within a ring of flames. The dance represents the five acts (panchakritya): creation, preservation, dissolution, veiling (illusion), and grace. One foot crushes the demon Apasmara (ignorance); the other is raised in liberation. The damaru in his hand beats the rhythm of creation; fire and gesture signify both destruction and blessing.',
      lesson: 'Life is a dance of creation and dissolution; wisdom lies in transcending ignorance and accepting the cycle.',
    },
    {
      title: 'Tripurantaka — Destroyer of the Three Fortresses',
      summary: 'Three asura brothers built three flying cities (Tripura) of gold, silver, and iron, and began to oppress the worlds. No god could defeat them until Shiva became the archer. He shot a single arrow through the three cities at the rare moment they aligned, destroying them in an instant. Shiva thus protects the cosmos from arrogance and imbalance.',
      lesson: 'Even the mightiest ego and tyranny can be dissolved by divine will at the right moment.',
    },
    {
      title: 'Andhakasura',
      summary: 'The demon Andhaka was born blind and gained a boon that he could only be killed when he desired his own mother. In battle, Shiva wounded him repeatedly; from each drop of blood, new demons arose. Shiva created goddesses to drink the blood and finally impaled Andhaka. When Andhaka realized Shiva and Parvati as his true parents, he surrendered and was granted liberation.',
      lesson: 'Desire and ego bind; recognition of the divine and surrender lead to moksha.',
    },
    {
      title: 'Rishi Bhrigu’s Test',
      summary: 'Sage Bhrigu went to test the trimurti. He kicked Shiva on the chest. Shiva remained calm and even pressed the sage’s foot to his chest, where Parvati’s presence (as the heart) made the spot sacred. Bhrigu was humbled by Shiva’s forbearance and compassion.',
      lesson: 'True strength lies in restraint and forgiveness; the divine does not retaliate.',
    },
  ];

  return (
    <>
      <section className="hero">
        <h1>Stories & Legends</h1>
        <p>Timeless tales of Lord Shiva — from the Puranas and tradition — and the wisdom they carry</p>
      </section>

      <section className="stories-content">
        {stories.map((s, i) => (
          <div key={i} className="story-card">
            <h2>{s.title}</h2>
            <p className="summary">{s.summary}</p>
            <div className="lesson">
              <strong>Takeaway:</strong> {s.lesson}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Stories;
