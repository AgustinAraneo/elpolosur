import React from 'react';
import { createRoot } from 'react-dom/client';
import { useMediaQuery } from '@material-ui/core';
import Desktop from './components/desktop/Desktop';
import Mobile from './components/mobile/Mobile';
import 'tailwindcss/tailwind.css';
import './index.css'

function App() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div>
      {isMobile ? (
        <Mobile />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

