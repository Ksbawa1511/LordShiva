import React from 'react';
import './Avatar.css';

const Avatar = () => {
  const avatars = [
    { num: 1, name: "Piplaad Avatar", desc: "This avatar of Lord Shiva was born to Sage Dadhichi and his wife, Swarcha. However, he lost his parent's son after his birth. He was raised by his aunt Dadhimati. As he grew up and learnt about the cause of his father's death, Piplaad cursed Shani Dev (Saturn). He wanted to avenge Shani Dev for causing troubling his father during his lifetime. As a result, Shani Dev fell from the galaxy. However, after the Devas intervened, Piplaad agreed to forgive Shani by saying that none below sixteen would get affected by his adverse effects. Therefore, those who have Shani Dosha worship Lord Shiva." },
    { num: 2, name: "Nandi Avatar", desc: "This form of Lord Shiva was born to Sage Shilada. The sage performed intense penance to seek Lord Shiva's blessings and asked for a child who would remain immortal. Therefore, pleased by Sage's devotion, Lord Shiva took birth as Nandi, who then became the gate-keeper of Kailasha (Lord Shiva's heavenly abode) and the mount of the Lord." },
    { num: 3, name: "Veerabhadra Avatar", desc: "The Veerabhadra avatar of Lord Shiva is one of his fiercest forms. Lord Shiva incarnated as Veerabhadra after his wife Sati's death. The Veerabhadra form of Lord Shiva destroyed King Daksha's Yagya and beheaded him for being responsible for Sati's death." },
    { num: 4, name: "Bhairava Avatar", desc: "The Bhairava Avatar also is one of the fiercest avatars of Lord Shiva. Referred to as Dandapani, the Bhairava Avatar punishes those who are greedy, lustful and arrogant. These negative traits often lead to one's downfall, and hence the purpose of the Bhairava avatar." },
    { num: 5, name: "Ashwatthama Avatar", desc: "Guru Dronacharya had performed intense penance to please Lord Shiva. He wanted the Lord to be born as his son. Therefore, pleased by Guru Dronacharya's devotion, Lord Shiva took birth as Ashwatthama, an able warrior who played a pivotal role in the Mahabharata." },
    { num: 6, name: "Sharabha Avatar", desc: "This form of Lord Shiva appeared to calm Lord Narasimha after the latter killed demon Hiranyakashipu. The Sharabha avatar is one of its kind. The Lord appeared as a being that partly looked like a lion and bird. In some texts, the Sharabha avatar is said to have eight legs." },
    { num: 7, name: "Grihapati Avatar", desc: "The Grihapati avatar of Lord Shiva was born to a sage named Vishwanar and his wife, who lived on the Narmada banks. The sage's consort wanted Lord Shiva to be born as her son. Therefore, the sage performed intense penance in Kashi. A few days later, pleased by Vishwanar's devotion, Lord Shiva was born as Grihapati to the sage and his wife." },
    { num: 8, name: "Durvasa Avatar", desc: "This avatar of Lord Shiva was born to Sage Atri and his wife, Anasuya. He was known for being short-tempered and commanded respect both from the humans as well as the Devas." },
    { num: 9, name: "Rishabha Avatar", desc: "As per a legend associated with this avatar, Lord Shiva appeared as a bull to kill the sons born to Lord Vishnu and the Patala Loka women. Lord Vishnu's sons caused destruction, and hence at Lord Brahma's behest, Lord Shiva appeared as Rishabha to save creation." },
    { num: 10, name: "Yatinath Avatar", desc: "The Yatinath avatar of Lord Shiva appeared to test a tribal couple, who were known for their hospitality. The tribal man named Aahuk lost his life while safeguarding his guest, Yatinath. Instead of mourning, his wife took pride in him for giving away his life for the sake of a guest. Pleased by the couple's devotion, Lord Shiva blessed them by saying that they would be born as Nala and Damayanti in their next birth." },
    { num: 11, name: "Hanuman", desc: "Lord Hanuman is said to be the eleventh avatar of Lord Shiva. He was born to Mata Anjani and Kesari." },
    { num: 12, name: "Krishna Darshan Avatar", desc: "This avatar of Lord Shiva appeared to emphasise the importance of Yagya and the importance of remaining detached. This legend is associated with a king named Nabhag, his father Shradhadeva and Sage Angiras." },
    { num: 13, name: "Bhikshuvarya Avatar", desc: "As the name suggests, Lord Shiva appeared as a beggar to save the child of a King named Sathyaratha. Since the child had lost his parents, he was brought up by a poor woman with Lord Shiva's blessings." },
    { num: 14, name: "Sureshwar Avatar", desc: "This avatar of Lord Shiva appeared in Indra Dev's disguise to test the devotion of a young boy named Upamanyu. The young boy passed the litmus test and succeeded in making Lord Shiva reveal himself." },
    { num: 15, name: "Keerat Avatar", desc: "This avatar of Lord Shiva appeared to test the bravery of Arjuna. When the Pandavas were in exile, Arjuna meditated to seek Lord Shiva's Pashupat. As he was meditating, a demon named Mooka transformed into a boar to kill Arjuna. Lord Shiva's Keerat Avatar and Arjuna both killed the boar with their respective arrows. Initially, Arjun couldn't recognise Lord Shiva, but eventually, he realised that only the Lord could be a better archer than him." },
    { num: 16, name: "Sunatnartak Avatar", desc: "The Sunatnartak avatar of Lord Shiva appeared in the Himalayan King's court and danced with his damru. In the end, he put forward a marriage proposal and expressed his desire to marry Parvati." },
    { num: 17, name: "Brahmachari Avatar", desc: "When Sati took birth as Parvati and performed intense penance to please Lord Shiva, the latter appeared before her as a Brahmachari. He hurled abuses at Shiva to test Parvati's devotion. And Parvati, who loved Lord Shiva more than anyone else, gave a fitting reply to the Brahmachari. Eventually, Lord Shiva revealed himself and blessed Parvati." },
    { num: 18, name: "Yaksheshwar Avatar", desc: "The Yaksheshwar avatar of Lord Shiva appeared to crush the pride/complacency of the Devas after they consumed Amrit, the divine nectar. He asked them to cut a blade of grass, and they failed to destroy it even with their combined powers. Subsequently, they apologised to Lord Shiva." },
    { num: 19, name: "Avadhut Avatar", desc: "Lord Shiva appeared as Avadhoot to crush the ego of Indra Dev." }
  ];

  return (
    <>
      <section className="hero">
        <h1>Shiva's Avatar</h1>
        <p>Explore the 19 divine manifestations of Lord Shiva and their sacred significance</p>
      </section>

      <section className="avatar-content">
        {avatars.map(avatar => (
          <div key={avatar.num} className="avatar-card">
            <h2>{avatar.num}. {avatar.name}</h2>
            <p>{avatar.desc}</p>
          </div>
        ))}
      </section>

      <section className="avatar-significance">
        <h2>Spiritual Significance of Avatars</h2>
        <p>Each of these 19 avatars of Lord Shiva represents different aspects of the divine and serves specific purposes in the spiritual evolution of devotees. Together, they provide a complete understanding of the Supreme Being's various manifestations.</p>
        
        <div className="significance-grid">
          <div className="significance-item">
            <h3>Diverse Manifestations</h3>
            <p>Shiva's various forms help devotees connect with different aspects of the divine according to their spiritual needs and understanding.</p>
          </div>
          <div className="significance-item">
            <h3>Universal Teachings</h3>
            <p>Each avatar imparts specific spiritual lessons and demonstrates different paths to enlightenment and self-realization.</p>
          </div>
          <div className="significance-item">
            <h3>Cosmic Balance</h3>
            <p>The avatars maintain the cosmic order and ensure the proper functioning of the universe through their divine activities.</p>
          </div>
          <div className="significance-item">
            <h3>Devotional Connection</h3>
            <p>Different forms allow devotees to develop personal relationships with the divine through their preferred manifestations.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Avatar;

