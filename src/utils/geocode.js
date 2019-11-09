const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY2FyZGVuYXNqOTciLCJhIjoiY2sybW9xd3lyMGs1YjNvcG42aDlzOGY1ZSJ9.Tu_xd7Hnph0RCrZGi7zsmw&limit=1`

    request({ url, json: true }, (error, { body }) => {
        debugger
        if (error, undefined) {
            callback('Unable to connect to location services')
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode