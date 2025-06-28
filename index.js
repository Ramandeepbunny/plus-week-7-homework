function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let humidityElement = document.querySelector("#Humidity");
  let humidityElement.innerHTML = `${response.data.temperature.humidity}%`;


}


function searchcity(city) {
  let apiKey = "60c3d936b5fef44at07f1bcc18a1ob97";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);
}



function SearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-Input");
  let cityElement = document.querySelector("#City");
  cityElement.innerHTML = searchInput.value;
  searchcity(searchInput.value);
}
let searchFormElement =  document.querySelector("#search-form");
searchFormElement.addEventListener("submit", SearchSubmit);