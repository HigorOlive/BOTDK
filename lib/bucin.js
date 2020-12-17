const axios = require('axios')

const bucin = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/howbucins`
        axios.get(url)
            .then(res => {
                const { desc } = res.data
                resolve({ desc })
             })
    })
}

module.exports = bucin
