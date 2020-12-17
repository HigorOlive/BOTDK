const axios = require('axios')

const namaninja = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan namamu') }
        var url = `https://api.terhambar.com/ninja?nama=${query}`
        axios.get(url)
            .then(res => {
                const { ninja  } = res.data.result
                resolve({ hasil })
             })
    })
}

module.exports = namaninja
