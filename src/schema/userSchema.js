const Joi = require('joi')
const regexPhone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

module.exports = {
    create: Joi.object().keys({
        user: Joi.object().required().keys({
            name: Joi.string().required().min(3).max(30),
            phone: Joi.string().required().regex(regexPhone),
            email: Joi.string().required().regex(regexEmail),
            password: Joi.string().required().min(8).max(16)
        })
    }), 
    delete: Joi.object().keys({
        user: Joi.object().required().keys({
            name: Joi.string().required().min(3).max(30),
            phone: Joi.string().required().regex(regexPhone),
            email: Joi.string().required().regex(regexEmail),  
        })
    })
}