app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const unit = req.query.unit || 'metric'; // Default to 'metric' (Celsius) if unit is not provided

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=${unit}`;
    console.log("Weather API URL:", weatherUrl); // Log the URL for debugging

    const response = await fetch(weatherUrl);

    if (!response.ok) {
      // Directly return "City not found" error if the response is not OK
      return res.status(404).json({ error: "City not found" });
    }

    const data = await response.json();

    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      windSpeed: data.wind.speed,
      pressure: data.main.pressure,
      icon: data.weather[0].icon, // Send the icon code
    };

    res.json(weatherData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});
