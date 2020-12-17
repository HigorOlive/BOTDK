const axios = require('axios')

const filmanime = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nama anime.') }
        var url = `https://arugaz.herokuapp.com/api/sdmovie?film=${query}`
        axios.get(url)
            .then(res => {
                const { title, rating, sinopis, video  } = res.data.result
                resolve({ hasil })
             })
    })
}

module.exports = filmanime
