import { Hero } from './components/Hero.jsx';

import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
