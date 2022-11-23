import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Schedule from './Components/Schedule';
import Nearby from './Components/Nearby';
import './App.css';

function App() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Schedule />
    <Nearby />

   </div>
  );
}

export default App;
