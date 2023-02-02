let result = document.getElementById("result");
let cityRef = document.getElementById("city");
let searchBtn = document.getElementById("search-btn");
let key = "e46a46dea9859f77c5e897a1466aa7d2";
// Function untuk mengambil API dari Weather dengan FETCH

let getWeather = () => {
  let cityValue = cityRef.value;

  //   Jika tidak ada nilai dari variabel city
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please Enter a City Name</h3>`;
  }
  //   Jika nilai city nya ada maka
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityRef.value = "";
    // Jadi Promise
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        // Jika ada, jadi JSON
        console.log(data);
        let icon = data.weather[0].icon;
        let main = data.weather[0].main;
        let desc = data.weather[0].description;
        let temp = data.main.temp;
        let tempMin = data.main.temp_min;
        let tempMax = data.main.temp_max;

        result.innerHTML = `
        <h2>${data.name}</h2>
        <h2 class="weather"></h2>
        <h4 class="desc">${main}</h4>
        <h4 class="desc">${desc}</h4>
        <img src="https://openweathermap.org/img/w/${icon}.png"/>
        <h1>${temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${tempMin}</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${tempMax}</h4>
            </div>
        </div>
        
        `;
      })

      //   Jika Fetch Tidak Valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City Not Found </h3>`;
      });
  }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
