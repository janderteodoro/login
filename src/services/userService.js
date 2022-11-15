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
                    message: 'User alraedy exist'
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

    async function listUsers({ listAllDataMongo, config }) {
        const response = await listAllDataMongo({
            db: config.user.db,
            collection: config.user.collection,
        })
        return {
            response
        }
    }

    async function loginUser({ findOneMongo, body, config, jwt }) {
        const { user } = body
        const responseDb = await findOneMongo({
            db: config.user.db,
            collection: config.user.collection,
            email: user.email
        })
        if(!responseDb) return {
            message: 'User not found'
        }
        const { password, _id: { id } } = responseDb
        if (!(password === user.password)){
            return {
                flow: 'Incorrect password'
            }
        }
        const token = jwt.sign({ id }, config.user.secretKeyToken, {
            expiresIn: 300
        })
        if (!token) {
            return {
                flow: 'error generating token'
            }
        }
        return {
            tokenAuth: token
        }
    }

    return {
        createUser,
        deleteUser,
        listUsers,
        loginUser
    }
}