import { useState, useEffect } from 'react';
import cut_tree from '../assets/environment/cut_tree.png';
import cycle_drive_1 from '../assets/environment/cycle_drive_1.png';
import energy_renewable1 from '../assets/environment/energy_renewable1.png';
import energy_renewable2 from '../assets/environment/energy_renewable2.png';
import nilong from '../assets/environment/nilong.png';
import plan_tree from '../assets/environment/plan_tree.png';
import products_natural from '../assets/environment/products_natural.png';
import save_water from '../assets/environment/save_water.png';
import throw_trash1 from '../assets/environment/throw_trash1.png';
import throw_trash2 from '../assets/environment/throw_trash2.png';

const scoreImages = [
  cycle_drive_1, energy_renewable1, energy_renewable2, plan_tree, products_natural, save_water
];

const healthImages = [
  cut_tree, nilong, throw_trash1, throw_trash2
];

const Game = () => {
  const [time, setTime] = useState(30);
  const [health, setHealth] = useState(3);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [roundComplete, setRoundComplete] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused && time > 0) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (time === 0) {
      setGameOver(true);
    }
  }, [time, paused]);

  useEffect(() => {
    if (!gameOver && currentImages.length === 0) {
      setCurrentImages(generateRandomImages());
    }
  }, [gameOver, currentImages]);

  useEffect(() => {
    if (!gameOver && !roundComplete && currentImages.every(img => healthImages.includes(img))) {
      setRoundComplete(true);
    }
  }, [currentImages, gameOver, roundComplete]);

  useEffect(() => {
    if (roundComplete) {
      const timer = setTimeout(() => {
        startNextRound();
      }, 1000); // Delay to visualize the round completion

      return () => clearTimeout(timer);
    }
  }, [roundComplete]);

  const generateRandomImages = () => {
    const allImages = [...scoreImages, ...healthImages];
    return Array.from({ length: 5 }, () => allImages[Math.floor(Math.random() * allImages.length)]);
  };

  const handleClick = (index) => {
    const image = currentImages[index];
    if (scoreImages.includes(image)) {
      setScore(prevScore => prevScore + 1);
    } else if (healthImages.includes(image)) {
      setHealth(prevHealth => prevHealth - 1);
      if (health <= 1) {
        setGameOver(true);
      }
    }
    const newImages = currentImages.filter((_, i) => i !== index);
    setCurrentImages(newImages);
  };

  const startNextRound = () => {
    setRoundComplete(false);
    setCurrentImages(generateRandomImages());
  };

  const handleNewGame = () => {
    setTime(30);
    setHealth(3);
    setScore(0);
    setGameOver(false);
    setCurrentImages([]);
    setRoundComplete(false);
    setPaused(false);
  };

  const handlePause = () => {
    setPaused(true);
  };

  const handleContinue = () => {
    setPaused(false);
  };

  const handleGuide = () => {
    alert("Guide: Click on the good images to increase your score. Avoid the bad images to maintain your health.");
  };

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <button onClick={handlePause} style={{ padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Pause</button>
      <div className='flex flex-row'>
        <h2>Time: {time}s</h2>
        <h2 className='ml-3'>Health: {health}</h2>
        <h2 className='ml-3'>Score: {score}</h2>
      </div>
      {gameOver ? (
        <div>
          <h1 className="game-over" style={{ fontSize: '32px', marginBottom: '20px' }}>Game Over</h1>
          <button onClick={handleNewGame} style={{ padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>New Game</button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {currentImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="game item"
              onClick={() => handleClick(index)}
              style={{ width: '100px', height: '100px', margin: '10px', cursor: 'pointer', border: '1px solid #ccc', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)' }}
            />
          ))}
        </div>
      )}
      {paused && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', textAlign: 'center' }}>
            <h2>Game Paused</h2>
            <button onClick={handleNewGame} style={{ padding: '10px', fontSize: '16px', margin: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>New Game</button>
            <button onClick={handleContinue} style={{ padding: '10px', fontSize: '16px', margin: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Continue</button>
            <button onClick={handleGuide} style={{ padding: '10px', fontSize: '16px', margin: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Guide</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
