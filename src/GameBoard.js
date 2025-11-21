import React from 'react';
import Answer from './Answer';

// Adaugam 'isAdminView' in lista de props
function GameBoard({ answers, onRevealAnswer, isAdminView }) {
  const TOTAL_ANSWERS = 8;
  const SLOTS_PER_COLUMN = TOTAL_ANSWERS / 2;

  const leftAnswers = answers.slice(0, SLOTS_PER_COLUMN);
  const rightAnswers = answers.slice(SLOTS_PER_COLUMN, TOTAL_ANSWERS);

  return (
    <div className="game-board">
      <div className="column">
        {Array.from({ length: SLOTS_PER_COLUMN }).map((_, index) => {
          const answer = leftAnswers[index];
          if (answer) {
            return (
              <Answer
                key={index}
                answer={answer}
                index={index}
                onReveal={onRevealAnswer}
                isAdminView={isAdminView} // Pasam prop-ul mai departe
              />
            );
          }
          return <div key={index} className="answer-slot empty" />;
        })}
      </div>
      <div className="column">
        {Array.from({ length: SLOTS_PER_COLUMN }).map((_, index) => {
          const answer = rightAnswers[index];
          const originalIndex = index + SLOTS_PER_COLUMN;
          if (answer) {
            return (
              <Answer
                key={originalIndex}
                answer={answer}
                index={originalIndex}
                onReveal={onRevealAnswer}
                isAdminView={isAdminView} // Pasam prop-ul mai departe
              />
            );
          }
          return <div key={originalIndex} className="answer-slot empty" />;
        })}
      </div>
    </div>
  );
}

export default GameBoard;