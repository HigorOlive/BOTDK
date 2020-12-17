const axios = require('axios')

const fb = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('harap masukan link.') }
        var url = `https://mnazria.herokuapp.com/api/fbdownloadervideo?url=${teks}`
        axios.get(url)
            .then(res => {
                const { resultHD,resultSD } = res.data
                resolve({ hasil })
             })
             .catch(err => {
                 reject('sepertinya error.')
             })
    })
}

module.exports = fb
