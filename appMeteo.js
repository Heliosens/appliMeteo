// get place to write info
let header = document.querySelector('header').getElementsByTagName('span');
let description  = document.getElementById("description");
let section = document.querySelector('#logo');
let sun = section.getElementsByTagName('span');


// create xhr
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=fourmies&units=metric&lang=fr&appid=bb42fe4b0d1ec83e0f25ea6c292817ec");
xhr.responseType = "json";

setInterval(()=>header[1].innerHTML = new Date().toLocaleTimeString(),1000);

// answer traitement
xhr.onload = function () {
    // if fail quit function
    if(xhr.status !== 200){
        return;
    }

    // get response
    let info = xhr.response;
    console.log(info);

    // write city name
    header[0].innerHTML = info.name;
    // write weather description
    description.innerHTML = info.weather[0].description;
    // temperature
    sun[0].innerHTML = "Jour : " + info.main.temp_max + "°";
    sun[1].innerHTML = "Nuit : " + info.main.temp_min + "°";
    // get sun hours
    sun[2].innerHTML = "Levé du soleil : " + new Date(info.sys.sunrise * 1000).toLocaleTimeString();
    sun[3].innerHTML = "Couché du soleil : " + new Date(info.sys.sunset * 1000).toLocaleTimeString();
    let x = info.weather[0].icon;
    console.log(x);
    section.style.backgroundImage = "url('http://openweathermap.org/img/wn/" + x + "@2x.png')";
}

xhr.send();

// todo use https://openweathermap.org/weather-conditions
