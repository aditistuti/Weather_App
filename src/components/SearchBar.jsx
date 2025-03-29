
import { useState, useEffect } from "react";

const SearchBar = ({ onSearch, theme = "light" }) => {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(storedHistory);
  }, []);

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);

      const updatedHistory = [query, ...history.filter((item) => item !== query)].slice(0, 5);
      setHistory(updatedHistory);

      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));


      setQuery("");
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
 
      <div className="flex w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name..."
          onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Press Enter to Search
          className={`w-full p-3 rounded-l-lg focus:outline-none transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white border border-gray-600"
              : "bg-white text-gray-900 border border-gray-300"
          }`}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

 
      {history.length > 0 && (
        <div className="mt-4 w-full text-center">
          <h3
            className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Search History:
          </h3>
          <div
            className={`flex justify-center gap-2 p-2 border rounded-lg flex-wrap transition-colors duration-300 ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            {history.map((item, index) => (
              <span
                key={index}
                onClick={() => onSearch(item)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
