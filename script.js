
const apiKey = "35de2ab2cdmshb46a969ec8d631bp131acbjsn1453b7e2901d";
const apiHost = "weatherapi-com.p.rapidapi.com";

// Function to fetch weather data
async function fetchWeather(city = "Mumbai") {
  const url = `https://${apiHost}/current.json?q=${city}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": apiHost,
      },
    });

    const data = await response.json();
    console.log(`Weather Data for ${city}:`, data);

    if (data.error) {
      alert(`City not found: ${city}`);
      return null;
    }

    // Update UI for searched city
    if (city !== "Mumbai" || document.getElementById("search-city").value) {
      document.getElementById("city-name").innerText = data.location.name;
      document.getElementById("temp_c").innerText = data.current.temp_c;
      document.getElementById("temp_f").innerText = data.current.temp_f;
      document.getElementById("humidity").innerText = data.current.humidity;
      document.getElementById("cloud").innerText = data.current.cloud;
      document.getElementById("wind_dir").innerText = data.current.wind_dir;
      document.getElementById("pressure_in").innerText = data.current.pressure_in;
      document.getElementById("feelslike_c").innerText = data.current.feelslike_c;
      document.getElementById("heatindex_c").innerText = data.current.heatindex_c || "N/A";
      document.getElementById("dewpoint_c").innerText = data.current.dewpoint_c || "N/A";
      document.getElementById("uv").innerText = data.current.uv;
    }

    return data;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    alert("Failed to fetch weather. Please try again.");
    return null;
  }
}

// Fetch Mumbai weather on page load
fetchWeather();

// Search button event listener
document.getElementById("search-btn").addEventListener("click", async () => {
  const city = document.getElementById("search-city").value.trim();
  if (city) {
    await fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

// Cities for table
const cities = ["Bangalore", "Chennai", "Kolkata", "Lucknow", "Pune", "Dubai"];

async function updateWeatherTable() {
  const tableBody = document.querySelector("table tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  // Fetch weather data for all cities in parallel
  const weatherData = await Promise.all(cities.map((city) => fetchWeather(city)));

  // Populate table with valid data
  weatherData.forEach((data, index) => {
    if (data) {
      const row = `
        <tr>
          <th scope="row" class="text-start">${data.location.name}</th>
          <td>${data.location.localtime || "N/A"}</td>
          <td>${data.current.temp_c || "N/A"}°C</td>
          <td>${data.current.temp_f || "N/A"}°F</td>
          <td>${data.current.feelslike_c || "N/A"}°C</td>
          <td>${data.current.humidity || "N/A"}%</td>
          <td>${data.current.heatindex_c || "N/A"}°C</td>
          <td>${data.current.dewpoint_c || "N/A"}°C</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    }
  });
}

// Update table on page load
updateWeatherTable();

