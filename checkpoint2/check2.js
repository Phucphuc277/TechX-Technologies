const API_KEY = "2c6b6deb1f7925cd8b8e9845e3c2ae4d";

async function getWeatherByCity() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetchWeather(url);
}

async function getWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
                fetchWeather(url);
            },
            (error) => {
                alert("Unable to retrieve location!");
                console.error(error);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

async function fetchWeather(url) {
    console.log("Fetching URL:", url); 
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("API Response:", data); 
        displayWeather(data);
    } catch (error) {
        alert("Error fetching weather data!");
        console.error(error);
    }
}

function displayWeather(data) {
    if (data.cod !== 200) {
        document.getElementById("weatherResult").innerHTML = `<p class="text-danger">City not found!</p>`;
        return;
    }

    const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weatherResult").innerHTML = `
        <div class="card p-4 text-center">
            <h3>Weather App</h3>
            <img src="${weatherIcon}" alt="Weather Icon">
            <h2>${data.main.temp}°C</h2>
            <p class="text-capitalize">${data.weather[0].description}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${data.name}, ${data.sys.country}</p>
            <div class="d-flex justify-content-around mt-3">
                <div>
                    <p>${data.main.feels_like}°C</p>
                    <p>Feels like</p>
                </div>
                <div>
                    <p>${data.main.humidity}%</p>
                    <p>Humidity</p>
                </div>
            </div>
        </div>
    `;
}
