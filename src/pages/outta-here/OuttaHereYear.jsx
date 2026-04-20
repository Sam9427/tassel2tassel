import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import RealityCheckModal from '../../components/interactive/RealityCheckModal';
import outtaHerePhoto from '../../assets/images/IMG_2197.jpg';
import './OuttaHereYear.css';

const OuttaHereYear = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const realityCheckCards = [
    {
      icon: '😤',
      title: 'How I Felt About Not Graduating "On Time"',
      shortText: "Originally, I was terrified to tell my parents. They didn't make me feel great about my decision, but I realized I had to be the one to feel great about finally doing something for ME.",
      fullText: "Originally, I was terrified to tell my parents, and I didn't know how to tell them but eventually I did, and they did not make me feel great about my decision, but I realized I had to be the one to feel great about finally, over the course of 4 years doing something for ME! I felt insecure because almost all of my friends and peers who I started off my college career would be moving on, while I still had to stay. I would be lying if I didn't feel insecure and angry with myself for not advocating for myself sooner. It hurt. Watching everyone else graduate while I stayed behind felt like being left out of something I'd worked just as hard for. Social media made it worse, seeing grad caps and gowns and 'we did it!' posts while I was registering for another semester. But also: I knew I was doing the right thing. I knew that graduating in CS just to be 'on time' would have been a betrayal of everything I'd fought for. So I held onto that."
    },
    {
      icon: '👥',
      title: 'The Stigma and Judgment',
      shortText: "I faced judgment from my parents. They felt like I wasn't committed or was distracted. This is the part no one talks about: the quiet disappointment.",
      fullText: "I faced judgment from my parents, they felt as though I wasn't committed or distracted. This is the part that no one talks about: the quiet disappointment. The questions that feel like accusations. 'Why is it taking you so long?' 'Didn't you say you'd be done by now?' 'What have you been doing this whole time?' As if staying an extra year is somehow proof of failure instead of proof of fighting for what you actually want. I had to learn to hold onto my own truth even when the people I loved most couldn't see it yet."
    },
    {
      icon: '🏋️',
      title: "The Current Challenge - What I'm Living Through",
      shortText: "Balancing 22 credits while commuting for the first time in 4 years. Let me be clear: this is HARD.",
      fullText: "Balancing 22 credits while commuting to and from school for the first time in 4 years. Let me be clear: this is HARD. 22 credits is no joke. Commuting after living on campus for 4 years is an adjustment I didn't fully prepare for. I'm exhausted. I'm stretched thin. Some days I wonder if I'm actually going to make it. But I am. I'm right there at the end. My suffering will be over soon."
    }
  ];

  const openModal = (card) => { setSelectedCard(card); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setSelectedCard(null); };
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setSidebarOpen(false);
  };

  return (
    <div className="year-page">
      <div className="back-nav">
        <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to All Years</Link>
      </div>

      <section className="rundown-hero" style={{ '--year-color': 'var(--teal-outta-here)' }}>
        <div className="container">
          <h1 className="year-title">OUTTA HERE YEAR</h1>
          <p className="year-tagline">The Extended Cut</p>
          <div className="rundown-grid">
            <div className="rundown-item">
              <span className="rundown-label">Why I'm Here</span>
              <span className="rundown-value">Major switch to IDM + needed IDM electives to finish strong and with purpose</span>
            </div>
            <div className="rundown-item">
              <span className="rundown-label">What Keeps Me Going</span>
              <span className="rundown-value">I'm RIGHT AT THE FINISH LINE</span>
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrapper">
        <aside className="sidebar-nav">
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span className="sidebar-title">On This Page</span>
            {sidebarOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <nav className={`sidebar-links ${sidebarOpen ? 'sidebar-links--open' : ''}`}>
            <button onClick={() => scrollToSection('reality-check')} className="sidebar-link">The Reality Check</button>
            <button onClick={() => scrollToSection('why-5th-year')} className="sidebar-link">Why a 5th Year</button>
            <button onClick={() => scrollToSection('the-gift')} className="sidebar-link">The Gift</button>
            <button onClick={() => scrollToSection('the-reframe')} className="sidebar-link">The Reframe</button>
            <button onClick={() => scrollToSection('looking-back')} className="sidebar-link">Looking Back</button>
          </nav>
        </aside>

        <main className="main-content">
          <section id="reality-check" className="content-section bg-white">
            <h2 className="section-heading">THE REALITY CHECK</h2>
            <div className="three-col-grid">
              {realityCheckCards.map((card, index) => (
                <div key={index} className="info-card clickable-card" onClick={() => openModal(card)}>
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p>{card.shortText}</p>
                  <button className="read-more-btn">Read More →</button>
                </div>
              ))}
            </div>
            <div className="signature-pull-quote">
              <p>"Staying an extra year isn't proof of failure. It's proof of fighting for what you actually want."</p>
              <span className="spq-source">Outta Here Year</span>
            </div>
          </section>

          <section id="why-5th-year" className="content-section bg-off-white">
            <h2 className="section-heading">WHY I TOOK A 5TH YEAR</h2>
            <div className="survival-card">
              <p>Major switch to IDM and I needed a bunch of IDM electives to finish my time at NYU strong and with purpose. This wasn't about being behind. This was about doing it right. About finishing in a field I actually loved instead of limping across the finish line in a major that made me miserable.</p>
            </div>
            <div className="callout-box outta-here-highlight-box">
              <div className="callout-icon">🎓</div>
              <div className="callout-content">
                <h4>LET THAT SINK IN</h4>
                <p>I chose to stay an extra year so I could graduate in something I actually care about. That's not failure. That's the most intentional decision I made in my entire college career.</p>
              </div>
            </div>
          </section>

          <section id="the-gift" className="content-section bg-blue-tint">
            <h2 className="section-heading">THE GIFT - WHAT THIS YEAR GAVE ME</h2>
            <p>Stress but clarity in my sense of belonging and knowing that I earned my stripes to be where I am. This year proved to me how resilient I am and how I can really do anything when I put my mind to it.</p>
            <div className="two-col-grid">
              <div className="content-block">
                <h3 className="block-title">How My Perspective Changed</h3>
                <p>I became more selfish when it came to my success. I pulled back from my leadership involvement in clubs to ensure that I was able to pour into my own cup. This was hard because I love being involved. I love leadership. I love helping other people. But I had to learn that you can't pour from an empty cup, and my cup had been empty for too long.</p>
              </div>
              <div className="content-block">
                <h3 className="block-title">What I Learned</h3>
                <p>Time is what you make of it. Your time for greatness is coming. It may not be when you want it, but it doesn't mean you won't get it.</p>
              </div>
            </div>
            <div className="year-photo-block">
              <img src={outtaHerePhoto} alt="Samantha at the NSBE e-board photoshoot as Senator" className="year-photo year-photo--portrait" />
              <p className="year-photo-caption">NSBE e-board senator. Leading while finishing strong.</p>
            </div>
            <div className="signature-pull-quote">
              <p>"Your time for greatness is coming. It may not be when you want it, but it doesn't mean you won't get it."</p>
              <span className="spq-source">Outta Here Year</span>
            </div>
          </section>

          <section id="the-reframe" className="content-section bg-dark-purple">
            <div className="centered-content">
              <h2 className="section-heading light-text">THE REFRAME - HOW I MADE IT POSITIVE</h2>
              <p className="light-text">Getting through a 22-credit semester. I DID THAT. Most people would have broken under that weight. I didn't.</p>
              <p className="light-text">I'm in classes where I feel challenged and in a space where I don't feel isolated. This year isn't a punishment. It's not a consequence of failure. It's a choice I made to prioritize my actual education over other people's timelines. And that's powerful.</p>
            </div>
            <div className="signature-pull-quote">
              <p>"This year isn't a punishment. It's a choice I made to prioritize my actual education over other people's timelines."</p>
              <span className="spq-source">Outta Here Year</span>
            </div>
          </section>

          <section id="looking-back" className="content-section bg-gradient">
            <h2 className="section-heading light-text">LOOKING BACK - FINAL REFLECTIONS</h2>
            <ul className="reflection-list">
              <li>Your timeline is yours. Graduating "late" doesn't make you less capable</li>
              <li>You can't pour from an empty cup. Protect your energy</li>
              <li>Selfish isn't always a bad word when it comes to your own success</li>
              <li>The "detour" is sometimes the right path. You just won't know it until you're on the other side</li>
              <li>Fighting for what you want is always worth it, no matter how long it takes</li>
            </ul>
            <div className="final-message">
              <h3 className="message-title">To Freshman Me:</h3>
              <p className="message-text">"STOP COMPARING YOUR JOURNEY TO OTHERS. It is ok to struggle and you are not alone in that feeling even if it feels like you are. You are smart and talented and there is a reason why NYU picked you! Trust your intuition and pivoting does not always mean failure it means growth and redirection. And do whatever it is you need to do to get the grade! Do not let TAs, professors, advisors, and the like bully you into silence or brush you off like you aren't a paying student."</p>
            </div>
            <div className="final-message outta-here-final">
              <h3 className="message-title">To Anyone Taking a 5th Year (or 6th, or 7th):</h3>
              <p className="message-text">"Your timeline is yours. Graduating 'late' doesn't make you less capable. It makes you someone who refused to settle. Fighting for what you want is always worth it. Sometimes the 'detour' is actually the right path, and you won't know that until you're on the other side. You're not behind. You're exactly where you need to be. And when you finally walk across that stage, you'll know you earned every single step."</p>
            </div>
            <div className="signature-pull-quote">
              <p>"You're not behind. You're exactly where you need to be."</p>
              <span className="spq-source">Outta Here Year</span>
            </div>
          </section>
        </main>
      </div>

      <div className="page-navigation">
        <Link to="/senior" className="nav-button prev-button"><ArrowLeft size={20} /><span>Previous: Senior Year</span></Link>
      </div>

      <RealityCheckModal isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
    </div>
  );
};

export default OuttaHereYear;