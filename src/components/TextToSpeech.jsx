import React from "react";

const TextToSpeech = () => {
  const handleClick = () => {
    const text =
      "Một trong số ngành học thuộc nhóm ngành kinh tế - quản trị được nhiều thí sinh quan tâm trong kỳ thi tuyển sinh là logistics (chuỗi cung ứng) với nhiều ưu điểm. Tiến sĩ Nguyễn Hoàng Phương Linh (Giảng viên Khoa Quản trị Kinh doanh - Trường Đại";
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  };
  return (
    <div className="ml-[20px]">
      <button className="p-2 bg-red-300" onClick={handleClick}>
        Speaking
      </button>
    </div>
  );
};

export default TextToSpeech;
