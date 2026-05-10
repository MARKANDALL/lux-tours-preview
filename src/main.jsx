// src/main.jsx — entry point
// Mounts the App. Includes Montserrat + JetBrains Mono fonts via Google Fonts
// since the Tours' inline styles reference these specifically.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Inject Google Fonts directly so we don't have to touch index.html
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap';
document.head.appendChild(fontLink);

// Reset default Vite styles that would interfere with the Tours' design system
const resetStyle = document.createElement('style');
resetStyle.textContent = `
  body { margin: 0; padding: 0; }
  #root { min-height: 100vh; }
`;
document.head.appendChild(resetStyle);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);