import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './YearCard.css';

const YearCard = ({ name, tagline, keywords, color, path }) => {
  return (
    <Link 
      to={path} 
      className="year-card"
      style={{ '--card-color': color }}
    >
      <div className="year-card-content">
        <h3 className="year-card-title">{name}</h3>
        <p className="year-card-tagline">{tagline}</p>
        
        <div className="year-card-keywords">
          {keywords.map((keyword, index) => (
            <span key={index}>
              {keyword}
              {index < keywords.length - 1 && ' • '}
            </span>
          ))}
        </div>
        
        <div className="year-card-cta">
          <span>EXPLORE</span>
          <ArrowRight size={20} />
        </div>
      </div>
    </Link>
  );
};

export default YearCard;