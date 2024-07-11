import { useEffect, useState } from "react";
import axios from "axios";

const Map = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [address, setAddress] = useState({ city: "", country: "" });
  const [status, setStatus] = useState("Đang lấy vị trí...");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation({ lat, lng });
          setStatus("Vị trí của bạn là:");
          getCityAndCountry(lat, lng);
        },
        (error) => {
          console.error("Error getting location", error);
          setStatus("Không thể lấy vị trí của bạn.");
        }
      );
    } else {
      setStatus("Trình duyệt của bạn không hỗ trợ lấy vị trí.");
    }
  }, []);

  const getCityAndCountry = async (lat, lng) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=3c93cb4a7e774f9b8e218edc60fe80d8`
      );
      const { city, country } = response.data.results[0].components;
      console.log(
        "response.data.results[0].components",
        response.data.results[0].components
      );
      setAddress({ city, country });
    } catch (error) {
      console.error("Error getting address", error);
    }
  };

  return (
    <div>
      <p id="posStatus">{status}</p>
      {location.lat && location.lng && (
        <p id="locInfo">
          Latitude: {location.lat}, Longitude: {location.lng}
          <br />
          City: {address.city}, Country: {address.country}
        </p>
      )}
    </div>
  );
};

export default Map;
