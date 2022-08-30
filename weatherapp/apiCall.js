const api = "48bc8c748bf61b3e6874da9dee99f06d"
const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('#location');
const tempC = document.querySelector('.c');
// const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');


// const lat = 5.603717
// const long = -0.1869964 

function locationCall(lat, long) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`

    fetch(apiUrl).then((response) => {
        return response.json()
    }).then((data) => {
        const { temp } = data.main
        const place = data.name
        const { description, icon } = data.weather[0]
        const { sunrise, sunset } = data.sys
        console.log(temp, place, description, icon, sunrise, sunset)

        const fahrenheit = (temp * 9) / 5 + 32
        const sunriseGMT = new Date(sunrise * 1000);
        const sunsetGMT = new Date(sunset * 1000);
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        console.log(fahrenheit, sunriseGMT, sunsetGMT)

        iconImg.src = iconUrl;
        loc.textContent = `${place}`;
        desc.textContent = `${description}`;
        tempC.textContent = `${temp.toFixed(2)} °C`;
        // tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
        sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
        sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;

    })
}

locationCall(5.603717, -0.1869964)
// locationCall(5.803717, -0.0869964)

// window.addEventListener('load', () => {
//     let lat;
//     let long;

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             console.log(position)
//             long = position.coords.longitude
//             lat = position.coords.latitude
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`

//             console.log(apiUrl)
//             fetch(apiUrl).then((response) => {
//                 return response.json()
//             }).then((data) => {
//                 const { temp } = data.main
//                 const place = data.name
//                 const { description, icon } = data.weather[0]
//                 const { sunrise, sunset } = data.sys
//                 console.log(temp, place, description, icon, sunrise, sunset)

//                 const fahrenheit = (temp * 9) / 5 + 32
//                 const sunriseGMT = new Date(sunrise * 1000);
//                 const sunsetGMT = new Date(sunset * 1000);
//                 const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
//                 console.log(fahrenheit, sunriseGMT, sunsetGMT)

//                 iconImg.src = iconUrl;
//                 loc.textContent = `${place}`;
//                 desc.textContent = `${description}`;
//                 tempC.textContent = `${temp.toFixed(2)} °C`;
//                 // tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
//                 sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
//                 sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;

//             })
//         })
//     } else (
//         alert("Location not found")
//     )
// });