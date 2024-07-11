import { useEffect, useState } from "react";

const Location = () => {
  const [posStatus, setPosStatus] = useState("");
  const [locInfo, setLocInfo] = useState({});
  useEffect(() => {
    locate();
  }, []);
  const locate = () => {
    setPosStatus("Đang lấy vị trí...");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setPosStatus("Vị trí của bạn là:");
        setLocInfo({
          latitude: lat,
          longitude: long,
          href: `https://www.openstreetmap.org/#map=19/${lat}/${long}`,
        });
      });
    } else {
      setPosStatus("Trình duyệt của bạn không hỗ trợ Geolocation.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={locate}
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
      >
        Get Location
      </button>
      <h1 id="posStatus" className="mb-4">
        {posStatus}
      </h1>
      {locInfo.href && (
        <a
          id="locInfo"
          href={locInfo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Latitude: {locInfo.latitude}, Longitude: {locInfo.longitude}
        </a>
      )}
    </div>
  );
};

export default Location;
