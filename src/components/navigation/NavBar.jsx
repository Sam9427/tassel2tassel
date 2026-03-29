import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown } from 'lucide-react';
import './NavBar.css';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isYearsOpen, setIsYearsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setIsYearsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const years = [
    { name: 'Freshman Year', path: '/freshman', color: 'var(--blue-freshman)' },
    { name: 'Sophomore Year', path: '/sophomore', color: 'var(--coral-sophomore)' },
    { name: 'Junior Year', path: '/junior', color: 'var(--green-junior)' },
    { name: 'Senior Year', path: '/senior', color: 'var(--gold-senior)' },
    { name: 'Outta Here Year', path: '/fifth-year', color: 'var(--teal-fifth)' },
    { name: 'IDM Voices', path: '/idm-voices', color: 'var(--purple-primary)' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">T2T</span>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          
          {/* Years Dropdown */}
          <div className="nav-dropdown">
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => setIsYearsOpen(!isYearsOpen)}
            >
              Years <ChevronDown size={16} />
            </button>
            
            {isYearsOpen && (
              <div className="dropdown-menu">
                {years.map((year) => (
                  <Link 
                    key={year.path} 
                    to={year.path} 
                    className="dropdown-item"
                    style={{ borderLeftColor: year.color }}
                    onClick={() => setIsYearsOpen(false)}
                  >
                    {year.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/resources" className="nav-link">Resources</Link>
          <Link to="/my-guide" className="nav-link">My Survival Guide</Link>
        </div>

        {/* Search Icon */}
        <button className="search-button" aria-label="Search">
          <Search size={20} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;