function populateCity(citydata){
    let temp = citydata.main.temp;
    let weather = citydata.weather[0].main;
    let humidity = citydata.main.humidity;
    let wind_speed = citydata.wind.speed;
    console.log(temp,weather,humidity,wind_speed);
    innerresult1.innerHTML = `${temp} ℃`;
    innerresult2.innerHTML = `${weather}`;
    innerresult3.innerHTML = `${humidity} %` ;
    innerresult4.innerHTML = `${wind_speed} km/h`
}

function fetchCity(){
    let city_name = cityname.value;
    // console.log(city_name);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=fda8b35a2dc8a4b2b2a29e9b41a803bd&units=metric `;
    fetch(url).then(res=>res.json()).then(data=>populateCity(data));
}