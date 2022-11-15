module.exports = ({ userService, mongo, config, jwt }) => {
    const createUser = async (request, response) => {
        try {
            const { body } = request
            const execute = await userService().createUser({
                body,
                createMongo: mongo.createMongo,
                findOneMongo: mongo.findOneMongo,
                config
            })
            return response.json(execute)
        } catch(error) {
            throw new Error(error)
        }
    }

    const deleteUser = async (request, response) => {
        try {
            const { body } = request
            const execute = await userService().deleteUser({
                body,
                deleteOneMongo: mongo.deleteOneMongo,
                findOneMongo: mongo.findOneMongo,
                config
            })
            return response.json(execute)
        } catch(error) {
            throw new Error(error)
        }
    }

    const listUsers = async (request, response) => {
        try {
            const execute = await userService().listUsers({
                listAllDataMongo: mongo.listAllDataMongo,
                config
            })
            return response.json(execute)
        } catch(error) {
            throw new Error(error)
        }
    }

    const loginUser = async(request, response) => {
        try {
            const { body } = request
            const execute = await userService().loginUser({
                body,
                findOneMongo: mongo.findOneMongo,
                config,
                jwt
            })
            return response.json(execute)
        } catch (error) {
            throw new Error(error)
        }
    }

    return {
        createUser,
        deleteUser,
        listUsers,
        loginUser,
    }
}