const express = require('express')

const controller = require('../controllers/item')

const router = express.Router()

const path = 'items'

router.get(
    `/${path}`,
    controller.getData
    
)

module.exports = router