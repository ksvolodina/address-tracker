export function validateIp(ip) {
    if (/^(([01]?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))\.){3}([01]?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))$/
        .test(ip)) {
        return true
    }
    alert('You have to enter a valid IP address')
    return false
}