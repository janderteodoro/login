const { MongoClient, ObjectId } = require('mongodb')
require('dotenv').config()

const client = new MongoClient(process.env.MONGO_URI)

async function createMongo({ db, collection, user }){
    try {
        await client.connect()
        const response = await client.db(db).collection(collection).insertOne(user)
        return response
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

async function deleteOneMongo({ db, collection, _id }) {
    try {
        await client.connect()
        const response = await client.db(db).collection(collection).deleteOne({'_id': ObjectId(_id)})
        return response
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

async function findOneMongo({ db, collection, email}) {
    try {
        await client.connect()
        const response = await client.db(db).collection(collection).findOne({ email })
        return response 
    } catch(error) {
        throw new Error(error)
    } finally {
        client.close()
    }
}

module.exports = {
    createMongo,
    deleteOneMongo,
    findOneMongo,
}