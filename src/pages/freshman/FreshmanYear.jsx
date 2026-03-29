import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RealityCheckModal from '../../components/interactive/RealityCheckModal';
import './FreshmanYear.css';

const FreshmanYear = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const realityCheckCards = [
    {
      icon: '📚',
      title: 'The Hardest Part',
      shortText: `Keeping up with the pacing of professors and how they present information, and understanding that 9 times out of ten you're not going to understand all of the material upon first listen. Realistically, you will take away 45-60 percent, higher percentages if you've been exposed to the subject matter before or had a really strong understanding of the previous lecture.`,
      fullText: `Keeping up with the pacing of professors and how they present information, and understanding that 9 times out of ten you're not going to understand all of the material upon first listen. Realistically, you will take away 45-60 percent, higher percentages if you've been exposed to the subject matter before or had a really strong understanding of the previous lecture. This is completely normal and expected—you're not falling behind, you're experiencing what everyone experiences.`
    },
    {
      icon: '📝',
      title: 'My Biggest Academic Shock',
      shortText: `My biggest academic shock was how exams make up the majority of your grade. If you were to only do well on exams and just exams alone, you'll most likely end up having a strong grade.`,
      fullText: `My biggest academic shock was how exams make up the majority of your grade. If you were to only do well on exams and just exams alone, you'll most likely end up having a strong grade. This changed everything about how I approached studying and time management.`
    },
    {
      icon: '👨‍🏫',
      title: `Professors Won't Know Your Name`,
      shortText: 'The professor will not know you by name until you meet with them during office hours.',
      fullText: `The professor will not know you by name until you meet with them during office hours. You have to make that effort. They're not going to come to you.`
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="year-page">
      {/* Back Navigation */}
      <div className="back-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} /> Back to All Years
        </Link>
      </div>

      {/* THE RUNDOWN - Hero Section */}
      <section className="rundown-hero" style={{ '--year-color': 'var(--blue-freshman)' }}>
        <div className="container">
          <h1 className="year-title">FRESHMAN YEAR</h1>
          <p className="year-tagline">After the Acceptance</p>
          <div className="rundown-grid">
            <div className="rundown-item">
              <span className="rundown-label">Mental State</span>
              <span className="rundown-value">Clouded • Excited • Curious</span>
            </div>
            <div className="rundown-item">
              <span className="rundown-label">What Kept Me Going</span>
              <span className="rundown-value">Not wanting to disappoint myself and my parents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Sidebar + Main Content */}
      <div className="content-wrapper">
        {/* Sticky Sidebar Nav */}
        <aside className="sidebar-nav">
          <h3 className="sidebar-title">On This Page</h3>
          <nav className="sidebar-links">
            <button onClick={() => scrollToSection('reality-check')} className="sidebar-link">The Reality Check</button>
            <button onClick={() => scrollToSection('friend-group')} className="sidebar-link">The Big Friend Group</button>
            <button onClick={() => scrollToSection('homesickness')} className="sidebar-link">Homesickness</button>
            <button onClick={() => scrollToSection('social')} className="sidebar-link">Social Wins & Regrets</button>
            <button onClick={() => scrollToSection('academic-survival')} className="sidebar-link">Academic Survival</button>
            <button onClick={() => scrollToSection('money')} className="sidebar-link">Money Management</button>
            <button onClick={() => scrollToSection('hard-part')} className="sidebar-link">The Hard Part</button>
            <button onClick={() => scrollToSection('wins')} className="sidebar-link">The Wins</button>
            <button onClick={() => scrollToSection('looking-back')} className="sidebar-link">Looking Back</button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">

          {/* THE REALITY CHECK */}
          <section id="reality-check" className="content-section bg-white">
            <h2 className="section-heading">THE REALITY CHECK</h2>
            
            <div className="three-col-grid">
              {realityCheckCards.map((card, index) => (
                <div 
                  key={index} 
                  className="info-card clickable-card"
                  onClick={() => openModal(card)}
                >
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p>{card.shortText}</p>
                  <button className="read-more-btn">Read More →</button>
                </div>
              ))}
            </div>
          </section>

          {/* THE BIG FRIEND GROUP */}
          <section id="friend-group" className="content-section bg-off-white">
            <h2 className="section-heading">THE BIG FRIEND GROUP - WHAT ACTUALLY HAPPENS</h2>
            
            <p>Certain canon events will occur in every freshman's first year, such as handing in an exam and genuinely having NO IDEA how you scored, walking into the wrong classroom, and getting kicked out of a study room you didn't reserve.</p>
            
            <p>However, the large friend group is no different—it's another canon event. You may meet a couple of people from your orientation group or at the freshmen mixers. You'll proceed to meet new friends who will bring their new friends to meet you. Slowly but surely, you'll have a group chat that is always active, alerts friends when they're in the dining hall so you can eat together, and then one day, when you least expect it, you'll begin to drift, and drama will occur that rips the group into cliques.</p>

            <div className="what-you-need">
              <h4>What You Need to Know:</h4>
              <p>You mustn't get involved with it and branch out and find new friends. Remember that some people are not meant to be in your life forever, but just seasons. Do not tell your deepest darkest secrets, or treat them as you would your best friend, because you just met them. Protect your peace and your privacy until you know who your real people are.</p>
            </div>

            <div className="pull-quote">
              <p>"Some people are not meant to be in your life forever, but just seasons."</p>
            </div>
          </section>

          {/* HOMESICKNESS */}
          <section id="homesickness" className="content-section bg-purple-tint">
            <div className="centered-content">
              <h2 className="section-heading">HOMESICKNESS AND HOW I COPED</h2>
              <p className="intimate-text">I felt homesick as soon as my parents left my dorm. I cried to cope and called my hometown friends because I didn't want to worry my parents. This feeling is so normal, even if it feels isolating in the moment. You're allowed to miss home. You're allowed to cry. You're allowed to call the people who make you feel safe.</p>
            </div>
          </section>

          {/* SOCIAL WINS AND REGRETS */}
          <section id="social" className="content-section bg-white">
            <h2 className="section-heading">SOCIAL WINS AND REGRETS</h2>
            
            <div className="two-col-grid">
              <div className="content-block">
                <h3 className="block-title">What I Regret</h3>
                <p>I regret devoting so much of my free time to an on-campus club and prioritizing that in some moments, as opposed to my classes. Balance is everything, and I learned that the hard way.</p>
              </div>

              <div className="content-block">
                <h3 className="block-title">What I'm Glad I Did</h3>
                <p>I'm glad that I joined affinity clubs on campus. I made beautiful friendships and strong connections with some faculty members. I felt an overwhelming sense of belonging. These spaces saved me when everything else felt chaotic.</p>
              </div>
            </div>
          </section>

          {/* ACADEMIC SURVIVAL TACTICS */}
          <section id="academic-survival" className="content-section bg-off-white">
            <h2 className="section-heading">ACADEMIC SURVIVAL TACTICS</h2>

            <div className="survival-card">
              <h3 className="card-title">When You Feel Completely Lost in Class</h3>
              <p>I simply didn't understand the verbiage of what my professor was presenting, so I raised my hand and repeated the concept to the best of my ability and asked him to clarify. Don't sit in silence. Don't pretend you understand. Raise your hand immediately and ask for clarification. Most of the time, other students are just as confused and will be grateful you spoke up.</p>
              
              <div className="pull-quote">
                <p>"You pay the professor, NOT the other way around."</p>
              </div>
            </div>

            {/* ALBERT WARNING BOX */}
            <div className="callout-box warning-box">
              <div className="callout-icon">⚠️</div>
              <div className="callout-content">
                <h4>ALBERT'S REGISTRATION SYSTEM - CRITICAL INFO</h4>
                <p>When registering for classes, always remember to add exam hours, or you'll be unable to add your remaining classes. Schedule a time with your advisor as soon as the registration period opens so they can remove your advisor hold. Do not trust your advisor to tell you which classes to take for the following semester; always cross-reference with your DPR (degree progress report) and look for YOURSELF.</p>
                <p className="callout-emphasis">Your advisor isn't always right. Verify everything yourself. This is YOUR education.</p>
              </div>
            </div>

            <div className="survival-card">
              <h3 className="card-title">TIME MANAGEMENT - WHERE I FAILED</h3>
              <p>I struggled heavily because I underestimated how much time I had to complete my homework. For instance, if I were given a week for a problem set, I would start it 2-3 days before it was due. This prompted me to produce hasty work as opposed to sitting with the material and struggling through the problems, and gaining a stronger understanding of the content presented.</p>
              <p className="fix-text"><strong>The Fix:</strong> Start assignments the DAY you get them. Even if it's just reading through the prompt or doing one problem. Future you will thank present you.</p>
            </div>
          </section>

          {/* MONEY MANAGEMENT */}
          <section id="money" className="content-section bg-blue-tint">
            <h2 className="section-heading">MONEY MANAGEMENT - MISTAKES AND LESSONS</h2>
            
            <p>If you are eligible for work study, get an on-campus job during your sophomore year. The majority of the time, they are very low-stress, and employers will work alongside your school schedule. The only reason why I emphasize searching for a job in Sophomore year is that I would advise all students to allow their first year to be dedicated to acclimating to a new environment and a completely new schedule.</p>
            
            <p>As far as money, build your credit with a credit card, and do not spend money you DO NOT HAVE. My general rule of thumb: if you can't buy it three times, you cannot afford it.</p>

            <div className="pull-quote">
              <p>"If you can't buy it three times, you cannot afford it."</p>
            </div>
          </section>

          {/* THE HARD PART */}
          <section id="hard-part" className="content-section bg-dark-purple">
            <div className="centered-content">
              <h2 className="section-heading light-text">THE HARD PART</h2>
              <p className="light-text">My mental state freshman year in three words: <strong>Clouded, excited, and curious.</strong> I was overwhelmed by the newness of everything, excited by the possibilities, but clouded by confusion about how to actually navigate it all.</p>
              <p className="light-text">What kept me going when it got hard? Not wanting to disappoint myself and my parents. That pressure was real, and sometimes it was the only thing that got me through.</p>
            </div>
          </section>

          {/* THE WINS */}
          <section id="wins" className="content-section bg-white">
            <h2 className="section-heading">THE WINS - WHAT WORKED</h2>
            
            <div className="wins-content">
              <p><strong>My Biggest Win:</strong> Just getting through it. Surviving freshman year is the win. If you made it to the end, you did what you needed to do.</p>
              
              <ul className="wins-list">
                <li>I found my people through affinity clubs</li>
                <li>I learned to speak up when I was confused in class</li>
                <li>I built connections with faculty members who actually cared</li>
                <li>I started learning how to advocate for myself, even if I wasn't great at it yet</li>
              </ul>
            </div>
          </section>

          {/* LOOKING BACK */}
          <section id="looking-back" className="content-section bg-gradient">
            <h2 className="section-heading light-text">LOOKING BACK - WHAT I WISH I'D KNOWN</h2>
            
            <ul className="reflection-list">
              <li>45-60% retention of the lecture upon first listen is completely normal</li>
              <li>The big friend group will fracture—it's not personal, it's a canon event</li>
              <li>Start assignments the day you get them, not 2-3 days before they're due</li>
              <li>Your advisor isn't always right—verify everything with your DPR</li>
              <li>Homesickness is normal. Call home. Cry if you need to. You're allowed to miss the people who love you.</li>
              <li>Join affinity clubs—they are a great way to feel community</li>
            </ul>

            <div className="final-message">
              <h3 className="message-title">To Freshman Me:</h3>
              <p className="message-text">"You're going to feel lost. You're going to cry. You're going to question if you belong here. But you DO belong. Getting through this year is the win. The confusion you feel right now is not failure—it's adjustment. Trust the process, even when it doesn't make sense yet."</p>
            </div>
          </section>

        </main>
      </div>

      {/* Next/Previous Navigation */}
      <div className="page-navigation">
        <Link to="/" className="nav-button prev-button">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <Link to="/sophomore" className="nav-button next-button">
          <span>Next: Sophomore Year</span>
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Reality Check Modal */}
      <RealityCheckModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        card={selectedCard}
      />
    </div>
  );
};

export default FreshmanYear;