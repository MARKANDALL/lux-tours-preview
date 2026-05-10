// src/App.jsx — Tours Preview Router
// Maps the 6 onboarding pages to their /welcome routes
// Per MULTI_PAGE_ARCHITECTURE.md

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Pronunciation from './pages/Pronunciation.jsx';
import Conversations from './pages/Conversations.jsx';
import Coach from './pages/Coach.jsx';
import Voice from './pages/Voice.jsx';
import Progress from './pages/Progress.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root redirects to /welcome so the landing is the home page */}
        <Route path="/" element={<Navigate to="/welcome" replace />} />

        {/* Landing */}
        <Route path="/welcome" element={<Landing />} />

        {/* The 5 Tours */}
        <Route path="/welcome/pronunciation" element={<Pronunciation />} />
        <Route path="/welcome/conversations" element={<Conversations />} />
        <Route path="/welcome/coach"         element={<Coach />} />
        <Route path="/welcome/voice"         element={<Voice />} />
        <Route path="/welcome/progress"      element={<Progress />} />

        {/* Anything else → bounce to landing */}
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </BrowserRouter>
  );
}