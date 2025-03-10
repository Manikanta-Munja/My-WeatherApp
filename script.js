const apiKey = "35de2ab2cdmshb46a969ec8d631bp131acbjsn1453b7e2901d";
const apiHost = "weatherapi-com.p.rapidapi.com";

// Function to fetch weather data and return it
function fetchWeather(city = "Mumbai") {
  const url = `https://${apiHost}/current.json?q=${city}`;

  return fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": apiHost,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(`Weather Data for ${city}:`, response);

      if (city === "Mumbai") {
        // Update city name
        document.getElementById("city-name").innerText = response.location.name;

        // Update weather details
        document.getElementById("temp_c").innerText = response.current.temp_c;
        document.getElementById("temp_f").innerText = response.current.temp_f;
        document.getElementById("humidity").innerText =
          response.current.humidity;
        document.getElementById("cloud").innerText = response.current.cloud;
        document.getElementById("wind_dir").innerText =
          response.current.wind_dir;
        document.getElementById("pressure_in").innerText =
          response.current.pressure_in;
        document.getElementById("feelslike_c").innerText =
          response.current.feelslike_c;
        document.getElementById("heatindex_c").innerText =
          response.current.heatindex_c;
        document.getElementById("dewpoint_c").innerText =
          response.current.dewpoint_c;
        document.getElementById("uv").innerText = response.current.uv;
      }

      return response; // Return data so it can be used in updateWeatherTable()
    })
    .catch((error) => {
      console.error(`Error fetching weather data for ${city}:`, error);
      return null;
    });
}

// Fetch initial weather for Mumbai on page load
fetchWeather();

// Add event listener to search button
document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("search-city").value;
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

const cities = ["Bangalore", "Chennai", "Kolkata", "Lucknow", "Pune", "Dubai"];

async function updateWeatherTable() {
  const tableBody = document.querySelector("table tbody");

  tableBody.innerHTML = "";

  // Fetch weather data for all cities in parallel
  const weatherData = await Promise.all(
    cities.map((city) => fetchWeather(city))
  );

  //  Ensure only valid data is added
  weatherData.forEach((data, index) => {
    if (data) {
      const row = `
        <tr>
          <th scope="row" class="text-start">${cities[index]}</th>
          <td>${data.location?.localtime || "N/A"}</td>
          <td>${data.current?.temp_c || "N/A"}°C</td>
          <td>${data.current?.temp_f || "N/A"}°F</td>
          <td>${data.current?.feelslike_c || "N/A"}°C</td>
          <td>${data.current?.humidity || "N/A"}%</td>
          <td>${data.current?.heatindex_c || "N/A"}°C</td>
          <td>${data.current?.dewpoint_c || "N/A"}°C</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    }
  });
}

// Call the function on page load to update the table
updateWeatherTable();
