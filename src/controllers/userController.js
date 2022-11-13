module.exports = ({ userService, mongo, config }) => {
    const createUser = async (request, response) => {
        try {
            const { body } = request
            const execute = await userService().createUser({
                body,
                createMongo: mongo.createMongo,
                findOneMongo: mongo.findOneMongo,
                config
            })
            return response.json({ execute })
        } catch(error) {
            throw new Error(error)
        }
    }

    return {
        createUser
    }
}