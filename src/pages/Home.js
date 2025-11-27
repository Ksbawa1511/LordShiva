import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Card animation on scroll
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          cardObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      cardObserver.observe(card);
    });

    return () => {
      cards.forEach(card => cardObserver.unobserve(card));
    };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <img src="https://wallpapercave.com/wp/wp3168591.jpg" alt="Lord Shiva" />
          <div className="hero-text">
            <h1>Lord Shiva</h1>
            <p>The Supreme Being in Shaivism</p>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <h2>About Lord Shiva</h2>
          <p>
            Shiva (/ˈʃɪvə/; Sanskrit: शिव, romanized: Śiva, lit. 'The Auspicious
            One' [ɕɪʋɐ]), also known as Mahadeva (/məˈhɑː ˈdeɪvə/; Sanskrit:
            महादेव:, romanized: Mahādevaḥ, lit. 'The Great God' [mɐɦaːd̪eːʋɐ]),or
            Hara, is one of the principal deities of Hinduism. He is the Supreme
            Being in Shaivism, one of the major traditions within Hinduism.
          </p>
        </div>

        <div className="card">
          <h2>The Destroyer</h2>
          <p>
            Shiva is known as "The Destroyer" within the Trimurti, the Hindu trinity
            which also includes Brahma and Vishnu. In the Shaivite tradition, Shiva
            is the Supreme Lord who creates, protects and transforms the universe.
            In the goddess-oriented Shakta tradition, the Supreme Goddess (Devi) is
            regarded as the energy and creative power (Shakti) and the equal
            complementary partner of Shiva.Shiva is one of the five equivalent
            deities in Panchayatana puja of the Smarta tradition of Hinduism.
          </p>
        </div>

        <div className="card">
          <h2>Divine Aspects</h2>
          <p>
            Shiva has many aspects, benevolent as well as fearsome. In benevolent
            aspects, he is depicted as an omniscient Yogi who lives an ascetic life
            on Mount Kailash as well as a householder with his wife Parvati and his
            three children, Ganesha, Kartikeya and Ashokasundari. In his fierce
            aspects, he is often depicted slaying demons. Shiva is also known as
            Adiyogi (the first Yogi), regarded as the patron god of yoga, meditation
            and the arts.
          </p>
        </div>

        <div className="card">
          <h2>Sacred Attributes</h2>
          <p>
            The iconographical attributes of Shiva are the serpent Vasuki around his
            neck, the adorning crescent moon, the holy river Ganga flowing from his
            matted hair, the third eye on his forehead (the eye that turns
            everything in front of it into ashes when opened), the trishula or
            trident as his weapon, and the damaru drum. He is usually worshipped in
            the aniconic form of lingam
          </p>
        </div>

        <div className="card">
          <h2>Historical Significance</h2>
          <p>
            Shiva has pre-Vedic roots, and the figure of Shiva evolved as an
            amalgamation of various older non-Vedic and Vedic deities, including the
            Rigvedic storm god Rudra who may also have non-Vedic origins, into a
            single major deity. Shiva is a pan-Hindu deity, revered widely by Hindus
            in India, Nepal, Sri Lanka and Indonesia (especially in Java and Bali).
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

