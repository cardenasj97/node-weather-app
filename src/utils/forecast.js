const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/1c10e7179d1f919ed06f633cd3f0e029/${latitude},${longitude}?units=si`
    
    request({ url, json: true }, (error, { body }) => {
        if (error, undefined) {
            callback('Unable to connect to weather service')
        } else if (body.error, undefined) {
            callback('Unable to find location')
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degree out. There is a ${body.currently.precipProbability}% chance of rain`)
        }
    })
}

module.exports = forecast