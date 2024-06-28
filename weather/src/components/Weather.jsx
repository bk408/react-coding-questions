import axios from "axios";
import { useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errors, setErrors] = useState("");
  const [city, setCity] = useState("");

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`
      );
      setWeatherData(response.data);
      setErrors("");
    } catch (err) {
      setErrors("Please Enter city name");
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>

      {errors && <p> {errors} </p>}

      {weatherData && (
        <div>
          <h4> {weatherData.location.name} </h4>
          <h5> humidity: {weatherData.data.values.humidity} </h5>
          <h5> rainIntensity: {weatherData.data.values.rainIntensity} </h5>
          <h5> temperature: {weatherData.data.values.temperature} </h5>
          <h5> uvIndex: {weatherData.data.values.uvIndex} </h5>
          <h5> visibility: {weatherData.data.values.visibility} </h5>
          <h5> windDirection: {weatherData.data.values.windDirection} </h5>
          <h5> windGust: {weatherData.data.values.windGust} </h5>
          <h5> windSpeed: {weatherData.data.values.windSpeed} </h5>
        </div>
      )}
    </div>
  );
};

export default Weather;
