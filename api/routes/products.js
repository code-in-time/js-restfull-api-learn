const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get for /products'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'handling post for /products'
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: `handling post for /products/${id}`
    })
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: `handling patch for /products/${id}`
    })
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: `handling delete for /products/${id}`
    })
})

module.exports = router