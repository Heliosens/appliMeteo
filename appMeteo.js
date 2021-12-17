// get place to write info
let city = document.querySelector('header').querySelector('span');
let description  = document.getElementById("description");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Fourmies&lang=fr&appid=bb42fe4b0d1ec83e0f25ea6c292817ec");
xhr.responseType = "json";

xhr.onload = function () {
    console.log(xhr.status);
    if(xhr.status !== 200){
        console.log("fail " + xhr.status)
        return;
    }

    let info = xhr.response;
    console.log(info);
    city.innerHTML = info.name;
    description.innerHTML = info.weather[0].description;
}


xhr.send();
