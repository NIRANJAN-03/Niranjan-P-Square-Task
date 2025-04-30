let currentUnit = 'metric'; // Default to Celsius

// Run getWeather on Enter key press
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("cityInput");
  cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      getWeather();
    }
  });
});

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    document.getElementById("weatherResult").innerText = "Please enter a city name.";
    return;
  }

  document.getElementById("weatherResult").innerHTML = "<p>Loading...</p>";
  document.getElementById("unitToggleButton").style.display = 'none';

  fetch(`http://localhost:8080/weather?city=${city}&unit=${currentUnit}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

      document.getElementById("weatherResult").innerHTML = `
        <div class="weather-details">
          <h3>Weather Details for ${data.city}</h3>
          <img src="${iconUrl}" alt="${data.description}" width="100" height="100" />
          <p><strong>Temperature:</strong> ${data.temperature} ${currentUnit === 'metric' ? '°C' : '°F'}</p>
          <p><strong>Humidity:</strong> ${data.humidity}%</p>
          <p><strong>Condition:</strong> ${data.description}</p>
          <p><strong>Wind Speed:</strong> ${data.windSpeed} km/h</p>
          <p><strong>Pressure:</strong> ${data.pressure} hPa</p>
        </div>
      `;

      document.getElementById("unitToggleButton").style.display = 'inline-block';
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      document.getElementById("weatherResult").innerText = error.message;
    });
}

// Toggle between Celsius and Fahrenheit
function toggleUnit() {
  currentUnit = currentUnit === 'metric' ? 'imperial' : 'metric';
  document.getElementById("unitToggleButton").textContent =
    currentUnit === 'metric' ? "Switch to °F" : "Switch to °C";
  getWeather(); // Refresh weather in new unit
}
