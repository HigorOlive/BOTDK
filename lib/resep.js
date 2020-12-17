const axios = require('axios')

const resep = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan nama makanan.') }
        var url = `https://masak-apa.tomorisakura.vercel.app/api/search/?q=${query}`
        axios.get(url)
            .then(res => {
                const { title, user,  datePublished, dificulty, times, serving, bahan, tutor  } = res.data.result
                resolve({ hasil })
             })
    })
}

module.exports = resep
