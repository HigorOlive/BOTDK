const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const waifu = () => {
    return new Promise((resolve, reject) => {
        var url = `https://st4rz.herokuapp.com/api/waifu`
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

module.exports = waifu
