import {validateIp} from './helpers'

const ipInput = document.querySelector('.search-bar__input')
document.querySelector('.search-bar__btn').addEventListener('click', getData)

function getData(event) {
    event.preventDefault()

    if (validateIp(ipInput.value)){
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_yvcazqEp1ciMFgd0jMZ0hW2S7d9X8&ipAddress=${ipInput.value}`)
            .then(response => response.json())
            .then(console.log)
    }

}



