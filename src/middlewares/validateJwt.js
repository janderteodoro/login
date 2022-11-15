const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = () => (request, response, next) => {
    try {
        const token = request.headers['x-access-token']
        if (!token) {
            return response.status(401).json({
                auth: false,
                flow: 'No token provided'
            })
        }
        jwt.verify(token, config.user.secretKeyToken, (err, decoded) => {
            if(err) {
                return response.status(500).json({
                    auth: false,
                    flow: 'Failed to authenticate token'
                })
            }
        })
        request.userId = decoded.id
        next()
    } catch (error) {
        throw new Error(error)
    }
} 