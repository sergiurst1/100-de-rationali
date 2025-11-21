import React, { useState, useEffect } from 'react';
import { allGamesData } from './questions';
import GameBoard from './GameBoard';
import { db } from './firebase';
import { ref, onValue } from 'firebase/database';

const gameRef = ref(db, 'mainGame');

function DisplayPage() {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    onValue(gameRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setGameState(data);
      }
    });
  }, []);

  if (!gameState) {
    return <div className="loading-screen"><h1>Așteptând startul jocului de la panoul de control...</h1></div>;
  }

  // NOU: Verificam starea jocului
  if (gameState.gameStatus === 'BETWEEN_GAMES') {
    return (
      <div className="intermission-container">
        <h1 className="intermission-title">Felicitari RATIONUTILOR, HATZ HATZ HATZZ!</h1>
        <h2>Urmează următorul joc...</h2>
      </div>
    );
  }

  const { currentGameIndex, currentQuestionIndex, strikes, revealedAnswers, strikeAnimation } = gameState;
  
  const currentQuestions = allGamesData[currentGameIndex].questions;
  const questionKey = `g${currentGameIndex}q${currentQuestionIndex}`;
  const currentRevealed = revealedAnswers?.[questionKey] || {};

  const totalScore = currentQuestions[currentQuestionIndex].answers.reduce((acc, answer, index) => (currentRevealed[index] ? acc + answer.points : acc), 0);
  const currentAnswersWithState = currentQuestions[currentQuestionIndex].answers.map((answer, index) => ({ ...answer, revealed: !!currentRevealed[index] }));
  
  const handleNoOp = () => {};

  return (
    <div className="app-container">
      <div className="game-frame">
        <div className="top-panel"><div className="score-display">{totalScore}</div></div>
        <div className="question-panel"><div className="question-display">{currentQuestions[currentQuestionIndex].question}</div></div>
        <GameBoard answers={currentAnswersWithState} onRevealAnswer={handleNoOp} />
        <div className="bottom-panel"><div className="strikes-display"><div className={`strike ${strikes >= 1 ? 'visible' : ''}`}>X</div><div className={`strike ${strikes >= 2 ? 'visible' : ''}`}>X</div><div className={`strike ${strikes >= 3 ? 'visible' : ''}`}>X</div></div></div>
      </div>
      
      {strikeAnimation && <div className="strike-overlay">{strikeAnimation}</div>}
    </div>
  );
}

export default DisplayPage;