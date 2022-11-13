const CONSTANTS = require('../constants')

module.exports = () => {
    
    async function createUser({ body, createMongo }) {
        const { user } = body

        const response = await createMongo({
            db: CONSTANTS.createUser.db,
            collection: CONSTANTS.createUser.collection,
            user: user,
        })
        if(response.acknowledged){
            return {
                data: {
                    userCreated : true,
                    objectId: response.insertedId,
                },
                response
            }
        }
        return {
            data: {
                userCreated: false,
                response
            },
            response
        }
    }

    return {
        createUser,
    }
}