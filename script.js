async function getWeatherInfo(city) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4a22b1e816msh20d021da5de0141p1a2123jsn15aa64ed8a09",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  // cloud_pct.innHTML = cityName.cloud_pct;

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("error in fecth api :" + error);
  }
}

async function getWeather(city) {
  const cityName = await getWeatherInfo(city);

  document.getElementById("weather-info").innerHTML = "";
  // data to html
  document.getElementById("temp").innerHTML = cityName.temp;

  document.getElementById("cloud_pct").innerHTML = cityName.cloud_pct;

  document.getElementById("feels_like").innerHTML = cityName.feels_like;

  document.getElementById("humidity").innerHTML = cityName.humidity;

  document.getElementById("max_temp").innerHTML = cityName.max_temp;

  document.getElementById("min_temp").innerHTML = cityName.min_temp;

  document.getElementById("wind_degrees").innerHTML = cityName.wind_degrees;

  document.getElementById("wind_speed").innerHTML = cityName.wind_speed;

  // Convert the timestamp 1699663070 seconds to hours in AM/PM format

  function convertSecondsToTime(seconds) {
    const date = new Date(seconds * 1000); // Convert seconds to milliseconds
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleTimeString("en-US", options);
  }

  // Example usage
  const sunriseInSeconds = cityName.sunrise; // Replace with your actual sunrise time in seconds
  const sunsetInSeconds = cityName.sunset; // Replace with your actual sunset time in seconds

  const sunriseFormatted = convertSecondsToTime(sunriseInSeconds);
  const sunsetFormatted = convertSecondsToTime(sunsetInSeconds);

  document.getElementById("sunrise").innerHTML = sunriseFormatted;
  document.getElementById("sunset").innerHTML = sunsetFormatted;

  // Add if else statement to show bad weather if cloud cover percentage is above 50
  if (cityName.cloud_pct <= 10) {
    document.getElementById(
      "weather-info"
    ).innerHTML += `<p class="weather-warning">Clear sky! </p>`;
  } else if (cityName.cloud_pct > 10 && cityName.cloud_pct <= 25) {
    document.getElementById(
      "weather-info"
    ).innerHTML += `<p class="weather-warning"> Mostly clear sky </p>`;
  } else if (cityName.cloud_pct > 25 && cityName.cloud_pct <= 50) {
    document.getElementById(
      "weather-info"
    ).innerHTML += `<p class="weather-warning"> Partly cloudy sky </p>`;
  } else if (cityName.cloud_pct > 50 && cityName.cloud_pct <= 75) {
    document.getElementById(
      "weather-info"
    ).innerHTML += `<p class="weather-warning"> Mostly cloudy sky</p>`;
  } else if (cityName.cloud_pct > 75 && cityName.cloud_pct <= 100) {
    document.getElementById(
      "weather-info"
    ).innerHTML += `<p class="weather-warning"> Mostly cloudy sky</p>`;
  }
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("city-Name").innerHTML = city.value;
  getWeather(city.value);
});

getWeather("kolhapur");
