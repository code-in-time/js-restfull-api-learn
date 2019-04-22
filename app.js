const express = require('express');
const app = express();
const morgan = require('morgan')

const productRoutes = require('./api/routes/products')
const ordersRoutes = require('./api/routes/orders')

app.use(morgan('dev'))
app.use('/products', productRoutes)
app.use('/orders', ordersRoutes)

app.use((req, res, next) => {
    const error = new Error('nor founs')
    res.status(404);
})

module.exports = app;

console.log(`server running on port ...`)
