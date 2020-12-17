const axios = require('axios')

const bitly = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan link') }
        var url = `https://api.haipbis.xyz/bitly?url=${query}`
        axios.get(url)
            .then(res => {
                const { result} = res.data
                resolve({ hasil })
             })
    })
}

module.exports = bitly
