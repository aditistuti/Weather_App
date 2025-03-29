# Weather App

## Introduction

The Weather App is a user-friendly application that provides real-time weather updates for cities worldwide. Built with React.js, it offers a sleek and responsive interface, ensuring a seamless user experience.

## Features

### 🌍 **Core Functionality**

- Search for any city using an intuitive **search bar**
- Fetch and display weather details with a **single click or Enter key**

- Responsive **weather information card** showing:
  - **City Name**
  - **Temperature** (°C)
  - **Weather Condition** (Sunny, Rainy, Snowy, etc.)
  - **Humidity** (%)
  - **Wind Speed** (km/h)
  - **Weather Icon** (fetched from API)

- **Loading state** while fetching data
- **Error handling** for invalid city names or API failures
- **Recent Search History**: View last 5 searched cities
- **Dark/Light Mode**: Toggle themes for better readability
- **Refresh Option**: Update weather details instantly

## 📡 API Integration

- Uses OpenWeatherMap **Current Weather API** to fetch real-time data.
- API Endpoint:
  ```sh
  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={YOUR_API_KEY}&units=metric
  ```

## 🛠️ Tech Stack

- **Framework**: React.js (powered by Vite for faster performance)
- **State Management**: React Hooks (useState, useEffect, Context API)
- **Styling**: Tailwind CSS for a modern and responsive layout
- **Error Handling**: Clear, user-friendly messages for failed API requests
- **Cross-Device Support**: Fully responsive UI for both **mobile and desktop**

## 🚀 Installation & Setup

### Prerequisites

- Install **Node.js** and ensure a working React.js environment

### Steps to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/aditistuti/Weather_App.git
   ```

2. Navigate to the project directory:
   ```sh
   cd weather-app
   ```

3. Install required dependencies:
   ```sh
   npm install
   ```

4. Configure API key by creating a `.env` file in the root directory:
   ```sh
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```sh
   npm run dev
   ```

6. Open `http://localhost:5173/` in your browser.

