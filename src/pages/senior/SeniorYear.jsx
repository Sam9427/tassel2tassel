import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RealityCheckModal from '../../components/interactive/RealityCheckModal';
import './SeniorYear.css';

const SeniorYear = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const realityCheckCards = [
    {
      icon: '🎯',
      title: 'How My Priorities Shifted',
      shortText: "My priorities were solely doing well in my classes. I didn't want to give the department ANY reason to deny me, so school became everything.",
      fullText: "My priorities were solely doing well in my classes. Since I was double-majoring at a given point, and was invested in dropping CS to be fully IDM, I didn't want to give the department ANY reason to deny me especially because I received pushback from the department and was quickly dismissed. So my priorities strictly became school. I put internships on the back burner and focused on what I needed to graduate. This was the first time in my college career where I had complete clarity about what mattered. Not internships. Not networking events. Not what my parents wanted. Just: do well enough in these classes so that I can pursue what I want."
    },
    {
      icon: '🔥',
      title: 'What I Stopped Caring About',
      shortText: "I stopped caring about making others comfortable. My parents, my advisors, anyone. That shift was everything.",
      fullText: "I stopped caring about making others comfortable, whether that be my parents or advisors. I stopped caring to censor how I felt about NYU and their facilities as a whole. If I liked how something was done, I would express it, but if I didn't like how I was treated and I thought I deserved better, I expressed it. I typically love to be nice and gloat about other people, but because of how I was treated by both of my advisors and faculty, I realized I DID NOT CARE TO PRAISE THEM FOR WHAT THEY SHOULD HAVE BEEN DOING. I stopped caring about not graduating on time and the perception of others. I embraced that my journey was unique and didn't make me any less of a student because of it. The moment I stopped caring about making other people comfortable was the moment I became free. I stopped shrinking myself. I stopped apologizing for taking up space. I stopped pretending everything was fine when it wasn't."
    },
    {
      icon: '⚖️',
      title: 'The Emotional Toll of the Fight',
      shortText: "Every email I sent, I held my breath. I was fighting for my education while trying to maintain my grades so they'd have no reason to deny me.",
      fullText: "Relief that I could pursue what I wanted. Partially, I needed to declare double major and I kept feeling anxiety because I kept thinking what if I get denied. It was a dreadful and excruciating process. Every email I sent, I held my breath. Every response (or lack of response) felt like a punch to the gut. I was fighting for my education while simultaneously trying to maintain my grades so they wouldn't have any reason to deny me. The mental load was crushing. But I kept fighting because giving up wasn't an option. Education means everything to me. Getting a degree is NOT an option. It's a necessity."
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

  // Explicit styles to keep blueprint boxes readable against the dark purple background
  const blueprintBoxStyle = {
    backgroundColor: '#ffffff',
    color: '#1a1a2e',
  };

  const blueprintHeadingStyle = {
    color: '#1a1a2e',
    marginBottom: '12px',
  };

  const blueprintListStyle = {
    color: '#1a1a2e',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const blueprintItemStyle = {
    color: '#1a1a2e',
    marginBottom: '8px',
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
      <section className="rundown-hero" style={{ '--year-color': 'var(--gold-senior)' }}>
        <div className="container">
          <h1 className="year-title">SENIOR YEAR</h1>
          <p className="year-tagline">The Peak or the Valley?</p>
          <div className="rundown-grid">
            <div className="rundown-item">
              <span className="rundown-label">Mental State</span>
              <span className="rundown-value">Exhausted • Defiant • Persistent</span>
            </div>
            <div className="rundown-item">
              <span className="rundown-label">Dominant Emotion</span>
              <span className="rundown-value">Relief (that I could pursue what I wanted) + Anxiety (what if I get denied?)</span>
            </div>
            <div className="rundown-item">
              <span className="rundown-label">What Kept Me Going</span>
              <span className="rundown-value">Thinking about all the time and effort I'd invested to get here. Education means everything to me. Getting a degree is NOT an option, it's a necessity.</span>
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
            <button onClick={() => scrollToSection('major-battle')} className="sidebar-link">The Fight for My Education</button>
            <button onClick={() => scrollToSection('how-i-won')} className="sidebar-link">How I Won</button>
            <button onClick={() => scrollToSection('real-talk')} className="sidebar-link">Real Talk</button>
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

            <div className="pull-quote">
              <p>"I stopped caring about making others comfortable. That's when I became free."</p>
            </div>
          </section>

          {/* THE FIGHT FOR MY EDUCATION - Timeline */}
          <section id="major-battle" className="content-section bg-off-white">
            <h2 className="section-heading">THE FIGHT FOR MY EDUCATION</h2>

            <div className="timeline">

              <div className="timeline-item">
                <div className="timeline-marker completed">✓</div>
                <div className="timeline-content">
                  <h3 className="timeline-date">Spring 2024</h3>
                  <h4 className="timeline-title">I Completed My IDM Minor</h4>
                  <p>After long difficult months of going back and forth on whether or not I wanted to change my major I realized that I wanted to. By this time I had completed my minor, fell in love with IDM and was certain this was the switch that would make the technical and creative side to me thrive.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker neutral">→</div>
                <div className="timeline-content">
                  <h3 className="timeline-date">December 18, 2024</h3>
                  <h4 className="timeline-title">The Request</h4>
                  <p>I proceeded to meet with my CS advisor and ask him if I would be able to make the switch. After he cross-referenced my transcripts and history, he said that he didn't see why I couldn't. He appointed me to emails of the directors of IDM and told me the process of pursuing a major switch. I emailed and reached out in a timely manner.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker rejected">✗</div>
                <div className="timeline-content">
                  <h3 className="timeline-date">January 2, 2025</h3>
                  <h4 className="timeline-title">FIRST REJECTION</h4>
                  <p>I was rejected. At first I was told that I couldn't switch because I accumulated a certain number of credits, which meant I wasn't eligible for the switch.</p>

                  <div className="callout-box senior-fight-box">
                    <div className="callout-icon">⚡</div>
                    <div className="callout-content">
                      <h4>MY RESPONSE: I FOUGHT BACK</h4>
                      <p>I argued that on the NYU TANDON AND NYU OFFICIAL WEBSITE, it states as long as the student is in good academic standing and has proved that they can handle the course load, they are allowed to switch majors into ANYONE THAT THEY WANT. I brought up screenshots, CC'd my CS advisor, and was brushed off and dismissed.</p>
                    </div>
                  </div>

                  <div className="pull-quote">
                    <p>"I had to make sure they knew not to play with my time and money."</p>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker neutral">→</div>
                <div className="timeline-content">
                  <h3 className="timeline-date">The Escalation</h3>
                  <h4 className="timeline-title">Going Up the Chain</h4>
                  <p>So I proceeded to email the head of academics, I asked him to vouch for me. When he said that there was nothing that could be done and ultimately it was IDM's choice to decide if they wanted to let me in or not I decided to go back to my CS advisor and come up with a plan. I declared double major as it was my only option and I submitted my appropriate papers and emailed one of the IDM directors, DETERMINED to get into the department.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker completed">✓</div>
                <div className="timeline-content">
                  <h3 className="timeline-date">March 3, 2025</h3>
                  <h4 className="timeline-title">ACCEPTED</h4>
                  <p>I ended up getting in and my papers were processed by the school and approved for Fall 2025. Relief. Validation. Proof that persistence works.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker completed">✓</div>
                <div className="timeline-content">
                  <h3 className="timeline-date">November 12, 2025</h3>
                  <h4 className="timeline-title">I DROPPED CS</h4>
                  <p>Then I dropped CS and made IDM my primary major. I went through loopholes to defend myself and get what I wanted which is an education that I will have paid for!</p>
                </div>
              </div>

            </div>
          </section>

          {/* HOW I WON - blueprint boxes pinned to white bg + dark text */}
          <section id="how-i-won" className="content-section bg-dark-purple">
            <div className="centered-content">
              <h2 className="section-heading light-text">HOW I WON - THE BLUEPRINT</h2>
              <p className="light-text">For anyone who needs to fight a system that wasn't built with you in mind:</p>
            </div>

            <div className="two-col-grid">
              <div className="callout-box tactics-box" style={blueprintBoxStyle}>
                <div className="callout-icon">💪</div>
                <div className="callout-content">
                  <h4 style={blueprintHeadingStyle}>WHAT WORKED</h4>
                  <ul style={blueprintListStyle}>
                    <li style={blueprintItemStyle}>Persistence. Didn't take no for an answer</li>
                    <li style={blueprintItemStyle}>Documentation. Screenshots of official NYU policies, saved every email</li>
                    <li style={blueprintItemStyle}>Escalation. CC'ing people, going up the chain when ignored</li>
                    <li style={blueprintItemStyle}>Creative Problem-Solving. Found the double major loophole</li>
                    <li style={blueprintItemStyle}>Refusing to Be Silenced. Kept pushing even when dismissed</li>
                  </ul>
                </div>
              </div>

              <div className="callout-box tactics-box" style={blueprintBoxStyle}>
                <div className="callout-icon">📋</div>
                <div className="callout-content">
                  <h4 style={blueprintHeadingStyle}>HOW TO DO THIS YOURSELF</h4>
                  <ul style={blueprintListStyle}>
                    <li style={blueprintItemStyle}>Know the official policies. Read the website, save screenshots</li>
                    <li style={blueprintItemStyle}>Document EVERYTHING. Every email, every rejection</li>
                    <li style={blueprintItemStyle}>Don't accept the first "no." Escalate to someone higher</li>
                    <li style={blueprintItemStyle}>CC multiple people so you can't be ignored</li>
                    <li style={blueprintItemStyle}>Be respectful but firm. You're not asking for a favor, you're asking for your rights</li>
                    <li style={blueprintItemStyle}>Find loopholes if the front door is closed</li>
                    <li style={blueprintItemStyle}>Never stop fighting for what you deserve</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* REAL TALK */}
          <section id="real-talk" className="content-section bg-purple-tint">
            <h2 className="section-heading">REAL TALK - THE HARD QUESTIONS</h2>

            <div className="survival-card">
              <h3 className="block-title">Did I Feel Ready to Graduate?</h3>
              <p>Yes, but I couldn't because I had a couple of classes I still needed to cover when my switch to IDM was made official.</p>
            </div>

            <div className="survival-card">
              <h3 className="block-title">What Was I Most Afraid Of?</h3>
              <p>I was afraid of not passing a class and prolonging my time at NYU.</p>
            </div>

            <div className="survival-card">
              <h3 className="block-title">What Surprised Me About Senior Year?</h3>
              <p>How quickly it flies by. How much planning you need to do during the year if you have certain post-grad plans. Do you want to pursue a master's or get a job? Do an internship, then grad school? There are so many moving parts that you have to think about. No one tells you that senior year isn't just about finishing. It's about planning what comes next, and that's overwhelming when you're still just trying to survive.</p>
            </div>
          </section>

          {/* LOOKING BACK */}
          <section id="looking-back" className="content-section bg-gradient">
            <h2 className="section-heading light-text">LOOKING BACK - WHAT I LEARNED</h2>

            <ul className="reflection-list">
              <li>Clarity about what matters is a gift. Even when it comes from being forced to fight for it</li>
              <li>Stopping caring about what others think is not selfish. It's survival</li>
              <li>The system will not advocate for you. You have to do it yourself, loudly</li>
              <li>Document everything. Screenshot everything. CC everyone</li>
              <li>Persistence is not just a personality trait. It's a strategy</li>
              <li>Senior year isn't just about finishing. It's about planning what comes next</li>
            </ul>

            <div className="final-message">
              <h3 className="message-title">To Freshman Me:</h3>
              <p className="message-text">"STOP COMPARING YOUR JOURNEY TO OTHERS. It is ok to struggle and you are not alone in that feeling even if it feels like you are. You are smart and talented and there is a reason why NYU picked you! Trust your intuition and pivoting does not always mean failure it means growth and redirection. And do whatever it is you need to do to get the grade! Do not let TA's or professors advisors and the like bully you into silence or brush you off like you aren't a paying student."</p>
            </div>

            <div className="pull-quote pull-quote-dark">
              <p>"Pivoting does not always mean failure. It means growth and redirection."</p>
            </div>

            <div className="final-message">
              <h3 className="message-title">To Anyone Fighting the System Right Now:</h3>
              <p className="message-text">You deserve the education you're paying for. You deserve to pursue what excites you. You deserve advisors who actually advise. If they're not giving it to you, take it. Be loud. Be persistent. Be annoying if you have to. Document everything. Know the policies better than they do. Go above their heads. Find the loopholes. You are not asking for special treatment. You are asking for what is already yours.</p>
            </div>
          </section>

        </main>
      </div>

      {/* Next/Previous Navigation */}
      <div className="page-navigation">
        <Link to="/junior" className="nav-button prev-button">
          <ArrowLeft size={20} />
          <span>Previous: Junior Year</span>
        </Link>
        <Link to="/outta-here" className="nav-button next-button">
          <span>Next: Outta Here Year</span>
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

export default SeniorYear;
