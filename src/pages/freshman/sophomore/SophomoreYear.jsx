import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './SophomoreYear.css';

const SophomoreYear = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const realityCheckCards = [
    {
      icon: '👥',
      title: 'How My Social Circle Changed',
      shortText:
        "In my sophomore year, I lessened my friend group by half. I realized the power of quality over quantity and focused on throwing myself into my courses.",
    },
    {
      icon: '📱',
      title: 'How I Handled FOMO',
      shortText:
        "I handled FOMO so much better because I understood my priorities.",
    },
    {
      icon: '💔',
      title: 'The Friend Loss That Changed Me',
      shortText:
        "Yes, I lost a really close friend who stuck by me after the big friend group separation occurred.",
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="year-page">

      {/* Back Navigation */}
      <div className="back-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to All Years
        </Link>
      </div>

      {/* HERO */}
      <section className="rundown-hero" style={{ '--year-color': 'coral' }}>
        <div className="container">
          <h1 className="year-title">SOPHOMORE YEAR</h1>
          <p className="year-tagline">No Longer the Newbie</p>
        </div>
      </section>

      {/* MAIN */}
      <main className="main-content">

        <section id="reality-check">
          <h2>THE REALITY CHECK</h2>

          <div className="three-col-grid">
            {realityCheckCards.map((card, i) => (
              <div key={i} className="info-card">
                <div>{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.shortText}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="academic-reality">
          <h2>ACADEMIC REALITY</h2>
          <p>Classes get harder in different ways.</p>
        </section>

        <section id="major-question">
          <h2>THE MAJOR QUESTION</h2>
          <p>I considered changing my major but hesitated.</p>
        </section>

        <section id="study-habits">
          <h2>STUDY HABITS</h2>
          <p>I learned how I study best.</p>
        </section>

        <section id="identity-shift">
          <h2>IDENTITY SHIFT</h2>
          <p>I became more focused and self-aware.</p>
        </section>

        <section id="being-real">
          <h2>BEING REAL</h2>
          <p>Being honest helped me grow.</p>
        </section>

        <section id="wins">
          <h2>THE WINS</h2>
          <p>I started building my academic network.</p>
        </section>

        <section id="looking-back">
          <h2>LOOKING BACK</h2>
          <p>I learned a lot about priorities and growth.</p>
        </section>

      </main>

      {/* NAV */}
      <div className="page-navigation">
        <Link to="/freshman">Previous</Link>
        <Link to="/junior">Next</Link>
      </div>

    </div>
  );
};

export default SophomoreYear;