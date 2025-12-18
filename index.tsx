
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Global error listener for debugging
window.addEventListener('error', (event) => {
  console.error('Runtime Error:', event.message, 'at', event.filename, ':', event.lineno);
});

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render React app:", error);
  }
} else {
  console.error("Root element not found");
}
