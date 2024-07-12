import { useState, useEffect } from "react";
import cut_tree from "../assets/environment/cut_tree.png";
import cycle_drive_1 from "../assets/environment/cycle_drive_1.png";
import energy_renewable1 from "../assets/environment/energy_renewable1.png";
import energy_renewable2 from "../assets/environment/energy_renewable2.png";
import nilong from "../assets/environment/nilong.png";
import plan_tree from "../assets/environment/plan_tree.png";
import products_natural from "../assets/environment/products_natural.png";
import save_water from "../assets/environment/save_water.png";
import throw_trash1 from "../assets/environment/throw_trash1.png";
import throw_trash2 from "../assets/environment/throw_trash2.png";

const images = [
  { src: cycle_drive_1, hint: "Đi xe đạp giúp bảo vệ môi trường." },
  { src: energy_renewable1, hint: "Sử dụng năng lượng tái tạo." },
  { src: energy_renewable2, hint: "Năng lượng tái tạo từ mặt trời." },
  { src: plan_tree, hint: "Trồng cây xanh giúp bảo vệ môi trường." },
  { src: products_natural, hint: "Sử dụng sản phẩm tự nhiên." },
  { src: save_water, hint: "Tiết kiệm nước." },
  { src: cut_tree, hint: "Chặt cây gây hại cho môi trường." },
  { src: nilong, hint: "Sử dụng nilong không thân thiện môi trường." },
  { src: throw_trash1, hint: "Vứt rác bừa bãi gây ô nhiễm." },
  { src: throw_trash2, hint: "Vứt rác không đúng nơi quy định." },
];

const scoreImages = [
  cycle_drive_1,
  energy_renewable1,
  energy_renewable2,
  plan_tree,
  products_natural,
  save_water,
];

const healthImages = [cut_tree, nilong, throw_trash1, throw_trash2];

const Game = () => {
  const [time, setTime] = useState(30);
  const [health, setHealth] = useState(3);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [roundComplete, setRoundComplete] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedHint, setSelectedHint] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    if (!paused && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
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
    if (
      !gameOver &&
      !roundComplete &&
      currentImages.every((img) => healthImages.includes(img.src))
    ) {
      setRoundComplete(true);
    }
  }, [currentImages, gameOver, roundComplete]);

  useEffect(() => {
    if (roundComplete) {
      const timer = setTimeout(() => {
        startNextRound();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [roundComplete]);

  const generateRandomImages = () => {
    return Array.from(
      { length: 5 },
      () => images[Math.floor(Math.random() * images.length)]
    );
  };

  const handleClick = (index) => {
    const image = currentImages[index];
    setSelectedHint(image.hint);
    setSelectedImage(image.src);
    if (scoreImages.includes(image.src)) {
      setScore((prevScore) => prevScore + 1);
    } else if (healthImages.includes(image.src)) {
      setHealth((prevHealth) => prevHealth - 1);
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
    setSelectedHint("");
    setSelectedImage(null);
  };

  const handlePause = () => {
    setPaused(true);
  };

  const handleContinue = () => {
    setPaused(false);
  };

  const handleGuide = () => {
    setShowGuide(true);
  };

  const closeGuide = () => {
    setShowGuide(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handlePause}
        className="p-2 text-lg bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
      >
        Pause
      </button>
      <div className="flex mt-4 space-x-4">
        <h2>Time: {time}s</h2>
        <h2>Health: {health}</h2>
        <h2>Score: {score}</h2>
      </div>
      {gameOver ? (
        <div className="mt-8 text-center">
          <h1 className="text-3xl mb-4">Game Over</h1>
          <button
            onClick={handleNewGame}
            className="p-2 text-lg bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
          >
            New Game
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center mt-4">
          {currentImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt="game item"
              onClick={() => handleClick(index)}
              className="w-24 h-24 m-2 cursor-pointer border rounded shadow-md hover:shadow-lg"
            />
          ))}
        </div>
      )}
      {selectedHint && (
        <div className="mt-4 p-4 bg-white shadow-md rounded border">
          <p>{selectedHint}</p>
        </div>
      )}
      {paused && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl mb-4">Game Paused</h2>
            <button
              onClick={handleNewGame}
              className="p-2 text-lg bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 m-2"
            >
              New Game
            </button>
            <button
              onClick={handleContinue}
              className="p-2 text-lg bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 m-2"
            >
              Continue
            </button>
            <button
              onClick={handleGuide}
              className="p-2 text-lg bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 m-2"
            >
              Guide
            </button>
          </div>
        </div>
      )}
      {showGuide && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl mb-4">Guide</h2>
            {selectedImage && (
              <div className="flex flex-col items-center">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-24 h-24 mb-4 border rounded shadow-md"
                />
                <p>{selectedHint}</p>
              </div>
            )}
            <button
              onClick={closeGuide}
              className="mt-4 p-2 text-lg bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
