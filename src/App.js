
import React from 'react';
import './App.css';
import  Blue from './components/BlueSquare.js';
import  Green from './components/GreenSquare.js';
import  Red from './components/RedSquare.js';

function App() {
  return (
    <div className="Square">
      <Blue />
      <Green/>
      <Red/>
    </div>
  );
}

export default App;
