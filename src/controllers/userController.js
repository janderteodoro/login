module.exports = ({ userService, mongo }) => {
    const createUser = async (request, response) => {
        try {
            const { body } = request
            const execute = await userService().createUser({
                body,
                createMongo: mongo.createMongo
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