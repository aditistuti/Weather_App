const WeatherCard = ({ weather, theme = "light" }) => {
  if (!weather) return null;

  return (
    <div
      className={`p-4 rounded-lg shadow-md text-center transition-colors duration-0 ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
        {weather.weather[0].description}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />
      <p className="text-2xl">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
    </div>
  );
};

export default WeatherCard;
