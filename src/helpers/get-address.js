export async function getAddress(ip) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_yvcazqEp1ciMFgd0jMZ0hW2S7d9X8&ipAddress=${ip}`)
    return await response.json()
}