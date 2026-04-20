import React, { useState } from 'react';
import './Resources.css';

const resources = [
  {
    id: 'ptc',
    emoji: '📚',
    tag: 'ACADEMICS',
    tagColor: '#4f8ef7',
    title: 'Polytechnic Tutoring Center',
    abbr: 'PTC',
    url: 'https://engineering.nyu.edu/academics/undergraduate/tutoring-center/services-and-subjects',
    what: 'Free tutoring for all science, math, and CS courses. They offer walk-ins and one-on-one appointments.',
    personal: 'I became a regular. I would book with the same tutor every time, and he helped me with my CS problem sets that I struggled with. They helped me with exam prep and homework help. This resource literally saved my grades multiple times.',
    pullQuote: '"This resource literally saved my grades multiple times."',
    listLabel: 'When to Use It',
    list: [
      "When you're stuck on a problem set",
      'Before exams (they do exam prep sessions)',
      "When you don't understand the lecture content",
      'When you need someone to explain it differently from what your professor did',
    ],
  },
  {
    id: 'emergency',
    emoji: '🆘',
    tag: 'FINANCIAL',
    tagColor: '#e8534a',
    title: 'Student Emergency Fund',
    abbr: null,
    url: 'https://engineering.nyu.edu/life-tandon/student-life/office-student-life-services/student-emergency-fund',
    what: 'NYU Tandon School of Engineering received a generous donation to establish the Tandon Student Emergency Fund which provides quick-response emergency grants to matriculated students in good academic standing who are facing a short-term financial emergency.',
    personal: 'Emergencies happen. Sometimes you can\'t predict them. Sometimes they threaten your ability to stay in school. This fund exists so that a one-time emergency doesn\'t derail your entire education. If you need it, use it. That\'s what it\'s there for.',
    pullQuote: null,
    listLabel: 'The Goal',
    list: [
      'Help currently enrolled students remain in school without interruption',
      'Support students in successfully completing their degree requirements',
      'Provide quick-response grants for short-term financial emergencies',
    ],
  },
  {
    id: 'wasserman',
    emoji: '💼',
    tag: 'CAREER',
    tagColor: '#f5a623',
    title: 'Wasserman Center',
    abbr: null,
    url: 'https://wasserman.nyu.edu/',
    what: 'Career services: resume review, mock interviews, job search help, career advice.',
    personal: 'I used it during my extended year for resume review and career advice. I wish I had started using it earlier. Don\'t wait until senior year. Start using this resource in your sophomore or junior year. The earlier you start, the more prepared you\'ll be.',
    pullQuote: null,
    listLabel: 'When to Use It',
    list: [
      'Before applying for internships',
      'When you need your resume reviewed',
      "When you're preparing for interviews",
      "When you're trying to figure out what career path to take",
      'When you need help with cover letters',
      "When you're job searching",
    ],
  },
  {
    id: 'workstudy',
    emoji: '💰',
    tag: 'MONEY',
    tagColor: '#50c878',
    title: 'Work-Study Opportunities',
    abbr: null,
    url: 'https://app.joinhandshake.com/explore',
    what: 'On-campus jobs for eligible students. Usually low-stress and employers work with your school schedule.',
    personal: 'I worked in the NYU computer lab and I also worked in NYU media services. I found out about the opportunities through word of mouth via my friends. SOPHOMORE year is when to apply. Not freshman year. Give yourself that first year to acclimate. But don\'t wait too long either.',
    pullQuote: null,
    listLabel: "Why It's Worth It",
    list: [
      "Income while you're in school",
      'Flexible hours that work around your classes',
      'On-campus (no commute)',
      'Usually low-stress',
      'Looks good on your resume',
      'You meet people outside your major',
    ],
  },
  {
    id: 'officehours',
    emoji: '🤝',
    tag: 'ACADEMICS',
    tagColor: '#4f8ef7',
    title: 'Office Hours',
    abbr: null,
    url: null,
    what: 'Dedicated time when professors are available to meet with students.',
    personal: "Professors won't know your name until you go to office hours. This is where you build relationships. This is where you get clarification. This is where you advocate for yourself.",
    pullQuote: '"Professors won\'t know your name until you go to office hours."',
    listLabel: 'How to Use Them',
    list: [
      'Come with specific questions',
      "Don't apologize for being there. That's what they're for",
      'Build a relationship over time, not just before exams',
      'Use them to clarify lecture content you did not understand',
      'Use them to discuss your performance in the class',
      'Use them to get to know your professor as a person',
    ],
  },
];

const Resources = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="resources-page">

      {/* Hero */}
      <section className="resources-hero">
        <div className="resources-hero-inner">
          <p className="resources-eyebrow">THE RESOURCES THEY DON'T TELL YOU ABOUT</p>
          <h1 className="resources-hero-title">Your Survival<br />Toolkit</h1>
          <p className="resources-hero-sub">
            These are the resources that saved me. Some I found too late. Some I wish I'd used more.
            All of them are free (or nearly free) and available to you right now.
          </p>
        </div>
        <div className="resources-hero-blob blob-1" />
        <div className="resources-hero-blob blob-2" />
        <div className="resources-hero-blob blob-3" />
      </section>

      {/* Cards */}
      <section className="resources-grid-section">
        <div className="resources-grid">
          {resources.map((r) => {
            const isOpen = activeId === r.id;
            return (
              <div
                key={r.id}
                className={`resource-card ${isOpen ? 'resource-card--open' : ''}`}
                style={{ '--tag-color': r.tagColor }}
              >
                {/* Card Header */}
                <button
                  className="resource-card-header"
                  onClick={() => toggle(r.id)}
                  aria-expanded={isOpen}
                >
                  <div className="resource-card-top">
                    <span className="resource-emoji">{r.emoji}</span>
                    <span className="resource-tag" style={{ backgroundColor: r.tagColor }}>{r.tag}</span>
                  </div>

                  <div className="resource-title-row">
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-title-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <h2 className="resource-title">
                          {r.title}{r.abbr ? ` (${r.abbr})` : ''}
                          <span className="resource-link-arrow"> ↗</span>
                        </h2>
                      </a>
                    ) : (
                      <h2 className="resource-title">{r.title}</h2>
                    )}
                    <span className="resource-chevron">{isOpen ? '−' : '+'}</span>
                  </div>

                  <p className="resource-what">{r.what}</p>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="resource-card-body">
                    <div className="resource-personal">
                      <p className="resource-personal-label">FROM ME TO YOU</p>
                      <p>{r.personal}</p>
                    </div>

                    {r.pullQuote && (
                      <div className="resource-pull-quote">
                        <p>{r.pullQuote}</p>
                      </div>
                    )}

                    <div className="resource-list-block">
                      <p className="resource-list-label">{r.listLabel}</p>
                      <ul className="resource-list">
                        {r.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {r.url && (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-cta-btn"
                      >
                        Access This Resource ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom message */}
      <section className="resources-footer-message">
        <p className="resources-footer-text">
          You are a paying student. Use every single resource available to you.
        </p>
      </section>

    </div>
  );
};

export default Resources;
