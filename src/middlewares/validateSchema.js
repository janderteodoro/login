exports.validateSchema = (schema) => (request, response, next) => {
    const {
        error,
    } = schema.validate(request.body)

    if(error){
        response.status(422).json({
            message: error.details[0].message
        })
    } else {
        next()
    }
}