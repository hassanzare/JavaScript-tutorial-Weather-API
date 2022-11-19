let weatherAPIKey = "5271df1c028dc685653a2c7803491142";
let weatherBaseEndpoint =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" +
  weatherAPIKey;

let getWeatherByCityName = async (city) => {
  let endpoint = weatherBaseEndpoint + "&q=" + city;
  let response = await fetch(endpoint);
  let weather = await response.json();
  console.log(weather);
};

getWeatherByCityName("New York");
