
import React from 'react';
import './App.css';
import  Blue from './components/BlueSquare.js';
import  Green from './components/GreenSquare.js';
import  Red from './components/RedSquare.js';

function App() {
  return (
    <div className="Square" >
      <Blue word="blue" size="10" />
      <Green word="green" size="20"/>
      <Red word="red" size="30"/>
    </div>
  );
}

export default App;
