import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Cursor from './components/Cursor';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen
          onComplete={() => setShowSplash(false)}
          duration={3500}
        />
      )}
      <Cursor />
      <LandingPage />
    </>
  );
};

export default App;