import React, { useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const API_KEY = "0cb398b6e81132cd9fb907bc35d48bbd";

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((response) => setWeatherData(response.data))
      .catch((error) =>
        setError("City not found or an error occurred!", error)
      );
  };

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        name="city"
        id="City"
        placeholder="EnterCity"
        value={city}
        onChange={handleCity}
      />
      <br /> <br />
      <button className="btn btn-primary" onClick={getWeather}>
        Find
      </button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature:{weatherData.main.temp}</p>
          <p>feels_like: {weatherData.main.feels_like}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
