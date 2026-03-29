import React from 'react';
import { X } from 'lucide-react';
import './TruthModal.css';

const TruthModal = ({ isOpen, onClose, truth }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-number">{truth.number}</div>
        <h2 className="modal-title">{truth.title}</h2>
        <div className="modal-body">
          <p>{truth.fullText}</p>
        </div>
      </div>
    </div>
  );
};

export default TruthModal;