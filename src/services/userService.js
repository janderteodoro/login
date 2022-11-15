module.exports = () => {
    
    async function createUser({ body, createMongo, findOneMongo, config }) {
        const { user } = body
        const { email } = user
        const responseToFind = await findOneMongo({
            db: config.user.db,
            collection: config.user.collection,
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
            db: config.user.db,
            collection: config.user.collection,
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

    async function deleteUser({ body, deleteOneMongo, findOneMongo, config }){
        const { user } = body
        const { email } = user
        const responseToFind = await findOneMongo({
            db: config.user.db,
            collection: config.user.collection,
            email: email,
        })
        if(!responseToFind) {
            return {
                data: {
                    message: 'User not found'
                }
            }
        }
        const id = responseToFind._id
        const response = await deleteOneMongo({
            db: config.user.db,
            collection: config.user.collection,
            _id: id,
        })
        return {
            response
        }
    }

    return {
        createUser,
        deleteUser,
    }
}