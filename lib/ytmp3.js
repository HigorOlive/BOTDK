const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const ytmp3 = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('masukan teks link.') }
        var url = 'https://st4rz.herokuapp.com/api/yta2?url=' + teks
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.thumb)
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

module.exports = ytmp3
