const axios = require('axios')

const gay = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/howgay`
        axios.get(url)
            .then(res => {
                const { desc, persen } = res.data
                resolve({ desc, persen })
             })
    })
}

module.exports = gay
