import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Loader from './Loader';
import MainContent from './MainContent';
import Model from './Model';
import Roadster from './Roadster';
import { Canvas } from '@react-three/fiber';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="main-content">
          <Navbar />
          <Canvas camera={{ fov: 45 }} style={{ position: 'absolute', left: '0px', top: '40px' }}>
            <Model />
            <Roadster camera={{ fov: 45}}/>
          </Canvas>
          <MainContent />
        </div>
      )}
    </div>
  );
}

export default App;

