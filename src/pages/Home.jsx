import { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

const API_KEY = "2b190a84b6ba31956336c3dc54bf3ebe";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setCity(cityName);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Try again.");
    }
    setLoading(false);
  };

  const refreshWeather = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`relative shadow-lg p-6 rounded-lg w-full max-w-md text-center transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Theme Toggle Icon */}
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 text-blue-500 hover:text-blue-600 transition"
        >
          {theme === "light" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m8-10h2M2 12H4m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414M18.364 5.636l1.414-1.414M4.222 19.778l1.414-1.414M12 6a6 6 0 100 12 6 6 0 000-12z"/>
            </svg>
          )}
        </button>

        {/* Title */}
        <h1 className={`text-3xl font-bold mb-6 ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}>
          Weather App
        </h1>

        {/* Search Bar */}
        <SearchBar onSearch={fetchWeather} theme={theme} />

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center items-center mt-6">
            <div
              className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {/* Weather Display */}
        {weather && (
          <div className="mt-6 flex flex-col items-center">
            <WeatherCard weather={weather} theme={theme} />
            <button
              onClick={refreshWeather}
              className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition text-lg"
            >
              Refresh
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
