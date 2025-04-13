const currentTemp = document.querySelector('#current-temp')
const weatherIcon = document.querySelector('#weather-icon')
const captionDesc = document.querySelector('figcaption')
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.71&lon=-112.10&units=imperial&appid=e1a74b86df31d3f79449799eb8ed7845'

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok){
            const data = await response.json()
            displayResults(data)
        } else {
            throw Error(await response.text())
        }

    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.textContent = `${Math.round(data.main.temp)}°F`
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description
    weatherIcon.setAttribute('src', `${iconsrc}`)
    weatherIcon.setAttribute('alt',`${desc}`)
    captionDesc.textContent = `${desc}`
}

apiFetch()