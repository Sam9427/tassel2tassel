import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import YearCard from '../components/cards/YearCard';
import TruthModal from '../components/interactive/TruthModal';
import './Home.css';

const Home = () => {
  const [selectedTruth, setSelectedTruth] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truths = [
    {
      number: 1,
      title: "It's OK to Have Feelings of Imposter Syndrome and Moments of Uncertainty",
      shortText: "It's okay to feel uncertain, but don't let it hold you back from what your heart wants or your academic and social progress.",
      fullText: "It's OK to have feelings of imposter syndrome and moments of uncertainty. But do not wallow in those feelings to the point where you are going against what your heart wants, and it holds you back from your own academic and social progress."
    },
    {
      number: 2,
      title: "I Believed That You Have All the Time in the World",
      shortText: "Think of college as YOU being the professor—class is just the facilitator recycling lesson plans and exams.",
      fullText: "I believed that you have all the time in the world. Especially when living on campus, I misjudged how much more effort I needed to devote to not only my assignments, but my understanding of the content outside of class. I thought that I could hang out, attend club events and outings as much as I wanted, and still have time to complete my assignments thoughtfully. Think of college as you being the professor, and the professor is just the facilitator who recycles lesson plans and exams."
    },
    {
      number: 3,
      title: "Utilize All of the Campus Resources",
      shortText: "Utilize every campus resource. If you have a question, ASK it and KEEP asking until it makes sense.",
      fullText: "Utilize all of the campus resources: office hours, tutoring center, and upperclassmen peer study groups to understand homework and prepare for exams. If you have a question, ASK it and KEEP asking it until the work makes sense (you pay the professor, NOT the other way around). When you have free time, do what makes you happy and takes your mind off of school (go to a party, watch a movie, journal, play games)."
    }
  ];

  const openModal = (truth) => {
    setSelectedTruth(truth);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTruth(null);
  };

  const years = [
    {
      name: 'Freshman Year',
      tagline: 'After the Acceptance',
      keywords: ['Adjustment', 'Struggle', 'Curiosity', 'Freedom', 'Excitement'],
      color: 'var(--blue-freshman)',
      path: '/freshman'
    },
    {
      name: 'Sophomore Year',
      tagline: 'No Longer the Newbie',
      keywords: ['Challenge', 'Learning', 'Redemption', 'Strength', 'Curiosity'],
      color: 'var(--coral-sophomore)',
      path: '/sophomore'
    },
    {
      name: 'Junior Year',
      tagline: 'Major Decisions...Literally',
      keywords: ['Conflicting', 'Change', 'Strength', 'Courage', 'Persistence'],
      color: 'var(--green-junior)',
      path: '/junior'
    },
    {
      name: 'Senior Year',
      tagline: 'The Peak or the Valley?',
      keywords: ['Fatigue', 'Determination', 'Fighting', 'Advocacy', 'Relief'],
      color: 'var(--gold-senior)',
      path: '/senior'
    },
    {
      name: 'Outta Here Year',
      tagline: 'The Extended Cut',
      keywords: ['Excitement', 'Fatigue', 'Strength', 'Curiosity', 'Adjustment'],
      color: 'var(--teal-fifth)',
      path: '/fifth-year'
    },
    {
      name: 'IDM Voices',
      tagline: 'Community Perspectives',
      keywords: ['Community', 'Shared Experience', 'Different Perspectives'],
      color: 'var(--purple-primary)',
      path: '/idm-voices'
    }
  ];

  const scrollToMission = () => {
    document.getElementById('mission').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">TASSEL2TASSEL</h1>
          <div className="hero-accent-line"></div>
          <p className="hero-subtitle">A Violet's Guide</p>
          <p className="hero-tagline">Your roadmap to surviving (and thriving at) NYU</p>
          
          <button className="scroll-indicator" onClick={scrollToMission} aria-label="Scroll down">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="mission-section section">
        <div className="container">
          <h2 className="section-label">WHY THIS EXISTS</h2>
          <div className="mission-content">
            <div className="mission-column">
              <p>
                This guide was created to connect with NYU students—from incoming freshmen to graduating seniors—on tips, tricks, and hard-won wisdom from my time here. I made this because while I had beautiful moments at NYU—NSBE, serving as president of Steminist (a club that prepares undergrad women for the workforce through social bonding, resume workshops, industry panels, study sessions, and being a safe space for women in STEM), connecting with incredible professors and peers—I also felt disregarded by the very faculty meant to support me when I needed them most.
              </p>
            </div>
            <div className="mission-column">
              <p>
                This guide goes beyond basic college prep. It confronts the emotional turmoil and unspoken realities that too many students face in silence, realities that somehow feel taboo to discuss. This is for anyone who's felt ostracized, unmotivated, or lost—a reminder that you are more powerful than you feel in this moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Big Truths */}
      <section className="truths-section section">
        <div className="container">
          <h2 className="section-title text-center">THE 3 BIG TRUTHS</h2>
          
          <div className="truths-grid">
            {truths.map((truth) => (
              <div key={truth.number} className="truth-card">
                <div className="truth-number">{truth.number}</div>
                <h3 className="truth-title">
                  {truth.number === 1 && "Imposter Syndrome is Real"}
                  {truth.number === 2 && "You DON'T Have All the Time"}
                  {truth.number === 3 && "You Pay THEM"}
                </h3>
                <p className="truth-text">{truth.shortText}</p>
                <button 
                  className="explore-more"
                  onClick={() => openModal(truth)}
                >
                  Explore More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Year Navigation */}
      <section className="years-section section">
        <div className="container">
          <h2 className="section-title text-center">EXPLORE THE JOURNEY</h2>
          
          <div className="years-grid">
            {years.map((year) => (
              <YearCard key={year.path} {...year} />
            ))}
          </div>
        </div>
      </section>

      {/* Truth Modal */}
      <TruthModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        truth={selectedTruth}
      />
    </div>
  );
};

export default Home;