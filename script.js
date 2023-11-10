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

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

async function getWeather(city) {
  const cityName = await getWeatherInfo(city);
  console.log(cityName);
}
getWeather("kushire");
