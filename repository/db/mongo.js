const { MongoClient, ObjectId } = require('mongodb')
require('dotenv').config()

const client = new MongoClient(process.env.MONGO_URI)

async function createUser({ db, collection, user }){
    try {
        await client.connect()
        await client.db(db).collection(collection).insertOne(user)
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

async function deleteUser({ db, collection, _id }) {
    try {
        await client.connect()
        await client.db(db).collection(collection).deleteOne({'_id': ObjectId(_id)})
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

async function findOneUser({ db, collection, email}) {
    try {
        await client.connect()
        await client.db(db).collection(collection).findOne({ email })
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

module.exports = {
    createUser,
    deleteUser,
    findOneUser,
}