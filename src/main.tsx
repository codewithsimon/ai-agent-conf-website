import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import CodeOfConduct from './CodeOfConduct.tsx';
import Sponsorship from './Sponsorship.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
      </Routes>
    </Router>
  </StrictMode>
);