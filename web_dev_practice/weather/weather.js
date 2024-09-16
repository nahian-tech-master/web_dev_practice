const time = document.querySelector('#time p');
const today = document.getElementById('today');
const Temp = document.querySelector('#Temp');
const img = document.querySelector('#temp img')
const humidity = document.getElementById('humidity');
const info = document.getElementById('info');
const feel = document.getElementById('feel');
const higerLow = document.getElementById('higerLow');
const sky = document.getElementById('sky');
const one = document.getElementById("one");
const wet1 = document.getElementById("wet1");
const two = document.getElementById('two');
const wet2 = document.getElementById('wet2');
const three = document.getElementById("three");
const wet3 = document.getElementById("wet3");
const finder = document.getElementById('finder');
const searchTag = document.getElementById("cityInput");


const days = ['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];



// setInterval(()=>{
//     const Time = new Date();
//     const date = Time.toLocaleDateString();
//     const localTime= Time.toLocaleTimeString();
//     let day = Time.getDay();
//     time.textContent = localTime;
//     today.textContent = days[day].toUpperCase()+` - `+date;
// },1000)
async function getlocation() {
    navigator.geolocation.getCurrentPosition(successCallback);
}

const successCallback = async (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    
    const currenetWeaatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=18dc22ca5dbb46c19b4150632242008&q=${lat},${long}&days=7&aqi=yes&alerts=yes`;
    
    try {
        let response = await fetch(currenetWeaatherUrl);
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        setInterval(()=>{
            const Time = new Date();
            let hour =  Time.getHours();
            let min = Time.getMinutes().toString().padStart(2,0);
            let sec = Time.getSeconds().toString().padStart(2,0);
            let ampm = hour>=12 ? 'pm' : `am`;
            hour = hour%12 || 12;
            hour = hour.toString().padStart(2,0);
            let day = Time.getDay();
            let date = Time.getDate();
            let month = (Time.getMonth()+1);
            let year = Time.getFullYear();
            time.textContent = `${hour} : ${min} : ${sec} ${ampm}`;
            today.textContent = days[day].toUpperCase()+` - `+date+` / `+month+` / `+year; 
        },1000)
        const data = await response.json();
        const current = parseInt(data.current.last_updated.split(" ")[1].split(":")[0])
        console.log(data)
        const day = data.forecast.forecastday;
        
        updateTemperature(data.current.temp_c);
        updateIcone(data.current.condition.icon)
        updateOther(data.current);
    
    
        createWeeklyForecast(data.forecast.forecastday);
        hourly(data.forecast.forecastday);
        finder.style.display = "block";
        searchTag.value = data.location.name;
        
        // You can call your update functions here to display the data
    } catch (error) {
        console.error('Error fetching weather data', error);
    }
};



async function  submit(){
    const city = searchTag.value;
    const currenetWeaatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=18dc22ca5dbb46c19b4150632242008&q=${city}&days=7&aqi=yes&alerts=yes`;
    
    try{
      let response = await fetch(currenetWeaatherUrl);
      if(!response.ok){
        throw new Error('Weather data not available');
    }
    setInterval(()=>{
        const Time = new Date();
        let hour =  Time.getHours();
        let min = Time.getMinutes().toString().padStart(2,0);
        let sec = Time.getSeconds().toString().padStart(2,0);
        let ampm = hour>=12 ? 'pm' : `am`;
        hour = hour%12 || 12;
        hour = hour.toString().padStart(2,0);
        let day = Time.getDay();
        let date = Time.getDate();
        let month = (Time.getMonth()+1);
        let year = Time.getFullYear();
        time.textContent = `${hour} : ${min} : ${sec} ${ampm}`;
        today.textContent = days[day].toUpperCase()+` - `+date+` / `+month+` / `+year; 
    },1000)
    
    const data = await response.json();
    const current = parseInt(data.current.last_updated.split(" ")[1].split(":")[0])
    console.log(current);
    const day = data.forecast.forecastday;
    console.log(data)
    updateTemperature(data.current.temp_c);
    updateIcone(data.current.condition.icon)
    updateOther(data.current);
    
    
    createWeeklyForecast(data.forecast.forecastday);
    hourly(data.forecast.forecastday);
    finder.style.display = "block";

    }catch(error){
        //console.error('Error fetching weather data',error);
    }
    
}
function updateTemperature(temKelvin){
    Temp.innerHTML = `${(temKelvin).toFixed(2)}&#176;C`;
}
function updateIcone(iconCode){
    let weatherImg = iconCode;
    img.src = weatherImg;
}
function updateOther(data){
    humidity.innerHTML = `Humidity : ${data.humidity}%`;
    feel.innerHTML = `Feellike : ${(data.feelslike_c).toFixed(2)}&#176;C`
    sky.innerHTML = `Sky : ${data.condition.text}`
}

function hourly(info){
    const time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let ampm = hours>=12 ? 'pm' : `am`;
    if(hours<22){
        one.textContent = `${(hours%12+1)}:${min} ${ampm}`;
        wet1.innerHTML = `${info[0].hour[hours+1].condition.text}`;
        two.textContent = `${(hours%12)+2}:${min} ${ampm}`;
        wet2.innerHTML = `${info[0].hour[hours+2].condition.text}`;
        three.textContent = `${(hours%12)+3}:${min} ${ampm}`;
        wet3.innerHTML = `${info[0].hour[hours+3].condition.text}`;
    }else if(hours < 23){
        one.textContent = `${(hours%12+1)}:${min} ${ampm}`;
        wet1.innerHTML = `${info[0].hour[hours+1].condition.text}`;
        two.textContent = `${(hours%12)+2}:${min} ${ampm}`;
        wet2.innerHTML = `${info[0].hour[hours+2].condition.text}`;
        three.textContent = `${(hours%12)+3}:${min} ${ampm}`;
        wet3.innerHTML = `${info[1].hour[0].condition.text}`;

    }
    else{
        one.textContent = `${(hours%12+1)}:${min} ${ampm}`;
        wet1.innerHTML = `${info[0].hour[hours+1].condition.text}`;
        two.textContent = `${(hours%12)+2}:${min} ${ampm}`;
        wet2.innerHTML = `${info[1].hour[0].condition.text}`;
        three.textContent = `${(hours%12)+3}:${min} ${ampm}`;
        wet3.innerHTML = `${info[1].hour[1].condition.text}`;
    }
}
function getDayName(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function createWeeklyForecast(forecastData) {
    const weekContainer = document.getElementById('week');
    weekContainer.innerHTML = '';  // Clear existing content
    forecastData.forEach((dayData, index) => {
        const day = getDayName(dayData.date)
        const dayDiv = document.createElement('div');
        dayDiv.className = 'same';
        
        const dayNameDiv = document.createElement('div');
        dayNameDiv.className = 'day-name';
        dayNameDiv.textContent = day;
        dayDiv.appendChild(dayNameDiv);

        const conditionDiv = document.createElement('div');
        conditionDiv.className = 'condition';
        conditionDiv.textContent = dayData.day.condition.text;
        dayDiv.appendChild(conditionDiv);

        const img = document.createElement('img');
        img.src = dayData.day.condition.icon;
        img.alt = dayData.day.condition.text;
        dayDiv.appendChild(img);

        weekContainer.appendChild(dayDiv);
    });
}

// DOM Elements
// const timeElement = document.querySelector('#time p');
// const todayElement = document.getElementById('today');
// const temperatureElement = document.querySelector('#Temp');
// const weatherIconElement = document.querySelector('#temp img');
// const humidityElement = document.getElementById('humidity');
// const feelElement = document.getElementById('feel');
// const skyElement = document.getElementById('sky');
// const hourElements = [
//     { time: document.getElementById('one'), condition: document.getElementById('wet1') },
//     { time: document.getElementById('two'), condition: document.getElementById('wet2') },
//     { time: document.getElementById('three'), condition: document.getElementById('wet3') }
// ];
// const weekContainer = document.getElementById('week');

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// // Update the current time and date every second
// setInterval(() => {
//     const now = new Date();
//     const hour = now.getHours();
//     const min = now.getMinutes().toString().padStart(2, '0');
//     const sec = now.getSeconds().toString().padStart(2, '0');
//     const ampm = hour >= 12 ? 'PM' : 'AM';
//     const formattedHour = (hour % 12 || 12).toString().padStart(2, '0');
//     const day = now.getDay();
//     const date = now.getDate();
//     const month = now.getMonth() + 1;
//     const year = now.getFullYear();

//     timeElement.textContent = `${formattedHour} : ${min} : ${sec} ${ampm}`;
//     todayElement.textContent = `${daysOfWeek[day].toUpperCase()} - ${date} / ${month} / ${year}`;
// }, 1000);

// // Fetch and display weather data based on city input
// async function submit() {
//     const city = document.querySelector('#cityInput').value;
//     const weatherAPIUrl = `http://api.weatherapi.com/v1/forecast.json?key=18dc22ca5dbb46c19b4150632242008&q=${city}&days=7&aqi=yes&alerts=yes`;

//     try {
//         const response = await fetch(weatherAPIUrl);
//         if (!response.ok) {
//             throw new Error('Weather data not available');
//         }

//         const data = await response.json();
//         const currentHour = parseInt(data.current.last_updated.split(" ")[1].split(":")[0], 10);

//         updateTemperature(data.current.temp_c);
//         updateWeatherIcon(data.current.condition.icon);
//         updateOtherDetails(data.current);
//         updateHourlyForecast(data.forecast.forecastday, currentHour);
//         createWeeklyForecast(data.forecast.forecastday);
//     } catch (error) {
//         console.error('Error fetching weather data', error);
//     }
// }

// // Update temperature display
// function updateTemperature(tempCelsius) {
//     temperatureElement.innerHTML = `${tempCelsius.toFixed(2)}&#176;C`;
// }

// // Update weather icon display
// function updateWeatherIcon(iconUrl) {
//     weatherIconElement.src = iconUrl;
// }

// // Update other weather details (humidity, feel like, sky condition)
// function updateOtherDetails(data) {
//     humidityElement.innerHTML = `Humidity: ${data.humidity}%`;
//     feelElement.innerHTML = `Feels like: ${(data.feelslike_c).toFixed(2)}&#176;C`;
//     skyElement.innerHTML = `Sky: ${data.condition.text}`;
// }


//     function hourly(info){
//         const time = new Date();
//         let hours = time.getHours();
//         let min = time.getMinutes();
//         let ampm = hours>=12 ? 'pm' : `am`;
//         if(hours<21){
//             one.textContent = `${(hours%12+1)}:${min} ${ampm}`;
//             wet1.innerHTML = `${info[0].hour[hours+1].condition.text}`;
//             two.textContent = `${(hours%12)+2}:${min} ${ampm}`;
//             wet2.innerHTML = `${info[0].hour[hours+2].condition.text}`;
//             three.textContent = `${(hours%12)+3}:${min} ${ampm}`;
//             wet3.innerHTML = `${info[0].hour[hours+3].condition.text}`;
//         }else if(hours<22){
//             one.textContent = `${(hours%12+1)}:${min} ${ampm}`;
//             wet1.innerHTML = `${info[0].hour[hours+1].condition.text}`;
//             two.textContent = `${(hours%12)+2}:${min} ${ampm}`;
//             wet2.innerHTML = `${info[0].hour[hours+2].condition.text}`;
//             three.textContent = `${(hours%12)+3}:${min} ${ampm}`;
//             wet3.innerHTML = `${info[1].hour[0].condition.text}`;
    
//         }
//         else{
//             one.textContent = `${(hours%12+1)}:${min} ${ampm}`;
//             wet1.innerHTML = `${info[0].hour[hours+1].condition.text}`;
//             two.textContent = `${(hours%12)+2}:${min} ${ampm}`;
//             wet2.innerHTML = `${info[1].hour[0].condition.text}`;
//             three.textContent = `${(hours%12)+3}:${min} ${ampm}`;
//             wet3.innerHTML = `${info[1].hour[1].condition.text}`;
//         }
//     }

// // Create weekly forecast display
// function createWeeklyForecast(forecastData) {
//     weekContainer.innerHTML = ''; // Clear existing content

//     forecastData.forEach(dayData => {
//         const dayName = getDayName(dayData.date);
//         const dayDiv = document.createElement('div');
//         dayDiv.className = 'same';

//         const dayNameDiv = document.createElement('div');
//         dayNameDiv.className = 'day-name';
//         dayNameDiv.textContent = dayName;
//         dayDiv.appendChild(dayNameDiv);

//         const conditionDiv = document.createElement('div');
//         conditionDiv.className = 'condition';
//         conditionDiv.textContent = dayData.day.condition.text;
//         dayDiv.appendChild(conditionDiv);

//         const img = document.createElement('img');
//         img.src = dayData.day.condition.icon;
//         img.alt = dayData.day.condition.text;
//         dayDiv.appendChild(img);

//         weekContainer.appendChild(dayDiv);
//     });
// }

// // Get day name from date string
// function getDayName(dateString) {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { weekday: 'long' });
// }
