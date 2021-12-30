const request = require('postman-request')

const BASE_URL = 'https://test-api-v2.herokuapp.com/'

let getAllProducts = (callback) => {
    request(`${BASE_URL}/products`, (err, res, body) => {
        let allProducts = JSON.parse(body)
        callback(allProducts)
    })
}

let getSingleProducts = (callback) => {
    request(`${BASE_URL}/product`, (err, res, body) => {
        callback(body)
    })
}

module.exports = { getAllProducts, getSingleProducts }