import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import './IDMVoices.css';

// ── Photos (River has no photo yet)
import riverPhoto from '../../assets/images/idm-voices/river.jpeg';
import devynnePhoto from '../../assets/images/idm-voices/devynne.jpeg';
import lamarPhoto from '../../assets/images/idm-voices/lamar.jpeg';
import yamilaPhoto from '../../assets/images/idm-voices/yamila.jpeg';
import chelseaPhoto from '../../assets/images/idm-voices/chelsea.jpeg';

// ── Audio
import devynneAudio from '../../assets/audio/idm-voices/devynne.m4a';
import lamarAudio from '../../assets/audio/idm-voices/lamar.m4a';
import riverAudio from '../../assets/audio/idm-voices/river.m4a';
import yamilaAudio from '../../assets/audio/idm-voices/yamila2.mp4';
import chelseaAudio from '../../assets/audio/idm-voices/chelsea.m4a';

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
    question: "What's something you wish professors understood about students in your program?",
  },
  {
    id: 2,
    firstName: 'Devynne',
    lastName: null,
    pronouns: 'she/her',
    year: 'Senior',
    graduationSemester: 'Spring 2026',
    photo: devynnePhoto,
    audio: devynneAudio,
    question: "What excites you about life after graduation—and what scares you?",
  },
  {
    id: 3,
    firstName: 'Yamila',
    lastName: 'Madrid',
    pronouns: 'she/her',
    year: 'Senior',
    graduationSemester: 'Spring 2026',
    photo: yamilaPhoto,
    audio: yamilaAudio,
    question: "What's something you thought you'd have figured out by now, but don't?",
  },
  {
    id: 4,
    firstName: 'River',
    lastName: 'Ramirez',
    pronouns: 'he/him',
    year: 'Junior',
    graduationSemester: 'Spring 2027',
    photo: riverPhoto,
    audio: riverAudio,
    question: "What's a project you're proud of and what did it really take to finish it?",
  },
  {
    id: 5,
    firstName: 'Chelsea',
    lastName: 'Berrios',
    pronouns: 'she/her',
    year: 'Senior',
    graduationSemester: 'Spring 2026',
    photo: chelseaPhoto,
    audio: chelseaAudio,
    question: "What's something you've struggled with that people around you might not realize?",
  },
];

const initials = (first, last) =>
  `${first?.[0] ?? ''}${last?.[0] ?? ''}`.toUpperCase();

const VoiceCard = ({ student }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoaded = () => setDuration(audio.duration);
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      const pct = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(pct) ? 0 : pct);
    };
    const handleEnded = () => { setPlaying(false); setProgress(0); setCurrentTime(0); };

    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('durationchange', handleLoaded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    // If already loaded
    if (audio.readyState >= 1 && !isNaN(audio.duration)) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('durationchange', handleLoaded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const seek = (e) => {
    if (!audioRef.current || !duration) return;
    const bar = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - bar.left) / bar.width;
    audioRef.current.currentTime = pct * duration;
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
            preload="metadata"
          />
          <button
            className={`play-btn ${playing ? 'play-btn--pause' : ''}`}
            onClick={togglePlay}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <div className="player-track" onClick={seek} role="progressbar">
            <div className="player-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="player-time">
            {fmt(currentTime)} / {fmt(duration)}
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
      <h1 className="voices-headline">Real students. Realer answers.</h1>
      <p className="voices-sub">
        I asked four IDM students different questions that highlight different parts of their college career. Here's what they had to say.
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
