import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminPage from './AdminPage';
import DisplayPage from './DisplayPage';
import UserPage from './UserPage';

import './index.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/:userId" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);