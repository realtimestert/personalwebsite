const currentTemp = document.querySelector('#current-temp');

const weatherIcon = document.querySelector('#weather-icon');

const captionDesc = document.querySelector('figcaption');

const myKey = "0c63d582f7628117ae63a49299dfbd53";
const latitude = 33.950175101515974;
const longitude = -83.35544263381597;

const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const tempRounded = Number(data.main.temp.toFixed(1));
    currentTemp.innerHTML = `${tempRounded}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}