import cityList from "./assets/city-list.json";

const API_KEY = "18";
const searchForm = document.getElementById("search");
const resultSection = document.getElementById("weather");

const checkJSON = async (e) => {
  e.preventDefault();
  const inputValue = e.target.elements.location.value;
  try {
    const potentials = await cityList.filter((city) => {
      return city.name.toLowerCase() === inputValue.toLowerCase();
    });
    displayWeather(potentials, inputValue);
  } catch (error) {
    console.log(error);
  }
};

const displayWeather = (potentials) => {
  if (potentials.length === 0) {
    console.log("Nothing!");
  } else {
    grabForecast(potentials[0].name);
  }
};

const grabForecast = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: "cors" });
    const data = await response.json();
    let weather = data.weather[0].main;
    appendThing(weather);
  } catch (error) {
    console.log(error);
  }
};

const appendThing = (weather) => {
  let weatherHTML = ` 
  <div>
    <h1>${weather}</h1>
  </div>
  `;
  resultSection.innerHTML = weatherHTML;
};


export {
  checkJSON
};


