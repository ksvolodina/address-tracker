import {validateIp} from './helpers'

// Globals
const ipInput = document.querySelector('.search-bar__input')
const ipInfo = document.querySelector('#ip')
const locationInfo = document.querySelector('#location')
const timezoneInfo = document.querySelector('#timezone')
const ispInfo = document.querySelector('#isp')

// Event attach
document.querySelector('.search-bar__btn').addEventListener('click', getData)

// Event logic
function getData(event) {
    event.preventDefault()

    if (validateIp(ipInput.value)){
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_yvcazqEp1ciMFgd0jMZ0hW2S7d9X8&ipAddress=${ipInput.value}`)
            .then(response => response.json())
            .then (printInfo)
    }
}

// Basic logic
function printInfo({ip, location, isp}) {
    ipInfo.innerText = ip
    locationInfo.innerText = `${location.country}, ${location.region}`
    timezoneInfo.innerText = location.timezone
    ispInfo.innerText = isp
}



