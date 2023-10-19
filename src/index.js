import './scss/style.scss';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from '../img/icon-location.svg'
import {addTileLayer, getAddress, validateIp} from './helpers'

// Globals
const ipInput = document.querySelector('.search-input')
const ipInfo = document.querySelector('#ip')
const locationInfo = document.querySelector('#location')
const timezoneInfo = document.querySelector('#timezone')
const ispInfo = document.querySelector('#isp')
const mapArea = document.querySelector('.map')

// Map Leaflet init
const map = L.map(mapArea).setView([51.505, -0.09], 13);
addTileLayer(map)

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [46, 56],
});

// Event attach
document.querySelector('.search-btn').addEventListener('click', getData)

// Event logic
function getData(event) {
    event.preventDefault()

    if (validateIp(ipInput.value)){
        getAddress(ipInput.value)
            .then (printInfo)
    }
}

// Basic logic
function printInfo({ip, location, isp}) {
    const {lat, lng, country, region, city, timezone} = location || {}

    ipInfo.innerText = ip
    locationInfo.innerText = `${country}, ${region}, ${city}`
    timezoneInfo.innerText = 'UTC ' + timezone
    ispInfo.innerText = isp

    map.setView([lat, lng])
    L.marker([lat, lng], {icon: markerIcon}).addTo(map)
}
