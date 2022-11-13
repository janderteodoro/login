const config = require('../config')

module.exports = () => {
    
    async function createUser({ body, createMongo, findOneMongo }) {
        const { user } = body
        const { email } = user
        const responseToFind = await findOneMongo({
            db: config.createUser.db,
            collection: config.createUser.collection,
            email: email,
        })
        if(responseToFind !== null) {
            return {
                data: {
                    messge: 'User alraedy exist'
                }
            }        
        }
        const response = await createMongo({
            db: config.createUser.db,
            collection: config.createUser.collection,
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