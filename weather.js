const apikey="e5382cdd421b1fc1983a494bbbe91f02";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericn=document.querySelector(".weather-icon")
async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
if(data.weather[0].main == "Clouds"){
    weathericn.src="cloud.png";

}
else if(data.weather[0].main == "Clear"){
    weathericn.src="sunny.png";
}

    else if(data.weather[0].main == "Rain"){
        weathericn.src="rainy.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericn.src="sunnyrainy.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericn.src="practice.png";
    }
}

searchbtn.addEventListener("click", ()=> {
    checkweather(searchbox.value);
})