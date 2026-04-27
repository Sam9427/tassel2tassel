import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import './IDMVoices.css';

// ── Photos (River has no photo yet)
import devynnePhoto from '../../assets/images/idm-voices/devynne.jpeg';
import lamarPhoto from '../../assets/images/idm-voices/lamar.jpeg';
import yamilaPhoto from '../../assets/images/idm-voices/yamila.jpeg';

// ── Audio
import devynneAudio from '../../assets/audio/idm-voices/devynne.m4a';
import lamarAudio from '../../assets/audio/idm-voices/lamar.m4a';
import riverAudio from '../../assets/audio/idm-voices/river.m4a';
import yamilaAudio from '../../assets/audio/idm-voices/yamila.m4a';

const students = [
  {
    id: 1,
    firstName: 'Lamar',
    lastName: 'Jambi',
    pronouns: 'she/her',
    year: 'Junior',
    graduationSemester: 'Spring 2027',
    photo: lamarPhoto,
    audio: lamarAudio,
    question: 'What is one thing you wish someone had told you before starting college?',
  },
  {
    id: 2,
    firstName: 'Devynne',
    lastName: null,
    pronouns: null,
    year: null,
    graduationSemester: 'Spring 2026',
    photo: devynnePhoto,
    audio: devynneAudio,
    question: 'What is one thing you wish someone had told you before starting college?',
  },
  {
    id: 3,
    firstName: 'Yamila',
    lastName: null,
    pronouns: null,
    year: null,
    graduationSemester: 'Spring 2026',
    photo: yamilaPhoto,
    audio: yamilaAudio,
    question: 'What is one thing you wish someone had told you before starting college?',
  },
  {
    id: 4,
    firstName: 'River',
    lastName: null,
    pronouns: null,
    year: null,
    graduationSemester: null,
    photo: null,
    audio: riverAudio,
    question: 'What is one thing you wish someone had told you before starting college?',
  },
];

const initials = (first, last) =>
  `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase();

const VoiceCard = ({ student }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); } else { audioRef.current.play(); }
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    const pct = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
  };

  const onLoaded = () => { if (audioRef.current) setDuration(audioRef.current.duration); };
  const onEnded = () => { setPlaying(false); setProgress(0); };

  const seek = (e) => {
    if (!audioRef.current) return;
    const bar = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - bar.left) / bar.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
    setProgress(pct * 100);
  };

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  return (
    <div className="voice-card">
      <div className="voice-photo-wrapper">
        {student.photo ? (
          <img src={student.photo} alt={student.firstName} className="voice-photo" />
        ) : (
          <div className="voice-avatar">
            {initials(student.firstName, student.lastName)}
          </div>
        )}
      </div>

      <div className="voice-identity">
        <h3 className="voice-name">
          {student.firstName}{student.lastName ? ` ${student.lastName}` : ''}
        </h3>
        <div className="voice-meta">
          {student.year && <span className="voice-badge year-badge">{student.year}</span>}
          {student.graduationSemester && <span className="voice-badge grad-badge">{student.graduationSemester}</span>}
          {student.pronouns && <span className="voice-badge pronouns-badge">{student.pronouns}</span>}
        </div>
      </div>

      <div className="voice-question-block">
        <span className="voice-question-label">Question asked</span>
        <p className="voice-question-text">"{student.question}"</p>
      </div>

      {student.audio ? (
        <div className="voice-player">
          <audio
            ref={audioRef}
            src={student.audio}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoaded}
            onEnded={onEnded}
            preload="metadata"
          />
          <button className={`play-btn ${playing ? 'play-btn--pause' : ''}`} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <div className="player-track" onClick={seek} role="progressbar">
            <div className="player-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="player-time">
            {fmt(audioRef.current?.currentTime)} / {fmt(duration)}
          </span>
          <Volume2 size={14} className="player-vol-icon" />
        </div>
      ) : (
        <div className="voice-player voice-player--pending">
          <Play size={18} className="pending-icon" />
          <span className="pending-text">Audio coming soon</span>
        </div>
      )}
    </div>
  );
};

const IDMVoices = () => (
  <div className="idm-voices-page">
    <div className="voices-hero">
      <p className="voices-eyebrow">IDM Voices</p>
      <h1 className="voices-headline">Real students. Real answers.</h1>
      <p className="voices-sub">
        I asked four IDM students the questions nobody thinks to ask. Here's what they had to say.
      </p>
    </div>
    <div className="voices-grid">
      {students.map((s) => (
        <VoiceCard key={s.id} student={s} />
      ))}
    </div>
  </div>
);

export default IDMVoices;
