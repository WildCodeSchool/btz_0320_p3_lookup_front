import React, { useState, useEffect } from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';
import Router from './components/Router';
import LandingPage from './components/landingPage/LandingPage';

function App() {
  const [count, setCount] = useState(false);
  const timer = () => setTimeout(setCount(true), 3000);

  useEffect(() => {
    timer();
  }, []);

  if (count) {
    return (
      <Fade>
        <LandingPage />
      </Fade>
    );
  }

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
