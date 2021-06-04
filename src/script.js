let today = new Date();
console.log(today);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let nameDay = days[today.getDay()];
console.log(nameDay);

let hour = today.getHours();
console.log(hour);

let minutes = today.getMinutes();
console.log(minutes);

let dayAndTime = `${nameDay} ${hour}:${minutes}`;
console.log(dayAndTime);

let currentTime = document.querySelector("#current-date");
currentTime.innerHTML = dayAndTime;

//WEEK 5

function displayTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let apiKey = "50d24603e09f450a85b01b98d6805e3d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayCity(event) {
  event.preventDefault();
  //make an API call to OpenWeather API
  //once I get the API response, display the city and temperature
  let city = document.querySelector("#search-input").value;
  search(city);
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", displayCity);

search("New York");
