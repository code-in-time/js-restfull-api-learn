const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handling get for /orders'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'handling post for /orders'
    })
})

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId
    res.status(200).json({
        message: `handling post for /orders/${id}`
    })
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: `handling patch for /orders/${id}`
    })
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId
    res.status(200).json({
        message: `handling delete for /orders/${id}`
    })
})

module.exports = router