import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Trash2, Lock, Unlock } from 'lucide-react';
import './Community.css';

const supabase = createClient(
    'https://rrkuwjoxerkbcdolooku.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJya3V3am94ZXJrYmNkb2xvb2t1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MDQwMzMsImV4cCI6MjA5Mjk4MDAzM30.3ctRhlhTIS8uuJdc6__FKK7ky8OLWZzExCuj7YXFIOI'
  );
const ADMIN_PASSWORD = 'Sm19144377234.';

const YEAR_OPTIONS = [
  'Freshman',
  'Sophomore',
  'Junior',
  'Senior',
  'Super Senior',
  'Graduate Student',
  'Alumni',
];

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const fetchPosts = async () => {
    setFetching(true);
    const { data, error } = await supabase
      .from('community_posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setPosts(data || []);
    setFetching(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async () => {
    setError('');
    if (!name.trim()) {
      setError("Please enter your name — it's required!");
      return;
    }
    if (!message.trim()) {
      setError('Please write something before posting!');
      return;
    }

    setLoading(true);
    const { error } = await supabase.from('community_posts').insert([
      {
        name: name.trim(),
        year: year || null,
        message: message.trim(),
      },
    ]);

    if (error) {
      setError('Something went wrong. Please try again!');
      setLoading(false);
      return;
    }

    setName('');
    setYear('');
    setMessage('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setLoading(false);
    fetchPosts();
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('community_posts')
      .delete()
      .eq('id', id);
    if (!error) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const handleAdminLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowPasswordPrompt(false);
      setPasswordInput('');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Try again!');
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="community-page">
      <div className="community-hero">
        <p className="community-eyebrow">Community Board</p>
        <h1 className="community-headline">Speak On It</h1>
        <p className="community-sub">
          Got something to say about college life? This is your space.
          No topic too big, no feeling too small.
        </p>
      </div>

      <div className="community-layout">
        {/* Post Form */}
        <div className="post-form-wrapper">
          <h2 className="form-heading">Drop Your Thoughts</h2>

          <div className="form-field">
            <label className="form-label">Your Name <span className="required">*</span></label>
            <input
              className="form-input"
              type="text"
              placeholder="First name, nickname, whatever you go by"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={50}
            />
          </div>

          <div className="form-field">
            <label className="form-label">College Year <span className="optional">(optional)</span></label>
            <select
              className="form-select"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select your year...</option>
              {YEAR_OPTIONS.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label className="form-label">What's on your mind?</label>
            <textarea
              className="form-textarea"
              placeholder="Share advice, a moment, a feeling, a lesson — anything goes..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              rows={5}
            />
            <span className="char-count">{message.length}/500</span>
          </div>

          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">Posted! Thanks for sharing ✨</p>}

          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Posting...' : 'Post It →'}
          </button>
        </div>

        {/* Posts Feed */}
        <div className="posts-feed">
          <div className="feed-header-row">
            <h2 className="feed-heading">
              What People Are Saying
              <span className="post-count">{posts.length} posts</span>
            </h2>

            {/* Admin toggle */}
            <button
              className="admin-toggle-btn"
              onClick={() => {
                if (isAdmin) {
                  setIsAdmin(false);
                } else {
                  setShowPasswordPrompt(!showPasswordPrompt);
                }
              }}
              title={isAdmin ? 'Exit admin mode' : 'Admin login'}
            >
              {isAdmin ? <Unlock size={16} /> : <Lock size={16} />}
              {isAdmin ? 'Exit Admin' : 'Admin'}
            </button>
          </div>

          {/* Password prompt */}
          {showPasswordPrompt && !isAdmin && (
            <div className="password-prompt">
              <input
                className="form-input"
                type="password"
                placeholder="Enter admin password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
              {passwordError && <p className="form-error">{passwordError}</p>}
              <button className="submit-btn" onClick={handleAdminLogin}>
                Unlock →
              </button>
            </div>
          )}

          {isAdmin && (
            <div className="admin-banner">
              🔓 Admin mode on — click the trash icon to delete any post
            </div>
          )}

          {fetching ? (
            <div className="feed-loading">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="feed-empty">
              <p>No posts yet — be the first to speak on it!</p>
            </div>
          ) : (
            <div className="posts-list">
              {posts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <div className="post-avatar">
                      {post.name?.[0]?.toUpperCase()}
                    </div>
                    <div className="post-meta">
                      <span className="post-name">{post.name}</span>
                      {post.year && (
                        <span className="post-year-badge">{post.year}</span>
                      )}
                    </div>
                    <span className="post-date">{formatDate(post.created_at)}</span>
                    {isAdmin && (
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(post.id)}
                        title="Delete post"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  <p className="post-message">{post.message}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
