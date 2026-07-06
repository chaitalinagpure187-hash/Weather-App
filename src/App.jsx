import React from 'react';
import { useState } from "react";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  async function searchWeather() {

    if (city === "") {
      alert("Please enter a city name");
      return;
    }
    const apiKey = "712bdaf9f8711b5da854b75493680af1";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  }

  return (
    <div>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button onClick={searchWeather}>
        Search
      </button>
      {weather && (
        <div className='conatiner'>
           <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="Weather"/>
          <p className='temperature'>{weather.main.temp} °C</p>
          <h3 className='city'> {weather.name}, {weather.sys.country}</h3>
          <h3 className="condition">{weather.weather[0].main}</h3>
          <div className='details'>
          <p className='info'>💧 Humidity: {weather.main.humidity}%</p>
          <p className='info'>💨 Wind Speed: {weather.wind.speed} m/s</p>
          <p className='info'>🌡 Feels Like: {weather.main.feels_like}°C</p>
          <p className='info'>🌍 Pressure: {weather.main.pressure} hPa</p>
          <p className='info'>🌅 Sunrise:{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p className='info'>🌇Sunset:{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
