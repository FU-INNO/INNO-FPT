import React from "react";

const TextToSpeech = () => {
  const handleClick = () => {
    const text = "hello world";
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  };
  return (
    <div className="mt-[200px]">
      <button className="p-2 bg-red-300" onClick={handleClick}>
        Speaking
      </button>
    </div>
  );
};

export default TextToSpeech;
