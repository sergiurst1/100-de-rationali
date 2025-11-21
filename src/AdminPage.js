import React, { useState, useEffect } from 'react';
import { allGamesData } from './questions';
import GameBoard from './GameBoard';
import { db } from './firebase';
import { ref, set, update, onValue } from 'firebase/database';

const gameRef = ref(db, 'mainGame');

const initialGameState = {
  gameStatus: 'PLAYING',
  currentGameIndex: 0,
  currentQuestionIndex: 0,
  strikes: 0,
  revealedAnswers: {},
  strikeAnimation: null
};

function AdminPage() {
  const [gameState, setGameState] = useState(initialGameState);

  useEffect(() => {
    const isSessionInitialized = sessionStorage.getItem('isGameSessionInitialized');
    if (!isSessionInitialized) {
      set(gameRef, initialGameState);
      sessionStorage.setItem('isGameSessionInitialized', 'true');
    }
    const unsubscribe = onValue(gameRef, (snapshot) => {
      const data = snapshot.val() || initialGameState;
      if (!data.revealedAnswers) data.revealedAnswers = {};
      setGameState(data);
    });
    return () => unsubscribe();
  }, []);

  const { gameStatus, currentGameIndex, currentQuestionIndex, strikes, revealedAnswers, strikeAnimation } = gameState;
  const currentQuestions = allGamesData[currentGameIndex].questions;
  const questionKey = `g${currentGameIndex}q${currentQuestionIndex}`;
  const currentRevealedForQuestion = revealedAnswers[questionKey] || {};

  const handleRevealAnswer = (answerIndex) => {
    const newRevealed = { ...currentRevealedForQuestion };
    newRevealed[answerIndex] = true;
    update(gameRef, { [`/revealedAnswers/${questionKey}`]: newRevealed });
  };

  const resetRound = (nextGameIndex, nextQuestionIndex) => {
    update(gameRef, { currentGameIndex: nextGameIndex, currentQuestionIndex: nextQuestionIndex, strikes: 0 });
  };

  const addStrike = () => {
    if (strikes < 3) {
      const newStrikes = strikes + 1;
      const newStrikeText = 'X'.repeat(newStrikes);
      update(gameRef, { strikes: newStrikes, strikeAnimation: newStrikeText });
      setTimeout(() => { update(gameRef, { strikeAnimation: null }); }, 1000);
    }
  };
  
  // NOU: Functie pentru a afisa un singur X, fara a afecta scorul
  const handleShowSingleStrike = () => {
    // Setam animatia in Firebase
    update(gameRef, { strikeAnimation: 'X' });
    // Dupa 1 secunda, o stergem
    setTimeout(() => {
      update(gameRef, { strikeAnimation: null });
    }, 1000);
  };
  
  const handleNextQuestion = () => { if (currentQuestionIndex < currentQuestions.length - 1) { resetRound(currentGameIndex, currentQuestionIndex + 1); } };
  const handlePreviousQuestion = () => { if (currentQuestionIndex > 0) { resetRound(currentGameIndex, currentQuestionIndex - 1); } };
  const handlePreviousGame = () => { if (currentGameIndex > 0) { resetRound(currentGameIndex - 1, 0); } };
  
  const handleGoToIntermission = () => { update(gameRef, { gameStatus: 'BETWEEN_GAMES' }); };
  const handleStartNextGame = () => {
    if (currentGameIndex < allGamesData.length - 1) {
      const nextGameIndex = currentGameIndex + 1;
      update(gameRef, { gameStatus: 'PLAYING', currentGameIndex: nextGameIndex, currentQuestionIndex: 0, strikes: 0 });
    } else {
      alert("Ai terminat toate jocurile!");
    }
  };

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
  const isFirstGame = currentGameIndex === 0;
  const hasMoreGames = currentGameIndex < allGamesData.length - 1;
  
  const totalScore = currentQuestions[currentQuestionIndex].answers.reduce((acc, answer, index) => (currentRevealedForQuestion[index] ? acc + answer.points : acc), 0);
  const currentAnswersWithState = currentQuestions[currentQuestionIndex].answers.map((answer, index) => ({ ...answer, revealed: !!currentRevealedForQuestion[index] }));

  if (gameStatus === 'BETWEEN_GAMES') {
    return (
      <div className="admin-intermission-container">
        <h1>Pauză între jocuri</h1>
        <p>Ecranul principal afișează "Felicitări!".</p>
        {hasMoreGames ? (
          <button className="next-game-button" onClick={handleStartNextGame}>Start Jocul Următor</button>
        ) : (
          <h2>Toate jocurile s-au terminat!</h2>
        )}
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="game-frame">
        <div className="top-panel"><div className="score-display">{totalScore}</div></div>
        <div className="question-panel"><div className="question-display">{currentQuestions[currentQuestionIndex].question}</div></div>
        <GameBoard answers={currentAnswersWithState} onRevealAnswer={handleRevealAnswer} isAdminView={true} />
        <div className="bottom-panel"><div className="strikes-display"><div className={`strike ${strikes >= 1 ? 'visible' : ''}`}>X</div><div className={`strike ${strikes >= 2 ? 'visible' : ''}`}>X</div><div className={`strike ${strikes >= 3 ? 'visible' : ''}`}>X</div></div></div>
      </div>
      
      {/* MODIFICAT: Am adaugat noul buton */}
      <div className="control-panel">
        {!isFirstGame && isFirstQuestion && <button className="prev-game-button" onClick={handlePreviousGame}>Joc Anterior</button>}
        {!isFirstQuestion && <button className="prev-button" onClick={handlePreviousQuestion}>Întrebare Anterioară</button>}
        
        <button className="wrong-answer-button" onClick={handleShowSingleStrike}>Răspuns Greșit</button>
        <button onClick={addStrike}>Adaugă Greșeală</button>
        
        {!isLastQuestion && <button onClick={handleNextQuestion}>Următoare Întrebare</button>}
        {isLastQuestion && hasMoreGames && <button className="next-game-button" onClick={handleGoToIntermission}>Următorul Joc</button>}
      </div>

      {strikeAnimation && <div className="strike-overlay">{strikeAnimation}</div>}
    </div>
  );
}

export default AdminPage;