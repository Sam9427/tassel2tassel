import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RealityCheckModal from '../../components/interactive/RealityCheckModal';
import './JuniorYear.css';

const JuniorYear = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const realityCheckCards = [
    {
      icon: '📚',
      title: 'What Made Junior Year Hard',
      shortText: "I realized I was behind the 8-ball when it came to what classes I should have been taking at that time.",
      fullText: "I realized I was behind the 8-ball when it came to what classes I should have been taking at that time. I continued to struggle with exams and developed pretty bad test anxiety which always worked against me. I experienced major burnout from NYU. I wanted to graduate and be finished with school, but I was still clawing my way through CS. Every semester felt like dragging myself through mud, and I was exhausted. The finish line felt impossibly far away."
    },
    {
      icon: '😰',
      title: 'When Imposter Syndrome Hit Hardest',
      shortText: "Imposter syndrome hit the hardest in my Freshman year of college, but it came roaring back in junior year.",
      fullText: "Imposter syndrome hit the hardest in my Freshman year of college, but it came roaring back in junior year. It was the first time where I would be fully present in lectures and not have any understanding of what my professor was saying and I didn't feel confident to participate during the lecture. Meanwhile, most of the kids around me were answering questions with a quickness because they were exposed to the material all throughout their high school career. I felt like I was constantly playing catch-up. Like everyone else got a head start and I was just trying not to drown. This feeling is so isolating, but I want you to know: if you're feeling this way, you're not alone. Most people are just better at hiding it."
    },
    {
      icon: '💼',
      title: 'Career Pressure - When It Got Real',
      shortText: "I so desperately wanted an internship, so this is when I started to panic about not having a lot of real work experience.",
      fullText: "I so desperately wanted an internship, so this is when I started to panic about not having a lot of real work experience outside of the research I conducted for school clubs. I was consistently a part of NSBE (National Society for Black Engineers), so I was constantly going to resume workshops, panels, networking events, etc. I even got funding for the NSBE national conference, where I waited in various company lines for hours and pitched myself. I got LinkedIn connections and really locked in. Unfortunately, I didn't get an internship from the conference, but I did end up having an internship through another NSBE Connect. The Lesson: Sometimes the hustle doesn't pay off immediately, but it pays off eventually. Every connection matters. Every conversation counts. Don't give up just because one avenue didn't work."
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
      <section className="rundown-hero" style={{ '--year-color': 'var(--green-junior)' }}>
        <div className="container">
          <h1 className="year-title">JUNIOR YEAR</h1>
          <p className="year-tagline">Major Decisions...Literally</p>
          <div className="rundown-grid">
            <div className="rundown-item">
              <span className="rundown-label">Mental State</span>
              <span className="rundown-value">Angry • Determined • Fighting</span>
            </div>
            <div className="rundown-item">
              <span className="rundown-label">What Kept Me Going</span>
              <span className="rundown-value">Pursuing IDM courses and finally feeling confidence with my skills and where I fit in at NYU</span>
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
            <button onClick={() => scrollToSection('imposter-syndrome')} className="sidebar-link">Imposter Syndrome</button>
            <button onClick={() => scrollToSection('career-pressure')} className="sidebar-link">Career Pressure</button>
            <button onClick={() => scrollToSection('retaking-classes')} className="sidebar-link">Retaking Classes</button>
            <button onClick={() => scrollToSection('rose-tinted')} className="sidebar-link">Rose-Tinted Glasses</button>
            <button onClick={() => scrollToSection('advocacy')} className="sidebar-link">How I Advocated</button>
            <button onClick={() => scrollToSection('what-kept-going')} className="sidebar-link">What Kept Me Going</button>
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
              <p>&quot;I was clawing my way through CS, and the finish line felt impossibly far away.&quot;</p>
            </div>
          </section>

          {/* WHEN IMPOSTER SYNDROME HIT HARDEST */}
          <section id="imposter-syndrome" className="content-section bg-off-white">
            <h2 className="section-heading">WHEN IMPOSTER SYNDROME HIT HARDEST</h2>
            
            {/* YouTube Video - i feel lost, so i spoke about it */}
            <div className="youtube-embed">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/L7t2DPH-aU8"
                title="i feel lost, so i spoke about it"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p>Imposter syndrome hit the hardest in my Freshman year of college, but it came roaring back in junior year. It was the first time where I would be fully present in lectures and not have any understanding of what my professor was saying and I didn&apos;t feel confident to participate during the lecture. Meanwhile, most of the kids around me were answering questions with a quickness because they were exposed to the material all throughout their high school career.</p>
            
            <p>I felt like I was constantly playing catch-up. Like everyone else got a head start and I was just trying not to drown. This feeling is so isolating, but I want you to know: if you&apos;re feeling this way, you&apos;re not alone. Most people are just better at hiding it.</p>
          </section>

          {/* CAREER PRESSURE */}
          <section id="career-pressure" className="content-section bg-purple-tint">
            <h2 className="section-heading">CAREER PRESSURE - WHEN IT STARTED GETTING REAL</h2>
            
            <div className="survival-card">
              <p>I so desperately wanted an internship, so this is when I started to panic about not having a lot of real work experience outside of the research I conducted for school clubs. I was consistently a part of NSBE (National Society for Black Engineers), so I was constantly going to resume workshops, panels, networking events, etc.</p>
              
              <p>I even got funding for the NSBE national conference, where I waited in various company lines for hours and pitched myself. I got LinkedIn connections and really locked in. Unfortunately, I didn&apos;t get an internship from the conference, but I did end up having an internship through another NSBE Connect.</p>
              
              <p className="lesson-text"><strong>The Lesson:</strong> Sometimes the hustle doesn&apos;t pay off immediately, but it pays off eventually. Every connection matters. Every conversation counts. Don&apos;t give up just because one avenue didn&apos;t work.</p>
            </div>
          </section>

          {/* RETAKING CLASSES */}
          <section id="retaking-classes" className="content-section bg-white">
            <h2 className="section-heading">RETAKING CLASSES - THE EMOTIONAL TOLL</h2>
            
            <p>I tried to tell myself that every time I retook a class was reinforcing everything I already knew, and that it is not reflective of who I am as a student, but rather highlights my persistence in still being able to put my pride aside to redo homework and exams that I found so challenging.</p>
            
            <p>But let&apos;s be real: it hurt. It felt like failure even when I was trying to reframe it as persistence. It felt embarrassing. It felt like proof that I didn&apos;t belong. But I kept showing up anyway, and that&apos;s what mattered.</p>

            <div className="pull-quote">
              <p>&quot;Retaking classes doesn&apos;t define you—fighting through them does.&quot;</p>
            </div>

            <div className="content-block academic-wins-block">
              <h3 className="block-title">Academic Wins to Balance the Struggles</h3>
              <p>My fall semester was way better than my spring but I didn&apos;t have to retake any courses during Fall 2023. This felt like a huge win after so many semesters of struggling. It reminded me that progress isn&apos;t linear—some semesters are better than others, and that&apos;s okay.</p>
            </div>
          </section>

          {/* WHEN MY ROSE-TINTED GLASSES FELL OFF */}
          <section id="rose-tinted" className="content-section bg-blue-tint">
            <h2 className="section-heading">WHEN MY ROSE-TINTED GLASSES FELL OFF</h2>
            
            <p>Junior year was when my rose-tinted glasses of NYU fell and I realized that because I&apos;m not getting the support I need from the faculty that is LITERALLY HIRED TO PROVIDE IT, I did all that I could to bully them (in a respectful way of course) to get what I needed.</p>
            
            <p>I fought for what I needed and did not apologize to ANYONE for going after it! I became more confident in myself and my abilities as a NYU Violet.</p>

            <div className="pull-quote">
              <p>&quot;I began to bully them (in a respectful way) to get what I needed.&quot;</p>
            </div>
          </section>

          {/* HOW I ADVOCATED FOR MYSELF */}
          <section id="advocacy" className="content-section bg-white">
            <h2 className="section-heading">WHAT CHANGED IN HOW I ADVOCATED FOR MYSELF</h2>
            
            <p>I became very vocal and unabashed about needing assistance from my advisors, or asking questions. If I didn&apos;t receive a response to an email that I deemed very important I began double emailing and putting professors, advisors, faculty etc on blast so that I wouldn&apos;t be ignored. I placed &quot;URGENT&quot; in the subject line to let the professor know that I drastically need their attention.</p>

            {/* EMAIL TACTICS CALLOUT */}
            <div className="callout-box tactics-box">
              <div className="callout-icon">📧</div>
              <div className="callout-content">
                <h4>EMAIL TACTICS THAT WORK</h4>
                <p><strong>How to Get Responses When You&apos;re Being Ignored:</strong></p>
                <ul className="tactics-list">
                  <li>Put &quot;URGENT&quot; in the subject line</li>
                  <li>Double email if you don&apos;t get a response within 48 hours</li>
                  <li>CC multiple people so you can&apos;t be ignored (your advisor, department head, etc.)</li>
                  <li>Reference official NYU policies when they apply</li>
                  <li>Be respectful but firm—you&apos;re not asking for a favor, you&apos;re asking for what you&apos;re entitled to</li>
                  <li>Document everything—save all emails</li>
                </ul>
              </div>
            </div>

            <p>I began vocalizing and advocating for myself more aggressively during Junior year but I really began to stand up to my advisors and the NYU system during my senior year. But junior year was when I realized I had to fight. That the system wasn&apos;t going to help me unless I forced it to. That being nice and quiet and patient wasn&apos;t working.</p>
            
            <p>This was the year I learned that you have to be your own advocate because no one else will do it for you.</p>
          </section>

          {/* WHAT KEPT ME GOING */}
          <section id="what-kept-going" className="content-section bg-dark-purple">
            <div className="centered-content">
              <h2 className="section-heading light-text">WHAT KEPT ME GOING</h2>
              <p className="light-text">Pursuing IDM courses and finally feeling confidence with my skills and where I fit in at NYU. This was the lifeline. CS at times made me feel small. IDM made me feel capable. That difference kept me going when everything else felt impossible.</p>
            </div>
          </section>

          {/* LOOKING BACK */}
          <section id="looking-back" className="content-section bg-gradient">
            <h2 className="section-heading light-text">LOOKING BACK - WHAT I LEARNED</h2>
            
            <ul className="reflection-list">
              <li>Imposter syndrome is a liar—everyone feels behind sometimes</li>
              <li>The hustle doesn&apos;t always pay off immediately, but it pays off eventually</li>
              <li>Retaking classes is not failure—it&apos;s persistence</li>
              <li>Professors are people—most of them want to help if you ask</li>
              <li>You have to be your own advocate—no one else will fight for you</li>
              <li>Sometimes one class, one field, one community can be the thing that saves you</li>
            </ul>

            <div className="final-message">
              <h3 className="message-title">To Junior Me:</h3>
              <p className="message-text">&quot;That imposter syndrome? Everyone feels it. You&apos;re not actually behind—you&apos;re exactly where you need to be. Retaking classes doesn&apos;t define you; fighting through them does. The burnout is real, but you&apos;re stronger than you think. And those IDM courses you love? Pay attention to that feeling. It&apos;s telling you something important.&quot;</p>
            </div>
          </section>

        </main>
      </div>

      {/* Next/Previous Navigation */}
      <div className="page-navigation">
        <Link to="/sophomore" className="nav-button prev-button">
          <ArrowLeft size={20} />
          <span>Previous: Sophomore Year</span>
        </Link>
        <Link to="/senior" className="nav-button next-button">
          <span>Next: Senior Year</span>
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

export default JuniorYear;