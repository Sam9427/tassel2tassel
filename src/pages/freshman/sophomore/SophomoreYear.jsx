
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import RealityCheckModal from '../../components/interactive/RealityCheckModal';
import './SophomoreYear.css';
const SophomoreYear = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const realityCheckCards = [
    {
      icon: '👥',
      title: 'How My Social Circle Changed',
      shortText: `In my sophomore year, I lessened my friend group by half. I realized the power of quality over quantity and focused on throwing myself into my courses.`,
      fullText: `In my sophomore year, I lessened my friend group by half. I realized the power of quality over quantity and focused on throwing myself into my courses. Because I struggled during my first year, I was determined to pick myself up and prioritize progress over perfection when it came to my academics. I expanded my academic network through other clubs I joined on campus, but even those were primarily professional. This wasn't about cutting people off to be mean—it was about protecting my energy and investing in the people who actually showed up for me. Quality over quantity… Always.`
    },
    {
      icon: '📱',
      title: 'How I Handled FOMO',
      shortText: `I handled FOMO so much better because I understood my priorities. What is more important, this club event or studying for this quiz?`,
      fullText: `I handled FOMO so much better because I understood my priorities. What is more important, this club event or studying for this quiz? I was still able to prioritize my friends during my free time. Hanging out with them always felt like a safe haven so I never felt like my social life was strained. The difference between freshman and sophomore year FOMO was simple: I learned to ask myself what actually mattered in that moment. There's always another party. There's not always another chance to pass that exam.`
    },
    {
      icon: '💔',
      title: 'The Friend Loss That Changed Me',
      shortText: `Yes, I lost a really close friend who stuck by me after the big friend group separation occurred.`,
      fullText: `Yes, I lost a really close friend who stuck by me after the big friend group separation occurred. I lost her because she was experiencing her first boyfriend who ended up being toxic and was very territorial over her. We supported her for as long as we could but I told her that if she couldn't leave him, it hurt me too bad to see her get disrespected. We grew apart and never spoke again. This taught me that sometimes loving someone means letting them go. You can't save people who don't want to be saved, and watching someone you care about choose their own destruction is one of the hardest things you'll experience in college. It's okay to walk away when staying hurts too much.`
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
      <section className="rundown-hero" style={{ '--year-color': 'var(--green-sophomore, #7BC67E)' }}>
        <div className="container">
          <h1 className="year-title">SOPHOMORE YEAR</h1>
          <p className="year-tagline">No Longer the Newbie</p>
          <div className="rundown-grid">
            <div className="rundown-item">
              <span className="rundown-label">Mental State</span>
              <span className="rundown-value">Hopeful &bull; Embracing Struggle &bull; Hyperfixated on Confidence</span>
            </div>
            <div className="rundown-item">
              <span className="rundown-label">What Kept Me Going</span>
              <span className="rundown-value">Determination to prioritize progress over perfection after struggling freshman year</span>
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
            <button onClick={() => scrollToSection('fomo')} className="sidebar-link">Handling FOMO</button>
            <button onClick={() => scrollToSection('friend-loss')} className="sidebar-link">The Friend Loss</button>
            <button onClick={() => scrollToSection('academic-reality')} className="sidebar-link">Academic Reality</button>
            <button onClick={() => scrollToSection('major-question')} className="sidebar-link">The Major Question</button>
            <button onClick={() => scrollToSection('study-habits')} className="sidebar-link">Study Habits</button>
            <button onClick={() => scrollToSection('identity-shift')} className="sidebar-link">Identity Shift</button>
            <button onClick={() => scrollToSection('being-real')} className="sidebar-link">Being Real</button>
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
                  <button className="read-more-btn">Read More &rarr;</button>
                </div>
              ))}
            </div>
            <div className="pull-quote">
              <p>"Quality over quantity... Always."</p>
            </div>
          </section>
          {/* HOW I HANDLED FOMO */}
          <section id="fomo" className="content-section bg-off-white">
            <h2 className="section-heading">HOW I HANDLED FOMO</h2>
            <p>I handled FOMO so much better because I understood my priorities. What is more important, this club event or studying for this quiz? I was still able to prioritize my friends during my free time. Hanging out with them always felt like a safe haven so I never felt like my social life was strained.</p>
            <p>The difference between freshman and sophomore year FOMO was simple: I learned to ask myself what actually mattered in that moment. There's always another party. There's not always another chance to pass that exam.</p>
          </section>
          {/* THE FRIEND LOSS THAT CHANGED ME */}
          <section id="friend-loss" className="content-section bg-purple-tint">
            <div className="centered-content">
              <h2 className="section-heading">THE FRIEND LOSS THAT CHANGED ME</h2>
              <div className="video-placeholder">
                <p>[ VIDEO: Talking about friendship and boundaries ]</p>
              </div>
              <p className="intimate-text">{`Yes, I lost a really close friend who stuck by me after the big friend group separation occurred. I lost her because she was experiencing her first boyfriend who ended up being toxic and was very territorial over her. We supported her for as long as we could but I told her that if she couldn't leave him, it hurt me too bad to see her get disrespected. We grew apart and never spoke again.`}</p>
              <p className="intimate-text">{`This taught me that sometimes loving someone means letting them go. You can't save people who don't want to be saved, and watching someone you care about choose their own destruction is one of the hardest things you'll experience in college. It's okay to walk away when staying hurts too much.`}</p>
            </div>
          </section>
          {/* ACADEMIC REALITY */}
          <section id="academic-reality" className="content-section bg-white">
            <h2 className="section-heading">ACADEMIC REALITY - CLASSES GETTING HARDER</h2>
            <div className="survival-card">
              <p>{`Each class has its own level of difficulty and will always propose a different type of struggle, so maybe if it's not difficulty with the content, it will be difficulty with the amount of homework that is given.`}</p>
              <p>{`You learn quickly that "hard" looks different depending on the class. Sometimes it's the material. Sometimes it's the workload. Sometimes it's the professor. Adjust accordingly.`}</p>
            </div>
          </section>
          {/* THE MAJOR QUESTION */}
          <section id="major-question" className="content-section bg-off-white">
            <h2 className="section-heading">THE MAJOR QUESTION I BURIED</h2>
            <div className="survival-card">
              <p>{`I considered changing my major to IDM from CS, but I buried the thought because I didn't want to disappoint my parents, and in a way, I thought that if I switched my major from CS, it suggested that I was a quitter and that I wasn't as smart as I thought I was.`}</p>
              <p>{`This was the beginning of a multi-year internal battle. I ignored what my heart was telling me because I was more afraid of what other people would think than I was committed to my own happiness. That fear cost me time, energy, and peace.`}</p>
            </div>
            <div className="callout-box sophomore-highlight-box">
              <div className="callout-icon">💡</div>
              <div className="callout-content">
                <h4>BUT ALSO...</h4>
                <p>{`Fall of 2023 was when I decided I wanted to pursue a minor in IDM, because I pushed myself to stop suppressing my curiosity for a field of study that I was always interested in. This was the first time I chose myself, even if I wasn't ready to fully commit yet.`}</p>
              </div>
            </div>
          </section>
          {/* STUDY HABITS */}
          <section id="study-habits" className="content-section bg-white">
            <h2 className="section-heading">STUDY HABITS - WHAT I DEVELOPED (AND DIDN'T)</h2>
            <div className="two-col-grid">
              <div className="content-block">
                <h3 className="block-title">What I Developed</h3>
                <ul className="study-list developed-list">
                  <li className="study-item developed">Pomodoro method - breaking study time into focused intervals</li>
                  <li className="study-item developed">Attending exam review sessions - always attend these!</li>
                </ul>
              </div>
              <div className="content-block">
                <h3 className="block-title">What I Failed to Develop</h3>
                <ul className="study-list failed-list">
                  <li className="study-item failed">{`Peer studying - If I'm going to lock in, it's best I do it by myself. I learned that I study better alone, and that's okay. Know your learning style.`}</li>
                </ul>
              </div>
            </div>
          </section>
          {/* IDENTITY SHIFT */}
          <section id="identity-shift" className="content-section bg-blue-tint">
            <h2 className="section-heading">IDENTITY SHIFT - HOW I FELT DIFFERENT</h2>
            <p>{`I felt hopeful. I was still struggling, but I was embracing the struggle. I became hyperfixated on gaining my confidence academically and networking at professional events.`}</p>
            <p>{`Fall of 2023 was when I decided I wanted to pursue a minor in IDM, because I pushed myself to stop suppressing my curiosity for a field of study that I was always interested in.`}</p>
          </section>
          {/* BEING REAL VS. PRETENDING */}
          <section id="being-real" className="content-section bg-dark-purple">
            <div className="centered-content">
              <h2 className="section-heading light-text">BEING REAL VS. PRETENDING</h2>
              <p className="light-text">{`I never pretended to have it together. I was very open and honest with myself, my advisors (if they cared to ask), and my friends about where I was in that state. It doesn't make any sense to uphold a facade of "keeping it all together" because in doing so, it can easily force you to avoid reaching out for help during a time when you may need it the most!`}</p>
              <p className="light-text">{`This is so important: Pretending you're fine when you're not doesn't protect you—it isolates you. It keeps you from getting the help you need. Be real about where you are. The right people will meet you there.`}</p>
            </div>
            <div className="pull-quote pull-quote-dark">
              <p>"Pretending you're fine doesn't protect you—it isolates you."</p>
            </div>
          </section>
          {/* THE WINS */}
          <section id="wins" className="content-section bg-white">
            <h2 className="section-heading">THE WINS - WHAT MADE ME PROUD</h2>
            <div className="wins-content">
              <p><strong>My Proudest Moment:</strong> {`Doing research for VIP (Vertically Integrated Project) clubs and getting involved with other NYU faculty and joining educational clubs. This was when I started building my academic network beyond just surviving—I was actually thriving in certain spaces.`}</p>
              <ul className="wins-list">
                <li>I found professors who saw my potential</li>
                <li>I found peers who were doing interesting work</li>
                <li>I found communities where I felt like I belonged</li>
                <li>{`This year taught me that struggling in CS didn't mean I was struggling everywhere. I just hadn't found my place yet.`}</li>
              </ul>
              <div className="image-placeholder">
                <p>[ IMAGE: VIP project or club photo ]</p>
              </div>
            </div>
          </section>
          {/* LOOKING BACK */}
          <section id="looking-back" className="content-section bg-gradient">
            <h2 className="section-heading light-text">LOOKING BACK - WHAT I LEARNED</h2>
            <ul className="reflection-list">
              <li>Quality friendships matter more than quantity</li>
              <li>{`Priorities matter more than FOMO—ask yourself what actually matters in the moment`}</li>
              <li>{`Suppressing your interests doesn't make them go away, it just delays the inevitable`}</li>
              <li>Being real opens doors for help—pretending closes them</li>
              <li>You can struggle in one area and thrive in another</li>
              <li>Loving someone sometimes means letting them go</li>
            </ul>
            <div className="final-message">
              <h3 className="message-title">To Sophomore Me:</h3>
              <p className="message-text">{`"That curiosity about IDM? Trust it. It's not weakness—it's direction. Cutting the friend group in half was the right move. Those boundaries you're setting? Keep setting them. You're not a quitter for wanting to explore something that excites you. You're listening to yourself, and that's the bravest thing you can do."`}</p>
            </div>
            <div className="video-placeholder">
              <p>[ VIDEO: Reflection on sophomore year growth ]</p>
            </div>
          </section>
        </main>
      </div>
      {/* Next/Previous Navigation */}
      <div className="page-navigation">
        <Link to="/freshman" className="nav-button prev-button">
          <ArrowLeft size={20} />
          <span>Previous: Freshman Year</span>
        </Link>
        <Link to="/junior" className="nav-button next-button">
          <span>Next: Junior Year</span>
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
export default SophomoreYear;
