const axios = require('axios')

const spamsms = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nomer.') }
        var url = `https://arugaz.herokuapp.com/api/spamsms?no=${query}&jum=20`
        axios.get(url)
            .then(res => {
                const { logs } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = spamsms
