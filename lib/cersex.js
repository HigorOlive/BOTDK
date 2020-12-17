const axios = require('axios')

const cersex = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/cersex2`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
    })
}

module.exports = cersex
