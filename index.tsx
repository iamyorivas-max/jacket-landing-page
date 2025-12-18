
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Catch and log global errors for easier debugging on remote platforms like Vercel
window.addEventListener('error', (event) => {
  console.error('Environment Error Caught:', event.message, 'at', event.filename, ':', event.lineno);
});

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical: Could not find root element to mount the application.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (renderError) {
    console.error("Critical: Failed to initialize the application.", renderError);
    rootElement.innerHTML = `
      <div style="padding: 40px; font-family: 'Inter', sans-serif; text-align: center; color: #333;">
        <h2 style="font-weight: 800; text-transform: uppercase;">Initialization Error</h2>
        <p style="color: #666;">We encountered a problem loading the store experience. Please refresh the page or check the developer console for details.</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 12px 24px; background: black; color: white; border: none; font-weight: 700; cursor: pointer; border-radius: 4px;">RETRY LOADING</button>
      </div>
    `;
  }
}
