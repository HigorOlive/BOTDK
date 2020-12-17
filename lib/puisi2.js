const axios = require('axios')

const puisi2 = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/puisi3`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
    })
}

module.exports = puisi2
