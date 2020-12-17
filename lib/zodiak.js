const axios = require('axios')

const zodiak = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan tanggal lahirmu.') }
        var url = `https://arugaz.herokuapp.com/api/getzodiak?nama=aruga&tgl-bln-thn=${query}`
        axios.get(url)
            .then(res => {
                const { lahir, ultah, usia, zodiak } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = zodiak
