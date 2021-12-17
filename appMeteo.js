// get place to write info
let city = document.querySelector('header').querySelector('span');
let time = document.getElementById('time');
let description  = document.getElementById("description");

// create xhr
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Fourmies&lang=fr&appid=bb42fe4b0d1ec83e0f25ea6c292817ec");
xhr.responseType = "json";

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
    city.innerHTML = info.name;
    // write weather description
    description.innerHTML = info.weather[0].description;

    // write hour of sunrise
    let time = new Date(info.sys.sunrise * 1000).toLocaleTimeString();

}


xhr.send();
