const axios = require('axios')

const puisi1 = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/puisi1`
        axios.get(url)
            .then(res => {
                const { result } = res.data
                resolve({ result })
             })
    })
}

module.exports = puisi1
