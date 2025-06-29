




function formatDate(date) { 
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[date.getDay()];  
  let minutes = date.getMinutes();
  let hour = date.getHours();
  
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hour}:${minutes}`;
  
}


function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let temperature = response.data.temperature.current;
  let humidityElement = document.querySelector("#Humidity");
  let windElement = document.querySelector("#Wind");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#emoji");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="emoji" />`;
  descriptionElement.innerHTML = `${response.data.condition.description}`;
  windElement.innerHTML = `${response.data.wind.speed}`;
  temperatureElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
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

function backgroundColor(color) {
  if formatDate(date) =
}