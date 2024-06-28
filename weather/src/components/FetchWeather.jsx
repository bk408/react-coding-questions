import axios from "axios";
import { useState } from "react";

const FetchWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [errors, setErrors] = useState("");

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const Weather = async () => {
    try {
      if (city.trim() !== "") {
        const response = await axios.get(
          `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`
        );
        setWeather(response.data);
        setErrors("");
      }
    } catch (err) {
      setErrors("City not found. Please try again");
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Weather();
  };

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {errors && <p>{errors}</p>}

      {weather && (
        <div>
          <h2> {weather.location.name} </h2>
          <h5> humidity: {weather.data.values.humidity} </h5>
          <h5> rainIntensity: {weather.data.values.rainIntensity} </h5>
          <h5> temperature: {weather.data.values.temperature} </h5>
          <p> uvIndex: {weather.data.values.uvIndex} </p>
          <p> visibility: {weather.data.values.visibility} </p>
          <p> windDirection: {weather.data.values.windDirection} </p>
          <p> windGust: {weather.data.values.windGust} </p>
          <p> windSpeed: {weather.data.values.windSpeed} </p>
        </div>
      )}
    </div>
  );
};

export default FetchWeather;
