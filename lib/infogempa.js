const axios = require('axios')

const infogempa = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/infogempa`
        axios.get(url)
            .then(res => {
                const { lokasi, kedalaman, koordinat, magnitude, waktu } = res.data
                resolve({ lokasi, kedalaman, koordinat, magnitude, waktu })
             })
    })
}

module.exports = infogempa
