import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebase';
// Adaugam 'runTransaction' pentru a modifica datele in siguranta
import { ref, onValue, runTransaction } from 'firebase/database';
import PinAuth from './PinAuth';

const initialGameState = {
  status: 'waiting',
  winner: null,
  user1_ready: false,
  user2_ready: false,
};

function UserPage() {
  const { userId } = useParams(); // 'user1' sau 'user2'
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    const gameRef = ref(db, 'game');
    // Ascultam in timp real schimbarile din baza de date
    onValue(gameRef, (snapshot) => {
      const data = snapshot.val();
      setGameState(data || initialGameState); // Daca nu exista date, folosim starea initiala
    });
  }, []);

  // MODIFICAT: Aceasta functie contine acum toata logica de reset si start
  const handleAuthSuccess = () => {
    const gameRef = ref(db, 'game');

    // Folosim o tranzactie pentru a evita conflictele
    runTransaction(gameRef, (currentData) => {
      // Daca nu exista date deloc sau jocul este terminat, il resetam.
      // Asta inseamna ca primul jucator care se autentifica reseteaza totul.
      if (currentData === null || currentData.status === 'finished') {
        const newState = { ...initialGameState };
        newState[`${userId}_ready`] = true; // Ma marchez pe mine ca fiind gata
        return newState;
      }

      // Daca jocul este in asteptare, inseamna ca celalalt jucator asteapta deja.
      // Acum pornim jocul!
      if (currentData.status === 'waiting') {
        currentData[`${userId}_ready`] = true; // Ma marchez si eu ca gata
        currentData.status = 'active'; // Pornim jocul!
        return currentData;
      }

      // Daca jocul este deja activ, nu facem nimic
      return currentData;
    });
  };

  const handleButtonClick = () => {
    // Verificam starea direct din state-ul React
    if (gameState?.status === 'active') {
      // Setam castigatorul!
      runTransaction(ref(db, 'game'), (currentData) => {
        // O alta verificare de siguranta in interiorul tranzactiei
        if (currentData && currentData.status === 'active') {
          currentData.status = 'finished';
          currentData.winner = userId;
          return currentData;
        }
        // Daca altcineva a apasat cu o fractiune de secunda inainte, nu suprascriem
        return;
      });
    }
  };

  const isButtonDisabled = gameState?.status !== 'active';
  
  let buttonText = "Apasă Primul!";
  if (gameState?.status === 'finished' && gameState.winner) {
    buttonText = `A câștigat ${gameState.winner === 'user1' ? 'Jucator 1' : 'Jucator 2'}`;
  } else if (gameState?.status === 'waiting') {
    buttonText = "Așteptare...";
  }

  return (
    <PinAuth onAuthSuccess={handleAuthSuccess}>
      <div className="user-page">
        <h1>{userId === 'user1' ? 'Jucător 1' : 'Jucător 2'}</h1>
        <button
          className="big-red-button"
          onClick={handleButtonClick}
          disabled={isButtonDisabled}
        >
          {buttonText}
        </button>
        {gameState?.status === 'waiting' && !gameState[`${userId}_ready`] && <p>Introdu PIN-ul pentru a reseta/porni jocul...</p>}
        {gameState?.status === 'waiting' && gameState[`${userId}_ready`] && <p>Așteptând celălalt jucător...</p>}
      </div>
    </PinAuth>
  );
}

export default UserPage;