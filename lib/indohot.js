const axios = require('axios')

const indohot = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/indohot`
        axios.get(url)
            .then(res => {
                const { judul, genre, durasi, url } = res.data.result
                resolve({ judul, genre, durasi, url })
             })
    })
}

module.exports = indohot
