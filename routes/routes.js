const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.json({
        message: 'home page correct'
    })
})

module.exports = router