const { MongoClient } = require('mongodb')
const config = require('../../config')

const client = new MongoClient(process.env.MONGO_URI)


async function run() {
    try {
        await client.connect()
        await client.db('Login').collection('teste').insertOne({
            name: 'aleatoriatakas',
            mas: 'Mas nao existe mas'
        })
    } catch {
        console.error('Error in Connection with Mongo')
    } finally {
        client.close()
    }
}

run()