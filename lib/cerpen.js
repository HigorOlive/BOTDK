const axios = require('axios')

const cerpen = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/cerpen`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
    })
}

module.exports = cerpen
