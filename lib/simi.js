const axios = require('axios')

const simi = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan teks.') }
        var url = `https://st4rz.herokuapp.com/api/simsimi?kata=${query}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = simi
