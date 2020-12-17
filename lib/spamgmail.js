const axios = require('axios')

const spamgmail = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan gmail.') }
        var url = `https://arugaz.herokuapp.com/api/spamgmail?target=${query}&jum=10}`
        axios.get(url)
            .then(res => {
                const { logs } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = spamgmail
