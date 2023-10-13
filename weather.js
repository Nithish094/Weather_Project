let Sub = () => {
  let cityName = document.getElementById("display").value;
  let input = document.getElementById("input1");
  input.innerHTML = cityName;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=29fbd063a5aaeb6bcee1a92a1f9ff8e7`
  )
  
    .then((val) => val.json())
    .then((val) => {
      console.log(val);
      // console.log(val.main.humidity, "humidity");
      // console.log(val.wind.speed, "air speed");
      // console.log(val.visibility / 1000, "visibility");
      // console.log(val.weather[0].icon);
      let image = val.weather[0].icon;
      document.getElementById("temp").innerHTML =
        Math.floor(val.main.temp - 273.15) + "℃ Temperature"; //kelvin to celcius
      document.getElementById("humidity").innerHTML =
        val.main.humidity + "% Humidity";
      let url = `https://openweathermap.org/img/wn/${image}@2x.png`;
      document.getElementById("img").innerHTML = `<img src=" ${url}  " />`;
      document.getElementById("wind").innerHTML =
        Math.floor(val.wind.speed) + "Km/h ▼ wind speed";
      document.getElementById("visibi").innerHTML =
        val.visibility / 1000 + " Km Visibility";
    });
};
