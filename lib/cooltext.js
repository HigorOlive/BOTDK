const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const cooltext = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('masukan teks.') }
        var url = 'https://api.haipbis.xyz/randomcooltext?text=' + teks
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = cooltext
