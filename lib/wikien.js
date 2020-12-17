const axios = require('axios')

const wikien = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan teks.') }
        var url = `https://arugaz.herokuapp.com/api/wikien?q=${query}`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = wikien
