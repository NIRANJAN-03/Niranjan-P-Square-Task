# 🌦️ Weather App

A simple Weather App built with HTML, CSS, JavaScript, Node.js, and Express. It fetches weather data from the OpenWeatherMap API and displays temperature, humidity, weather conditions, and more.

---

## 🚀 Features

- Get real-time weather info for any city
- Toggle between Celsius and Fahrenheit
- Responsive design for mobile and desktop
- Weather icon and condition display
- Uses OpenWeatherMap API

---

## 📁 Project Structure

```
Weather App/
├── server.js
├── README.md
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ⚙️ Setup & Installation

1. **Clone the repo:**
   ```bash
   git clone <https://github.com/NIRANJAN-03/Niranjan-P-Square-Task.git>
   cd "Weather App"
   ```

2. **Install dependencies:**
   ```bash
   npm install express node-fetch
   ```

3. **Replace the API key:**
   Open `server.js` and replace:
   ```js
   const apiKey = 'YOUR_OpenWeatherMap_API_KEY';
   ```
   with your actual [OpenWeatherMap API key](https://openweathermap.org/api).

4. **Run the app:**
   ```bash
   node server.js
   ```

5. **View in browser:**
   Navigate to `http://localhost:8080`

---

## 🛠️ Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- API: OpenWeatherMap

---

## 📸 Screenshot

![screenshot](public/weather.png)

---

## 📄 License

This project is open-source and free to use.
