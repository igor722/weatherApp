window.addEventListener ('load', ()=>{

    let long;
    let lat;
    let temperatureDescription = document.querySelector('.description');
    let temperatureDegree      = document.querySelector('.temp');
    let locationTimezone       = document.querySelector('.city');
    let weatherIcon            = document.querySelector('.weather-icon');
    let feelsLike              = document.querySelector('p .feels-like');
    let time                   = document.querySelector('.time');


    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat  = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6c4a764f3b9bf7959558e0e338a93a8c`;
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const temp        = data.main.temp; //kelvin
                const description = data.weather[0].main;
                const location    = data.name;
                const icon        = data.weather[0].icon;
                const feel        = data.main.feels_like;

                
                //DOM
   
                temperatureDegree.textContent      = Math.floor(temp - 273.15); //celsius
                temperatureDescription.textContent = description;
                locationTimezone.textContent       = location;
                weatherIcon.innerHTML              = `<img class="icon" src="svgs/${icon}.svg"/>`;
                feelsLike.textContent              = Math.floor(feel - 273.15); //celsius
                time.textContent                   = h + ':' + m + '        ' + w + '   ' + d + '. ' + mo + ' ' + y;
                
            });
        });
    }  
});

var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
m = m > 9 ? m : '0' + m;
var w = date.getDay();
var d = date.getDate();
var mo = date.getMonth();
var y = date.getFullYear();

var month = new Array(12);
month[0]  = "Januar";
month[1]  = "Februar";
month[2]  = "März";
month[3]  = "April";
month[4]  = "Mai";
month[5]  = "Juni";
month[6]  = "Juli";
month[7]  = "August";
month[8]  = "September";
month[9]  = "Oktober";
month[10] = "November";
month[11] = "Dezember";

var mo = month[date.getMonth()];

var weekday = new Array(7);
weekday[0] = "So";
weekday[1] = "Mo";
weekday[2] = "Di";
weekday[3] = "Mi";
weekday[4] = "Do";
weekday[5] = "Fr";
weekday[6] = "Sa";

var w = weekday[date.getDay()];

console.log(h + ':' + m + '        ' + w + '   ' + d + '. ' + mo + ' ' + y);

