const express = require('express')
const app = express()
const productModules = require('./utils/products')
const path = require('path')
const port = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'), path.join(__dirname, 'public'))

app.get('', (req, res) => {
    productModules.getAllProducts((products) => {
        console.log(products)
        return res.render('index', { products })
    })

})

app.get('/agregar', (req, res) => {
    res.render('./pages/agregar')
})

app.listen(port, () => {
    console.log('Corriendo en el puerto ' + port)
})