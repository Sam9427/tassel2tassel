import React from 'react';
import { X } from 'lucide-react';
import './RealityCheckModal.css';

const RealityCheckModal = ({ isOpen, onClose, card }) => {
  if (!isOpen || !card) return null;

  return (
    <div className="reality-modal-overlay" onClick={onClose}>
      <div className="reality-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="reality-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="reality-modal-icon">{card.icon}</div>
        <h2 className="reality-modal-title">{card.title}</h2>
        <div className="reality-modal-body">
          <p>{card.fullText}</p>
        </div>
      </div>
    </div>
  );
};

export default RealityCheckModal;