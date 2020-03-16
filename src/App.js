import React from 'react';
import profileImage from './img/aadeshroy.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>React First Application</h1>
        <h2>Author: Aadesh Roy</h2>
        <img src={profileImage} alt="aadeshroy"/>
    </div>
  );
}

export default App;
