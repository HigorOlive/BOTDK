const axios = require('axios')

const spamcall = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nomer.') }
        var url = `https://arugaz.herokuapp.com/api/spamcall?no=${query}`
        axios.get(url)
            .then(res => {
                const { logs } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = spamcall
