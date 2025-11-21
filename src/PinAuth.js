// src/PinAuth.js
import React, { useState } from 'react';

function PinAuth({ onAuthSuccess, children }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === '1234') {
      setIsAuthenticated(true);
      onAuthSuccess(); // Anuntam parintele ca autentificarea a avut succes
    } else {
      setError('PIN Incorect!');
      setPin('');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="pin-container">
      <h1>Introdu PIN-ul</h1>
      <form onSubmit={handlePinSubmit}>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          maxLength="4"
          autoFocus
        />
        <button type="submit">Autorizează</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default PinAuth;