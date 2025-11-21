import React from 'react';

// Adaugam 'isAdminView' in lista de props
function Answer({ answer, index, onReveal, isAdminView }) {

  // NOU: Daca suntem in modul admin, afisam direct raspunsul
  if (isAdminView) {
    return (
      <div 
        className={`answer-slot admin-view ${answer.revealed ? 'revealed' : ''}`}
        onClick={() => onReveal(index)}
      >
        <div className="card-face-back">
          <span className="answer-text">{answer.text.toUpperCase()}</span>
          <span className="answer-points">{answer.points}</span>
        </div>
      </div>
    );
  }

  // Altfel, pastram logica existenta cu animatia de flip
  return (
    <div className="answer-slot" onClick={() => onReveal(index)}>
      <div className={`answer-card ${answer.revealed ? 'is-flipped' : ''}`}>
        <div className="card-face card-face-front">
          <span className="answer-text"></span>
          <div className="number-oval">{index + 1}</div>
        </div>
        
        <div className="card-face card-face-back">
          <span className="answer-text">{answer.text.toUpperCase()}</span>
          <span className="answer-points">{answer.points}</span>
        </div>
      </div>
    </div>
  );
}

export default Answer;