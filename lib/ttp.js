const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const ttp = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('masukan teks yang akan ditulis.') }
        var url = 'https://st4rz.herokuapp.com/api/ttp?kata=' + teks
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

module.exports = ttp
