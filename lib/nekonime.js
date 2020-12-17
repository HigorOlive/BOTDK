const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const nekonime = () => {
    return new Promise((resolve, reject) => {
        
        var url = `https://arugaz.herokuapp.com/api/nekonime`
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

module.exports = nekonime
